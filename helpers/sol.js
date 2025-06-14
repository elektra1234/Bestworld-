// Import Firebase functions from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Your Firebase config — double check this is your actual project config
const firebaseConfig = {
  apiKey: "AIzaSyAnoaqzl8OxmKsGk3Uj6rtxKJINVcZb8tM",
  authDomain: "bestworldhelper.firebaseapp.com",
  projectId: "bestworldhelper",
  storageBucket: "bestworldhelper.firebasestorage.app",
  messagingSenderId: "172061883318",
  appId: "1:172061883318:web:cfe12dffbf92f7ce4e9f17",
  measurementId: "G-TM2Z25G02V"
};

// Initialize Firebase app and Firestore database
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Reference to your helperTasks collection
const tasksCollection = collection(db, "helperTasks");

// Get output div to display data
const outputDiv = document.getElementById("output");

// Listen for realtime updates
onSnapshot(tasksCollection, (snapshot) => {
  console.log("Snapshot received");
  outputDiv.innerHTML = ""; // Clear previous

  snapshot.docChanges().forEach(change => {
    const docData = change.doc.data();
    console.log("Change type:", change.type, "Data:", docData);

    // Create a new paragraph for each changed doc
    const p = document.createElement("p");
    p.textContent = `${change.type.toUpperCase()}: ${JSON.stringify(docData)}`;
    outputDiv.appendChild(p);
  });

  if (snapshot.empty) {
    outputDiv.textContent = "No helper tasks found yet.";
  }
});
