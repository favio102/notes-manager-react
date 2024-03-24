import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { FirebaseApp } from "services/firebase";

export class AuthAPI {
  static async signin(email, password) {
    const response = await signInWithEmailAndPassword(
      FirebaseApp.auth,
      email,
      password
    );
    return response.user.toJSON;
  }

  static async singup(email, password) {
    const response = await createUserWithEmailAndPassword(
      FirebaseApp.auth,
      email,
      password
    );
    return response.user.toJSON;
  }

  static async singnout() {
    signOut(FirebaseApp.auth);
  }
}
