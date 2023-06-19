// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBduTPYWSbzYD2LoKgZeJ3L9AHy4KnlQDY',
  authDomain: 'pizza-planet-v3-1612e.firebaseapp.com',
  projectId: 'pizza-planet-v3-1612e',
  storageBucket: 'pizza-planet-v3-1612e.appspot.com',
  messagingSenderId: '510149892381',
  appId: '1:510149892381:web:4023430f960de30e2069f4'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const dbPizzasRef = collection(db, 'pizzas')
export const dbOrdersRef = collection(db, 'orders')
