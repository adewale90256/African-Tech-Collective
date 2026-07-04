function firebaseErrorHandler(error) {
  switch (error.code) {
    case "auth/email-already-in-use":
      alert("An account with this email already exists.");
      break;

    case "auth/invalid-email":
      alert("Please enter a valid email address.");
      break;

    case "auth/weak-password":
      alert("Password is too weak.");
      break;

    case "auth/invalid-credential":
      alert("Incorrect email or password.");
      break;

    case "auth/user-disabled":
      alert("This account has been disabled.");
      break;

    case "auth/network-request-failed":
      alert("Network error. Please check your internet connection.");
      break;

    case "auth/too-many-requests":
      alert("Too many attempts. Please try again later.");
      break;

    default:
      alert("Something went wrong. Please try again.");
  }
}

export default firebaseErrorHandler;
