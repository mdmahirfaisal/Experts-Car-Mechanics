import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoding] = useState(true);

    const auth = getAuth();

    // google sign in 
    const signInUsingGoogle = () => {
        setIsLoding(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoding(false));
    };
    //////////  log out 
    const logOut = () => {
        setIsLoding(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoding(false));
    };
    /////// observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsLoding(false);

        });
        return () => unsubscribed;
    }, []);

    return {
        user, isLoading, signInUsingGoogle, logOut
    };
};

export default useFirebase;