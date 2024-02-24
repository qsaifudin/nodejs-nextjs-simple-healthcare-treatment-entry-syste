// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrdRGNX1npHOGVtCnLztV7h2MVyx-j6bQ",
  authDomain: "healthcare-treatment-entry-sys.firebaseapp.com",
  projectId: "healthcare-treatment-entry-sys",
  storageBucket: "healthcare-treatment-entry-sys.appspot.com",
  messagingSenderId: "863935331192",
  appId: "1:863935331192:web:db197c131222b60b63268d",
  measurementId: "G-SJTN1RX9MQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2024, 3, 25);
    }
  }
}

rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}