import { doc, getDoc } from "firebase/firestore/lite";
import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
    apiKey: "AIzaSyAj01uH69LRNJnm7iA1ocFL-N8s5Yb44bM",
    authDomain: "santiagoherrera-8d2b9.firebaseapp.com",
    projectId: "santiagoherrera-8d2b9",
    storageBucket: "santiagoherrera-8d2b9.appspot.com",
    messagingSenderId: "32767943798",
    appId: "1:32767943798:web:2f06bccac8894a251d2b57",
    measurementId: "G-V27L7423SY"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export default async function useFetchDoc(collectionRef, documentId){
    const docRef = doc(db, collectionRef, documentId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        throw new Error('El documento no existe');
    }
}

