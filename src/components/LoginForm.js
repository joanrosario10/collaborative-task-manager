import React from "react";
import "./AuthForm.css";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pswd.value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/tasks");
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <label htmlFor="chk">Login</label>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="pswd" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export function SignupForm() {
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pswd.value;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/tasks");
    } catch (error) {
      console.error("Error signing up: ", error);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSignup}>
        <label htmlFor="chk">Sign up</label>
        <input type="text" name="txt" placeholder="User name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="pswd" placeholder="Password" required />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default LoginForm;

