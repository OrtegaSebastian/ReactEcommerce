import { initializeApp } from "firebase/app";


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
