import * as firebase from "firebase";

import { FirebaseConfig } from "./keys.js";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const exerRef = databaseRef.child("users").child("user1").child("exercise1");
