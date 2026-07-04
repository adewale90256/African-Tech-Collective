import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

async function signupService(email, password, userData) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  const user = userCredential.user;

  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    ...userData,
  });

  return user;
}

export default signupService;
