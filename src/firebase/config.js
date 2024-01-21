import { initializeApp } from "firebase/app";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD21K1DQEiwLAwhBJx-QGEqv4InOuwTXd4",
  authDomain: "dr-lima.firebaseapp.com",
  databaseURL: "https://dr-lima-default-rtdb.firebaseio.com",
  projectId: "dr-lima",
  storageBucket: "dr-lima.appspot.com",
  messagingSenderId: "198707512379",
  appId: "1:198707512379:web:5b51d6a4abeac79726481e"
};
export const app = initializeApp(firebaseConfig);
