// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjTp5UqgX3gHPgLqIyUlzEi0RvsF6HhkQ",
  authDomain: "webbounty-7d7b8.firebaseapp.com",
  projectId: "webbounty-7d7b8",
  storageBucket: "webbounty-7d7b8.appspot.com",
  messagingSenderId: "902758614859",
  appId: "1:902758614859:web:63b93748442fb2fdf9cace"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
