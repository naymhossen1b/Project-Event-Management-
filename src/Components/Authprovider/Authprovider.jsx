/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);

//social provider
const googleProvider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);


  //social login
  const googleLogin = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
  };

  //create user with email
  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn user
  const userLogin = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //signOut

  const logout = () => {
    setLoding(true);
    return signOut(auth);
  };


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(false); 
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, googleLogin, createUser, userLogin, logout, loding };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
    </div>
  );
};

export default Authprovider;
