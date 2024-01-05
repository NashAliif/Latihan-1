import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        name="email"
        htmlFor="email"
        placeholder="example@mail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        htmlFor="password"
        placeholder="********"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Log In
      </Button>
    </form>
  );
};

export default FormLogin;
