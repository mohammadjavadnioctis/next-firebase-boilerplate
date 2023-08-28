// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
import { getDatabase } from "firebase/database";
import { Analytics, getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MUEASUREMENT_ID
};

// Initialize Firebase
// let app: firebase.FirebaseApp | null = null;
// let auth: Auth;
// let db: Firestore;
// if (typeof window !== "undefined" && !getApps().length) {
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)
const RTdatabase = getDatabase(app);
const provider = new GoogleAuthProvider();
setPersistence(auth, browserLocalPersistence);
let analytics : Analytics;
// if(typeof window !== 'undefined') {
  // analytics = getAnalytics(app);
// }
app.name && typeof window !== 'undefined' ? getAnalytics(app) : null;

// }
//   .then(() => {
//     // Existing and future Auth states are now persisted in the current
//     // session only. Closing the window would clear any existing state even
//     // if a user forgets to sign out.
//     // ...
//     // New sign-in will be persisted with session persistence.

//     return signInWithEmailAndPassword(auth, email = '', password= '');
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// firebase.initializeApp(firebaseConfig);
export { db, auth, storage,  RTdatabase, provider};
export default app;
