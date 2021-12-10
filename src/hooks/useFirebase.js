import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { baseUrl } from "./useUrl";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
import initializeAuthentication from "../components/Firebase/firebase.initialize";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const gitHugProvider = new GithubAuthProvider();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const [admin, setAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const googleSignin = () => {
    return signInWithPopup(auth, googleProvider);
    // .then((result) => {
    //   //console.log(result.user);
    //   setUser(result.user);
    // })
    // .catch((err) => {
    //   //console.log(err.message);
    //   setError(err.message);
    // });
  };

  const gitHubSignIn = () => {
    signInWithPopup(auth, gitHugProvider)
      .then((result) => {
        //console.log(result.user);
        setError("");
        setUser(result.user);

        saveUser(result.user.email, result.user.displayName, "PUT");
      })
      .catch((err) => {
        //console.log(err.message);
        setError(err.message);
      });
  };

  const userRegistration = (userEmail, userPassword) => {
    return createUserWithEmailAndPassword(auth, userEmail, userPassword);
    // .then((userCredential) => {
    //   const newUser = userCredential.user;
    //   //return newUser;
    //   setError("");
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   setError(errorMessage);
    //   console.error(errorMessage);
    // });
  };

  const userLogin = (userEmail, userPassword) => {
    return signInWithEmailAndPassword(auth, userEmail, userPassword);
    // .then((userCredential) => {
    //   // Signed in
    //   //const user = userCredential.user;
    //   setUser(userCredential.user);
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   setError(errorMessage);
    //   console.error(errorMessage);
    // });
  };

  const profileUpdate = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const logOut = () => {
    signOut(auth).then(() => setUser({}));
  };

  const saveUser = (email, displayName, method) => {
    console.log(method, "saveuser call");
    const newUser = { email, displayName };
    const url = baseUrl + "/users";
    //clearTheCart();
    fetch(url, {
      method: method,
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((d) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  useEffect(() => {
    const uri = baseUrl + `/users/${user?.email}`;
    fetch(uri)
      .then((result) => result.json())
      .then((result) => setAdmin(result.admin))
      .catch((err) => setError("Error at adimn check api!"));
  }, [user.email]);

  return {
    googleSignin,
    gitHubSignIn,
    userRegistration,
    userLogin,
    logOut,
    user,
    error,
    setError,
    setUser,
    profileUpdate,
    saveUser,
    admin,
  };
};

export default useFirebase;
