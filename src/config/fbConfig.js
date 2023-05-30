import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

var serviceAccount = "./unreveald.json";

// var config = {
//   apiKey: "80cac59cac94ec2ad7f0a3abd874420a7d256860",
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId

// apiKey: "AIzaSyBWmReytgNCmwgI4vHv1-VITavQOBTebJw",
// authDomain: "list123-f215a.firebaseapp.com",
// projectId: "list123-f215a",
// storageBucket: "list123-f215a.appspot.com",
// messagingSenderId: "276954332539",
// appId: "1:276954332539:web:bafa0b3e73d203279791de",
// measurementId: "G-62Y4NS1J9R",
// };

firebase.initializeApp({
  credential: serviceAccount,

  // apiKey: "AIzaSyBWmReytgNCmwgI4vHv1-VITavQOBTebJw",
  // authDomain: "list123-f215a.firebaseapp.com",
  // projectId: "list123-f215a",
  // storageBucket: "list123-f215a.appspot.com",
  // messagingSenderId: "276954332539",
  // appId: "1:276954332539:web:bafa0b3e73d203279791de",
  measurementId: process.env.REACT_APP_measurementId,
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: "flyoveregion.appspot.com",
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
});
firebase.firestore().settings({ timestampsInSnapshots: true });
const storage = firebase.storage();
export { storage, firebase as default };
