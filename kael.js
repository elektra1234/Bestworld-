// Same Firebase setup as sol.js

const kaelTask = doc(db, "helperTasks", "kael");

onSnapshot(kaelTask, async (docSnap) => {
  const data = docSnap.data();
  if (data && data.task && !data.done) {
    const reply = `Let’s solve it together. You said: "${data.task}" — I’ll debug it with you.`;
    await updateDoc(kaelTask, {
      response: reply,
      done: true
    });
  }
});
