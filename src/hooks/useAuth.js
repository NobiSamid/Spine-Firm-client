import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider";

// calling functions from context folder in AuthProvider for making useFirebase global as useAuth. /////
const useAuth = () =>{
    return useContext(AuthContext);
}

export default useAuth;