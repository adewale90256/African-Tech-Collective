import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { auth, db } from "../../firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import firebaseErrorHandler from "../../utils/firebaseErrorHandler";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const clearForm = () => {
    setFormData({
      email: "",
      password: "",
    });

    setErrors({});
    setShowPassword(false);
    setRememberMe(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    // Firebase Authentication will go here
    try {
      await setPersistence(
        auth,
        rememberMe ? browserLocalPersistence : browserSessionPersistence,
      );
      //Login with firebase authentication
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );

      const user = userCredential.user;

      //Get user's profile from firestore
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        alert("User profile is not found.");
        return;
      }

      const userData = docSnap.data();

      //Check if approved
      if (!userData.approved) {
        await signOut(auth);

        clearForm();

        alert("Your appllication is still under review.");
        return;
      }

      //redirect based on role
      if (userData.role === "founder") {
        navigate("/founder/dashboard");
      } else if (userData.role === "investor") {
        navigate("/investor/dashboard");
      }
    } catch (error) {
      firebaseErrorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 flex justify-center w-full items-center bg-[#112653]">
      <section className="w-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-[#032774] w-full max-w-2xl space-y-6 p-8 rounded-xl text-[#98abd1] border-t-3 border-amber-300"
        >
          <h1
            className="text-2xl lg:text-3xl text-white font-serif font-bold scale-y-120 mb-5 mt-15 text-center
          "
          >
            Welcome Back
          </h1>

          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="input"
              disabled={loading}
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="************"
                autoComplete="current-password"
                className="input pr-12 w-full"
                disabled={loading}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#98abd1]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-400 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-amber-400"
                disabled={loading}
              />
              Remember me
            </label>

            <Link to="/forgetpassword" className="text-sm hover:text-white">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-[#041B4A] hover:bg-amber-300 text-center"
          >
            Sign In
          </button>
          <p className="text-center">Don't have an Account?</p>
          <Link
            to="/apply"
            className="rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-[#041B4A] hover:bg-amber-300 text-center"
          >
            Apply Now
          </Link>
        </form>
      </section>
    </div>
  );
}
