import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Replace this with your Firebase project's config
const firebaseConfig = {
    apiKey: "AIzaSyBG9Hp7oNzpw2_5Aj1aZP7F82atPL37PdU",
    authDomain: "blog-site-57ff5.firebaseapp.com",
    projectId: "blog-site-57ff5",
    storageBucket: "blog-site-57ff5.firebasestorage.app",
    messagingSenderId: "498669033135",
    appId: "1:498669033135:web:b8ac3f1f5d457e2112665a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
