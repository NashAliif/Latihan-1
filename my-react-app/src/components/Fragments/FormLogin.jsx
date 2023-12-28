import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";

const FormLogin = () => {
  return (
    <form action="">
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
      <Button classname="bg-blue-600 w-full">Log In</Button>
    </form>
  );
};

export default FormLogin;
