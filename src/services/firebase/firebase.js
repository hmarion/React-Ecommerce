import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDWIXf7UlffKcyCXO_CPWtHToGNtGo1J04",
    authDomain: "coderhouse-ecommerce-c52b3.firebaseapp.com",
    projectId: "coderhouse-ecommerce-c52b3",
    storageBucket: "coderhouse-ecommerce-c52b3.appspot.com",
    messagingSenderId: "706960542530",
    appId: "1:706960542530:web:d8ef0a44da58be9483d6db"
  }
  
  const app = firebase.initializeApp(firebaseConfig)

  export const db = getFirestore(app)