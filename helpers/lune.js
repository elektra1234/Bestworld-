// Same Firebase setup as sol.js

const luneTask = doc(db, "helperTasks", "lune");

onSnapshot(luneTask, async (docSnap) => {
  const data = docSnap.data();
  if (data && data.task && !data.done) {
    const reply = `I'm on it, Izek. 💻 You said: "${data.task}" — let me get that done.`;
    await updateDoc(luneTask, {
      response: reply,
      done: true
    });
  }
});
