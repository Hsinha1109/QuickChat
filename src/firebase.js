import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDPfFru89Cxdj_piUL3JHqDKdNn2TJAY0E",
    authDomain: "unichat-7fdbb.firebaseapp.com",
    projectId: "unichat-7fdbb",
    storageBucket: "unichat-7fdbb.appspot.com",
    messagingSenderId: "970144245901",
    appId: "1:970144245901:web:7a1ba00cfeefe4904c5ac4"
  }).auth();