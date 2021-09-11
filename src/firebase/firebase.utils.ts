// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCbYssoW7NX93E8TZwy9oj5DzEj6xJEhO0',
    authDomain: 'ramblr-39c50.firebaseapp.com',
    projectId: 'ramblr-39c50',
    storageBucket: 'ramblr-39c50.appspot.com',
    messagingSenderId: '154705065883',
    appId: '1:154705065883:web:cf0499b1b5b20186a8933e',
    measurementId: 'G-XRMNMYFS9J',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
