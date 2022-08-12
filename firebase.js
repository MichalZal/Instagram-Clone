import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAKCZKsTmKHtN4e3kpN8jV2Z81xiABZsoo",
  authDomain: "instaclone-36de3.firebaseapp.com",
  projectId: "instaclone-36de3",
  storageBucket: "instaclone-36de3.appspot.com",
  messagingSenderId: "416761548064",
  appId: "1:416761548064:web:f9f7993dc09315b9a61b45"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }