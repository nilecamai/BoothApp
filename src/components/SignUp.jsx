import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../src/firebase-config';

export function register(email, password, firstname, lastname) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
        const user = userCredential.user;
        setDoc(doc(db, `users/${user.uid}`), {
            firstName: firstname,
            lastName: lastname,
            email: email,
            likes: [],
        });
        console.log("I can do something in life")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
  }


// TODO: deprecate: this is inlined in LogInView.jsx
export function signIn(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log('Sign in')
        })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Sign in failed')
  });
}

export function logOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('logout success')
    }).catch((error) => {
        // An error happened.
        console.log('logout failed')
    });
}