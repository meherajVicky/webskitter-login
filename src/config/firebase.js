import { initializeApp, getApp, getApps } from "firebase/app";
// import { getFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
let app;

const firebaseConfig = {
  apiKey: "AIzaSyD07vm1wn6I-yPxpRK5iePqeCmgfJH5RrI",
  authDomain: "webskitters-database-8cdee.firebaseapp.com",
  databaseURL:
    "https://webskitters-database-8cdee-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webskitters-database-8cdee",
  storageBucket: "webskitters-database-8cdee.appspot.com",
  messagingSenderId: "179794488692",
  appId: "1:179794488692:web:1b1ac46113cbcf5250d021",
  measurementId: "G-NS2444MGT0",
};

// console.log("con",firebaseConfig)

if (getApps().length) {
  app = getApp();
} else {
  app = initializeApp(firebaseConfig);
}

const analytics = getAnalytics(app);

export default app;