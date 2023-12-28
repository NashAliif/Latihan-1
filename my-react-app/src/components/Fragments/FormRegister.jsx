import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        type="text"
        name="fullname"
        htmlFor="fullname"
        placeholder="Insert your fullname"
      />
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
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        htmlFor="confirmPassword"
        placeholder="********"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
