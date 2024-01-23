import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import toast from "react-hot-toast";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Loader from "../../ui/loader/Loader";
import { useNavigate } from "react-router-dom";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLading, setIsLading] = useState(false);

  const navigate = useNavigate();

  function registerUser() {
    if (password !== confirmPassword) {
      setError("Password do not match.");
      return;
    }

    setIsLading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // On Success
        const user = userCredential.user;
        setIsLading(false);
        toast.success("Account Created successfully.");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigate("/");
      })
      .catch((error) => {
        setIsLading(false);
        setError(error.message);
      });
  }

  function loginUser() {
    toast.success("You logged in successfully.");
    setEmail("");
    setPassword("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setError("Please Fill Out All Fields.");
      return;
    }

    if (isLogin) {
      loginUser();
    } else {
      registerUser();
    }
  }

  if (isLading) return <Loader />;
  return (
    <Container>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex flex-col items-start gap-[15px] rounded-lg bg-gray p-[20px] sm:w-[400px]"
      >
        <h2 className="mx-auto mb-[10px] text-2xl sm:text-3xl">
          {isLogin ? "Login" : "Register"}
        </h2>
        <div className="w-full">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            className="mt-[5px] w-full rounded-lg border border-gray p-[5px] outline-none focus:border-darkGray"
            id="email"
            placeholder="examle@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            className="mt-[5px] w-full rounded-lg border border-gray p-[5px] outline-none focus:border-darkGray"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {!isLogin && (
          <div className="w-full">
            <label htmlFor="confirm password">Confirm Password:</label>
            <input
              type="password"
              name="confirm password"
              className="mt-[5px] w-full rounded-lg border border-gray p-[5px] outline-none focus:border-darkGray"
              id="confirm password"
              placeholder="Write the password again"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}

        <Button>Login</Button>

        {error && (
          <p className="mx-auto rounded-xl bg-red-300 px-[5px] text-red-500">
            {error}
          </p>
        )}

        <p
          className="mx-auto cursor-pointer text-darkGray underline"
          onClick={() => setIsLogin((prev) => !prev)}
        >
          {isLogin ? "Create Account?" : "Already have an account?"}
        </p>
      </form>
    </Container>
  );
}

export default AuthForm;
