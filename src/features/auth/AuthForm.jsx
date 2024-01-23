import { useState } from "react";
import { useRegister } from "./registerUser";
import { useLoginUser } from "./useLoginUser";

import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Loader from "../../ui/loader/Loader";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    isLoading: isRegistering,
    error: registerError,
  } = useRegister();

  const { login, isLoading: isLogging, error: loginError } = useLoginUser();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    if (isLogin) {
      login({ email, password });
    } else {
      register({ email, password });
    }
  }

  if (isRegistering || isLogging) return <Loader />;

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

        <Button disabled={isRegistering}>Login</Button>

        {registerError ||
          (loginError && (
            <p className="mx-auto rounded-lg bg-red-300 px-[5px] text-red-500">
              {registerError?.message || "An error occurred."}
              {loginError?.message || "An error occurred."}
            </p>
          ))}

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
