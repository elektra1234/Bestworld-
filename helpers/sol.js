const admin = require('firebase-admin');
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
