import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBuUyvu4hFn9lVHrS7zuzfAHb3iJ8vSoG0",
    authDomain: "auth-3c84d.firebaseapp.com",
    projectId: "auth-3c84d",
    storageBucket: "auth-3c84d.appspot.com",
    messagingSenderId: "771181806731",
    appId: "1:771181806731:web:ce938d3e03c08d1688008e",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);