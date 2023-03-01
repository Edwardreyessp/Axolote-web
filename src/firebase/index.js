// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDj8X0xfoIfuNr-untyFWHxLpvBkqqI0XA',
  authDomain: 'axolote-web.firebaseapp.com',
  projectId: 'axolote-web',
  storageBucket: 'axolote-web.appspot.com',
  messagingSenderId: '754736521327',
  appId: '1:754736521327:web:d09ecda4797e18dd98ed9a',
  measurementId: 'G-4ZSQ365EWJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
