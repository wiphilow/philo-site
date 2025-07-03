import apiKey from './apikey.js';

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "website-like-counter.firebaseapp.com",
  databaseURL: "https://website-like-counter-default-rtdb.firebaseio.com/",
  projectId: "website-like-counter",
  storageBucket: "website-like-counter.appspot.com",
  messagingSenderId: "473900707674",
  appId: "1:473900707674:web:4fb8556ae689b8ec124d63"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const auth = firebase.auth();

// Anonymous sign-in
auth.signInAnonymously().catch(console.error);

// Only call loadLikeCounts once the user is signed in
auth.onAuthStateChanged(user => {
  if (user) {
    loadLikeCounts(); // ✅ SAFE to call here
  }
});