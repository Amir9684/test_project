import { LoginForm } from "./login-form";

export const Login = () => {
  return (
    <div className="p-5 lg:p-32 w-full min-h-full flex items-center justify-center">
      <div className="space-y-20 w-full max-w-2xl">
        <h1 className="font-bold text-4xl text-center">Login Form</h1>
        <LoginForm />
      </div>
    </div>
  );
};
