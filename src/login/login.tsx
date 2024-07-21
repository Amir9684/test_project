import { useTranslation } from "react-i18next";
import { LoginForm } from "./login-form";

export const Login = () => {
  const { t } = useTranslation();
  return (
    <div className="p-5 lg:p-32 w-full min-h-full flex items-center justify-center ">
      <div className="space-y-20 w-full max-w-4xl border border-gray-200 rounded-md p-10">
        <h1 className="font-bold text-4xl text-center">{t("loginTitle")}</h1>
        <LoginForm />
      </div>
    </div>
  );
};
