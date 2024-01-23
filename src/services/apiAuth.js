import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export async function registerUser({ email, password, confirmPassword }) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    return user;
  } catch (error) {
    throw new Error(`Registration failed: ${error.message}`);
  }
}

export async function loginUser({ email, password }) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw new Error(`Login failed: ${error.message}`);
  }
}
