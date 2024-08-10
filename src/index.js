import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCWseTOQEdkllkeECl4aMotqAaWd_J1_ZQ",
  authDomain: "lingo-card-test.firebaseapp.com",
  projectId: "lingo-card-test",
  storageBucket: "lingo-card-test.appspot.com",
  messagingSenderId: "457980681561",
  appId: "1:457980681561:web:5ef9093ef160389db70048",
  measurementId: "G-5J7GXS00NN",
};

const app = initializeApp(firebaseConfig);
export const Context = createContext(null);
const auth = getAuth(app)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={{
    auth
}} >
    
  <App />
</Context.Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
