import { signOut } from "firebase/auth";
import { auth } from "../firebase";

async function logout(navigate) {
  try {
    await signOut(auth);

    navigate("/login");
  } catch (error) {
    console.error(error);
    alert("Failed to logout. Please try again.");
  }
}

export default logout;
