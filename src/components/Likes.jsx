import { db } from '../firebase-config';
import { doc, updateDoc, setDoc, getDoc } from "firebase/firestore"; 

export async function updateLikes(boothName, likeList) {
    await updateDoc(doc(db, `booths/${boothName}`) ,{
        likes: likeList,
    });
}

export async function getLikes(boothName) {

    const docRef = doc(db, `booths/${boothName}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
       console.log("Document data:", docSnap.data());
       return docSnap.data().likes
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
