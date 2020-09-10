import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAnVPbThlPyehxwtQAkMq0byK8PZ_yPGJE",
  authDomain: "clone-7d06c.firebaseapp.com",
  databaseURL: "https://clone-7d06c.firebaseio.com",
  projectId: "clone-7d06c",
  storageBucket: "clone-7d06c.appspot.com",
  messagingSenderId: "51599041318",
  appId: "1:51599041318:web:ed52caa0305ae78a9f17e7",
  measurementId: "G-YQ918REJSD",
};
//We initialize the app with firebase config.
const firebaseApp = firebase.initializeApp(firebaseConfig);

//firestore is the real time database in firestore.
const db = firebaseApp.firestore();

//This gives us a variable that we can use for all the signing in.
const auth = firebase.auth();

//allows us to use it outside of the file.
export { db, auth };
