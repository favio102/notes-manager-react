import { firebaseConfig } from "config";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export class FirebaseApp {
  static firebaseApp = undefined;
  static auth = undefined;
  static db = undefined;
  static init() {
    this.firebaseApp = initializeApp(firebaseConfig);
    this.auth = getAuth();
    signInWithEmailAndPassword(this.auth, "test0@gmail.com", "test0test0");
    this.db = getFirestore(this.firebaseApp);
  }
}
