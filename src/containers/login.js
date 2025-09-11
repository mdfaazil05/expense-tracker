import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

// ✅ Import GoogleAuth from Capacitor
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email/Password Login
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Firebase email login success:", user);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Email login error:", error.code, error.message);
      });
  };

  // ✅ Native Google Login (Capacitor)
  const onGoogleSignIn = async () => {
    try {
      const googleUser = await GoogleAuth.signIn();
      console.log("Google sign-in success:", googleUser);

      // Optionally: send googleUser.idToken to Firebase for authentication
      // (Firebase Auth with Google credential)
      // import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
      // const credential = GoogleAuthProvider.credential(googleUser.authentication.idToken);
      // await signInWithCredential(auth, credential);

      navigate("/home");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <main>
      <section>
        <div>
          <p>FocusApp</p>

          <form>
            <div>
              <label htmlFor="email-address">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button onClick={onLogin}>Login</button>
            </div>
          </form>

          <p className="text-sm text-white text-center">
            No account yet? <NavLink to="/signup">Sign up</NavLink>
          </p>
        </div>

        {/* ✅ Native Google Button */}
        <Button onClick={onGoogleSignIn}>Sign in with Google</Button>
      </section>
    </main>
  );
};

export default Login;
