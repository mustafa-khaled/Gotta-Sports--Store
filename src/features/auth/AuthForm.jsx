import { useState } from "react";
import Button from "../../ui/Button";
import Container from "../../ui/Container";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Container>
      <h2 className="mb-[10px] text-center text-2xl sm:text-3xl">
        {isLogin ? "Login" : "Register"}
      </h2>
      <form className="mx-auto flex flex-col items-start gap-[15px] rounded-lg bg-gray p-[20px] sm:w-[400px]">
        <div className="w-full">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
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
