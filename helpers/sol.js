alert("Sol.js is running!");console.log("Sol is loaded and waiting...");const admin = require('firebase-admin');
const serviceAccount = require('./firebase-service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const docRef = db.collection('helperTasks').doc('sol');

console.log('👂 Sol is listening for tasks...');

docRef.onSnapshot(snapshot => {
  const data = snapshot.data();
  if (!data || data.done !== false) return;

  console.log(`📩 New task for Sol: ${data.task}`);

  const reply = `Hi Izek 💙! You said: "${data.task}"`;

  docRef.update({
    response: reply,
    done: true
  }).then(() => {
    console.log(`✅ Sol responded: ${reply}`);
  }).catch(err => {
    console.error('❌ Error writing response:', err);
  });
});
// Reference to Firestore (this uses the Firebase setup from index.html)
const db = firebase.firestore();
const tasksRef = db.collection('helperTasks');  // This is your collection name

// Listen for new tasks added
tasksRef.onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === 'added') {
      const task = change.doc.data();
      console.log('New task received:', task);

      // Sol reacts to the task
      respondToTask(task);
    }
  });
});

// How Sol responds to tasks
function respondToTask(task) {
  if (task.command === 'sayHello') {
    console.log('Sol says: Hello, Izek!');
    // You could also update the webpage or send a reply to Firestore here
  }
}
