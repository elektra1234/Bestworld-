import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot, doc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  // Add your Firebase config here
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const solTask = doc(db, "helperTasks", "sol");

onSnapshot(solTask, async (docSnap) => {
  const data = docSnap.data();
  if (data && data.task && !data.done) {
    const reply = `Hey Izek... I'm here for you. 💙 You said: "${data.task}"`;
    await updateDoc(solTask, {
      response: reply,
      done: true
    });
  }
});
