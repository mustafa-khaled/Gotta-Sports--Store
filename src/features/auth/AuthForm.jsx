import Button from "../../ui/Button";
import Container from "../../ui/Container";

function AuthForm() {
  return (
    <Container>
      <form className="mx-auto flex flex-col items-start gap-[15px] rounded-lg bg-gray p-[20px] sm:w-[400px]">
        <div className="w-full">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            className="mt-[5px] w-full rounded-lg border border-gray p-[5px] outline-none focus:border-darkGray"
            id="email"
            placeholder="examle@mail.com"
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
          />
        </div>

        <Button>Login</Button>
      </form>
    </Container>
  );
}

export default AuthForm;
