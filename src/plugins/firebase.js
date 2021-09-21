// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDhr1HHsWpWWPiFy8aPEjJ0OgsqHfvIYbU',
  authDomain: 'monea-8247b.firebaseapp.com',
  projectId: 'monea-8247b',
  storageBucket: 'monea-8247b.appspot.com',
  messagingSenderId: '334720942370',
  appId: '1:334720942370:web:00cb962bc1af6ca6c3657b',
  measurementId: 'G-F8VWWK5X61',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
