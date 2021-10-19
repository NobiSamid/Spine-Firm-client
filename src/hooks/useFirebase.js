import initializeAuthentication from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";

////////////// Calling this function for getting Config data of firebase //////////
initializeAuthentication();

const useFirebase = () =>{

    // Calling Auth and Provider function from firebase
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // states for user , error and reloading the web page
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

//////////////////////////// Authentication with Email and Password part  /////////////

    // this function called from Login.js and passed two parameter email & pass and used for Registration
    const handleUserRegister = (email, pass) =>{
        createUserWithEmailAndPassword(auth, email, pass)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
            // setUserName();
        })
        .catch(error =>{
            setError(error.message);
        });
    };

    // called from Login.js passing two parameter email and pass for Login
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

    // called from Login.js passing one parameter name for updating username but me failed.
    // const setUserName = (name) =>{
    //     updateProfile(auth.currentUser, {displayName:{name}})
    //     .then(() =>{
        
    //     })
    // }



////////////////////  Authentication with Google Popup ///////////////////
    const handleGoogleLogin = () =>{
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        // .then(result =>{
        //     setUser(result.user);
        //     setError("");
        // })
        // .catch(error =>{
        //     setError(error.message)
        // })
    }


    ////////////////////////////// Observe user state change for all authentication ///////////////
    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unSubscribed;
    },[])

    ///////////////// Log out for all authentication system //////////////
    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{})
        .finally(()=>setIsLoading(false));
    }

    // returning all function results
    return{
        setUser,
        user,
        setError,
        error, 
        setIsLoading,
        isLoading,
        handleUserRegister,
        handleUserLogin,
        handleGoogleLogin,
        logOut,
        // setUserName
    }
}

export default useFirebase;