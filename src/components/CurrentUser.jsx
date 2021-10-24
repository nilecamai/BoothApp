import { db } from '../firebase-config';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; 

export function getUserEmail()  {
    const auth = getAuth();
    let uid = -1;
     onAuthStateChanged( auth, (user)  =>  {
    if (user) {
        return email(user.uid)
      } else {
        // User is signed out
        // ...
      }
    });
    console.log(`AFTER: ${uid}`);
    
    
}

async function email(uid){
    console.log(uid);
    if(uid !== -1) {
        const docRef = doc(db, `users/${uid}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data().email
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
}


export function isSignedIn() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        return true;
      } else {
        return false;
      }
    });    
}


