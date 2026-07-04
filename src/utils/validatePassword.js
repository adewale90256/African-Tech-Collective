function validatePassword(password, confirmPassword) {
  const newErrors = {};

  //password requirement
  if (!password) {
    newErrors.password = "Please create your password";
  } else if (password.length < 8) {
    newErrors.password = "Password must be at least 8 characters";
  } else if (!/[A-Z]/.test(password)) {
    newErrors.password = "Password must contain an uppercase letter";
  } else if (!/[0-9]/.test(password)) {
    newErrors.password = "Password must contain a number";
  } else if (!/[a-z]/.test(password)) {
    newErrors.password = "Password must contain a lowercase letter";
  }

  // Confirm password
  if (!confirmPassword) {
    newErrors.confirmPassword = "Please confirm your password";
  } else if (password !== confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match";
  }

  return newErrors;
}

export default validatePassword;
