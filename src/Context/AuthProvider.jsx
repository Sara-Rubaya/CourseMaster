import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { app } from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ================================
  // Create User (Email/PW + Profile)
  // ================================
  const createUser = async (email, password, displayName, photoFile) => {
    setLoading(true);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    let photoURL = "";
    if (photoFile) {
      const storageRef = ref(storage, `profileImages/${userCredential.user.uid}_${photoFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, photoFile);
      await new Promise((resolve, reject) => {
        uploadTask.on("state_changed", null, reject, async () => {
          photoURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve();
        });
      });
    }

    await updateProfile(userCredential.user, {
      displayName: displayName || "Anonymous",
      photoURL: photoURL,
    });

    setUser({ ...userCredential.user, displayName, photoURL });
    setLoading(false);
    return userCredential;
  };

  // Login
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Update Profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
  };

  // ================================
  // AUTH STATE LISTENER
  // ================================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        try {
          const encodedEmail = encodeURIComponent(currentUser.email);

          // Check user in DB
          const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/email/${encodedEmail}`);
          if (!res.data) {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/users`, {
              email: currentUser.email,
              displayName: currentUser.displayName || "Anonymous",
              photoURL: currentUser.photoURL || "",
              role: "customer",
              createdAt: new Date(),
            });
          }
        } catch (err) {
          if (err.response?.status === 404) {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/users`, {
              email: currentUser.email,
              displayName: currentUser.displayName || "Anonymous",
              photoURL: currentUser.photoURL || "",
              role: "customer",
              createdAt: new Date(),
            });
          }
        }

        // ======================
        // 🔐 REQUEST JWT TOKEN
        // ======================
        try {
          const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/jwt`, {
            email: currentUser.email,
          });
          localStorage.setItem("access-token", data.token);
        } catch (jwtErr) {
          console.error("JWT request failed:", jwtErr.response?.data || jwtErr.message);
        }
      } else {
        localStorage.removeItem("access-token");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
