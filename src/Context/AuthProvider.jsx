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

  // Register new user (email, password, displayName, photoFile)
  const createUser = async (email, password, displayName, photoFile) => {
    setLoading(true);

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    let photoURL = "";
    if (photoFile) {
      const storageRef = ref(storage, `profileImages/${userCredential.user.uid}_${photoFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, photoFile);

      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          null,
          (error) => {
            setLoading(false);
            reject(error);
          },
          async () => {
            photoURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve();
          }
        );
      });
    }

    await updateProfile(userCredential.user, {
      displayName: displayName || "Anonymous",
      photoURL: photoURL || "",
    });

    setUser({
      ...userCredential.user,
      displayName: displayName || "Anonymous",
      photoURL: photoURL || "",
    });

    setLoading(false);
    return userCredential;
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // 🔐 Auth State Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("CurrentUser -->", currentUser?.email);
      setUser(currentUser);

      if (currentUser?.email) {
        try {
          const encodedEmail = encodeURIComponent(currentUser.email);

          // Check if user exists
          const { data: existingUser } = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/users/email/${encodedEmail}`
          );

          if (!existingUser) {
            await axios.post(
              `${import.meta.env.VITE_API_URL}/api/users`,
              {
                email: currentUser.email,
                displayName: currentUser.displayName || "Anonymous",
                photoURL: currentUser.photoURL || "",
                role: "customer",
                createdAt: new Date(),
              },
              { withCredentials: true }
            );
          }
        } catch (error) {
          if (error.response?.status === 404) {
            try {
              await axios.post(
                `${import.meta.env.VITE_API_URL}/api/users`,
                {
                  email: currentUser.email,
                  displayName: currentUser.displayName || "Anonymous",
                  photoURL: currentUser.photoURL || "",
                  role: "customer",
                  createdAt: new Date(),
                },
                { withCredentials: true }
              );
            } catch (postError) {
              console.error("Failed to create new user:", postError);
            }
          } else {
            console.error("Failed to save/check user in MongoDB:", error);
          }
        }

        // ✅ Get JWT token (catch error to prevent loading hang)
        try {
          await axios.post(
            `${import.meta.env.VITE_API_URL}/jwt`,
            { email: currentUser.email },
            { withCredentials: true }
          );
        } catch (jwtError) {
          console.error(
            "JWT fetch failed (ignored, dashboard will still load):",
            jwtError.response?.data || jwtError.message
          );
        }
      } else {
        await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
          withCredentials: true,
        });
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
