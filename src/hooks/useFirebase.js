import initializeAuthentication from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();

const useFirebase = () =>{
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const [user, setUser] = useState({});
    const [error, setError] = useState("");

//////////////////////////// Authentication with Email and Password part  /////////////
    const handleUserRegister = (email, pass) =>{
        createUserWithEmailAndPassword(auth, email, pass)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error =>{
            setError(error.message);
        })
    };

    const handleUserLogin = (email, pass) =>{
        signInWithEmailAndPassword(auth, email, pass)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            setError(error.message);
        })
    };



////////////////////  Authentication with Google Popup
    const handleGoogleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
        // .then(result =>{
        //     setUser(result.user);
        //     setError("");
        // })
        // .catch(error =>{
        //     setError(error.message)
        // })
    }


    ////////////////////////////// Observe user state change for all authentication
    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
        });
        return () => unSubscribed;
    },[])

    ///////////////// Log out for all authentication system
    const logOut = () =>{
        signOut(auth)
        .then(()=>{})
    }

    return{
        user,
        error, 
        handleUserRegister,
        handleUserLogin,
        handleGoogleLogin,
        logOut
    }
}

export default useFirebase;