import React, { useState, useContext, useEffect } from "react";
import FirebaseContext from "../context/firebase";

const useAuthListiner = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listiner = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    //read about listiner , and how they effect the application
    return () => listiner();
  }, []);

  return { user };
};

export default useAuthListiner;
