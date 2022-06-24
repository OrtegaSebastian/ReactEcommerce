// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPXvzKRfyB634gAYkJj5hY6hGeddplHgw",
  authDomain: "ecommercereact-b5923.firebaseapp.com",
  projectId: "ecommercereact-b5923",
  storageBucket: "ecommercereact-b5923.appspot.com",
  messagingSenderId: "444082845296",
  appId: "1:444082845296:web:a2375ca79392cef3f4e6b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const getFirestoreApp = ()=>{
  return app;
}
