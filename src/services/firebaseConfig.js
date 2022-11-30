import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCtwYTGJ9wf6GoUSW_QY1_oMplQZEfuRmo',
  authDomain: 'chat-ba1d0.firebaseapp.com',
  projectId: 'chat-ba1d0',
  storageBucket: 'chat-ba1d0.appspot.com',
  messagingSenderId: '413160182613',
  appId: '1:413160182613:web:99742ba725ae7017f9d5dc',
  measurementId: 'G-4F25F3KZ7L',
}

export const app = initializeApp(firebaseConfig)
export const databaseApp = getFirestore(app)