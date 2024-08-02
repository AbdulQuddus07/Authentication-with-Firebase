import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNXIdGU4-ywJ-9T8vuLRNAd8G5F-moRaU",
  authDomain: "wma-11-project.firebaseapp.com",
  projectId: "wma-11-project",
  storageBucket: "wma-11-project.appspot.com",
  messagingSenderId: "417433878984",
  appId: "1:417433878984:web:8445d98e71efc8069f80fd",
  measurementId: "G-YF9N95Z5S3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const signupEmail = document.getElementById("signup_email");
const signupPassword = document.getElementById("signup_password");
const signupBtn = document.getElementById("signup_btn");
const signinEmail = document.getElementById("signin_email");
const signinPassword = document.getElementById("signin_password");
const signinBtn = document.getElementById("signin_btn");


const authContainer = document.getElementById("auth_container");
const userContainer = document.getElementById("user_container");


const user_Email = document.getElementById("user_email");
const logoutBtn = document.getElementById("logout_btn");



signupBtn.addEventListener("click" , createUserAccount);
signinBtn.addEventListener("click" , signinUserAccount)
logoutBtn.addEventListener("click" , logOut)



//  console.log(app);

const auth = getAuth(app);
//  console.log(auth);
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is logged in");
    const uid = user.uid;
    authContainer.style.display = "none";
    userContainer.style.display = "block";
    user_Email.innerText = user.email;
    // ...
  } else {
    console.log("user is not logged in");
    authContainer.style.display = "block";
    userContainer.style.display = "none";
  }
});

function createUserAccount() {
  // console.log(signupEmail.value,signupPassword.value);
  createUserWithEmailAndPassword(auth, signupEmail.value,signupPassword.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("User");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
}




function signinUserAccount() {
//    console.log(signinEmail.value,signinPassword.value);
  signInWithEmailAndPassword(auth, signinEmail.value, signinPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert(errorMessage)
  });
}
function logOut() {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}