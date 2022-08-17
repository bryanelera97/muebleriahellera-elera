
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'




const firebaseConfig = {
    apiKey: "AIzaSyBLnLHkvhmY-S1CZSdyPbi10a_kIxfTGjs",
    authDomain: "mueblescoderhouse.firebaseapp.com",
    projectId: "mueblescoderhouse",
    storageBucket: "mueblescoderhouse.appspot.com",
    messagingSenderId: "1063121859176",
    appId: "1:1063121859176:web:33c21ee3cd4b13ddea81dd"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)