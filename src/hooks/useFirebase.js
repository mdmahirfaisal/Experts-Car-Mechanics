import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoding] = useState(true);

    const auth = getAuth();

    // google sign in 
    const signInUsingGoogle = () => {
        setIsLoding(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoding(false));
    };
    //////////  log out 
    const logOut = () => {
        setIsLoding(true);
        signOut(auth)
            .then(() => {
                setError('');

            })
            .catch(error => {
                setError(error.message)
            })
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
        user, error, setError, isLoading, signInUsingGoogle, logOut
    };
};

export default useFirebase;