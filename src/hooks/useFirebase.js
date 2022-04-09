import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from "../firebase.init"

const auth = getAuth(app)  //etia mone rakhte hobe auth ke app diye call korte hobe.
const googleProvider = new GoogleAuthProvider()
const useFirebase = () => {
    const [user, setUser] = useState({})

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result => {
                const user = result.user;
                setUser(user)
                console.log(user)

            }))
            .catch(error => {
                console.error(error)
            })

    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('successfully sign out')
            })
            .catch(error => {
                console.error(error)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {    //amra ekhane etake set korlam karon amader user recent update pawar jonno state e.eta amder user er upur observation kore amader janay je user ki log in korche naki sign out korche. tai amra uodi user er recent update pete chai tahole eta use korbo .eta 2ta param ney ekta holo auth,arekta holo observer mane jar upor se observation ta korbe.mane amader je user er upor amra observation ta korte chai seta.ebong amra etake ekbar run korate chai tar jonno useEffect  diye ekbar run koraaichi.
            setUser(user)
        })
    }, [])
    return {
        user,
        signInWithGoogle,
        handleSignOut
    } //amra age array diye return kortam,kintu ekhon amra object diye return korbo.karon amader jodi onek kichu return kora lage tahole amra ta jodi array te return kori tahole setake index wise destructure koire nite hobe.tar position onujai porjonto destructure korte hobe.kintu object e same name dilei hoy tar position kothay ache seta matter kore na.tai object e retunr korte hobe.tahole amra ekta chailei destructure krote pari abar sobgualo korte parbo.

}
export default useFirebase;
