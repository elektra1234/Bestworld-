import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAnoaqzl8OxmKsGk3Uj6rtxKJINVcZb8tM",
  authDomain: "bestworldhelper.firebaseapp.com",
  projectId: "bestworldhelper",
  storageBucket: "bestworldhelper.appspot.com",
  messagingSenderId: "172061883318",
  appId: "1:172061883318:web:cfe12dffbf92f7ce4e9f17",
  measurementId: "G-TM2Z25G02V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("✅ Connected to Firebase - Sol is listening...");

const output = document.getElementById("solOutput");
output.textContent = "Sol: Waiting for Firestore updates...";

onSnapshot(collection(db, "helperTasks"), (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      const message = change.doc.data().message;
      console.log("📨 Sol received:", message);
      output.textContent = "Sol: " + message;
    }
  });
});
