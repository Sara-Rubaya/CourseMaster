import { auth } from '../firebase/firebase.init'

import { useEffect, useState } from 'react'

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import axios from 'axios';
import { AuthContext } from './AuthContext';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

 

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

  const updateUser = updatedData => {
    return updateProfile(auth.currentUser, updatedData)
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      //post request for JWT using user email
      if(currentUser?.email){
        axios.post(`${import.meta.env.VITE_API_URL}/bookings`,{
          email: currentUser?.email,
        })
        .then(res =>{
          localStorage.setItem('token', res.data.token)
        })
      }else{
        localStorage.removeItem('token')
      }
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser,
    googleSignIn
  }
 return (
  <AuthContext.Provider value={authData}>
    {children}
  </AuthContext.Provider>
)

}

export default AuthProvider