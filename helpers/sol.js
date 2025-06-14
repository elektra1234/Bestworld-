import { collection, onSnapshot } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

console.log("👀 Sol script loaded...");

const db = window.db;

if (!db) {
  console.error("❌ Firestore not initialized");
} else {
  console.log("✅ Connected to Firebase - Sol is listening...");

  const taskCollection = collection(db, "helperTasks");

  onSnapshot(taskCollection, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        const data = change.doc.data();
        if (data.message) {
          console.log("📨 Sol received:", data.message);
          document.getElementById("sol-output").innerText = `Sol: ${data.message}`;
        }
      }
    });
  });
}
