import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: '<replace this>',
  authDomain: '<replace this>',
  databaseURL: '<replace this>',
  projectId: '<replace this>',
  storageBucket: '<replace this>',
  messagingSenderId: '<replace this>',
  appId: '<replace this>'
}
const apps = getApps()
let firebaseApp;
if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig)
} else {
  firebaseApp = apps[0]
}
const db = getFirestore(firebaseApp, {})
export { db }
