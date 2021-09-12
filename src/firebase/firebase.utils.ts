// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    UserCredential,
    signOut,
} from 'firebase/auth';
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth();

export const createUser = (
    email: string,
    password: string,
    handleResponse: (userCredential: UserCredential) => void,
    handleError: (error: any) => void
) => {
    createUserWithEmailAndPassword(auth, email, password).then(handleResponse).catch(handleError);
};

export const login = (
    email: string,
    password: string,
    handleResponse: (userCredential: UserCredential) => void,
    handleError: (error: any) => void
) => {
    signInWithEmailAndPassword(auth, email, password).then(handleResponse).catch(handleError);
};

export const logout = (handleResponse: () => void, handleError: (error: any) => void) => {
    signOut(auth).then(handleResponse).catch(handleError);
};
