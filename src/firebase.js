import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDCvvwpLsE7dr3lU4Ehxb6un1h-LNbw_fI",
    authDomain: "task-manager-8e28f.firebaseapp.com",
    databaseURL: "https://task-manager-8e28f.firebaseio.com",
    projectId: "task-manager-8e28f",
    storageBucket: "task-manager-8e28f.appspot.com",
    messagingSenderId: "80493297086",
    appId: "1:80493297086:web:46b2e630260afcab9acdef"
};

firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore();
