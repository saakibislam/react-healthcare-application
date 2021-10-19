import { initializeAuthentication } from "./firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setTimeout("alert('Successfully logged out');", 1);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    const registerUser = (email, password) => {
        console.log("from hook", email, password);
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

            .finally(() => setIsLoading(false))
    }

    const setUserName = (name) => {
        return updateProfile(auth.currentUser, { displayName: name })

    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, [])
    return {
        user,
        isLoading,
        setIsLoading,
        googleLogin,
        logOut,
        registerUser,
        setUserName

    }
}
export default useFirebase;