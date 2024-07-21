import { useTranslation } from "react-i18next";
import { z } from "zod";

const loginSchema = () => {
  const { t } = useTranslation();

  return z.object({
    username: z
      .string()
      .min(2, {
        message: `${t("usernameMinError")}`,
      })
      .max(15, { message: t("usernameMaxError") }),
    password: z
      .string()
      .min(5, { message: t("passwordMinError") })
      .max(15, { message: t("passwordMaxError") }),
  });
};

const todoSchema = () => {
  const { t } = useTranslation();

  return z.object({
    describe: z
      .string()
      .min(2, {
        message: t("describeMinError"),
      })
      .max(15, { message: t("describeMaxError") }),
  });
};

const profileSchema = () => {
  const { t } = useTranslation();

  return z.object({
    username: z
      .string()
      .min(2, {
        message: `${t("usernameMinError")}`,
      })
      .max(15, { message: t("usernameMaxError") }),
    theme: z.string(),
    language: z.string(),
  });
};

export { loginSchema, todoSchema, profileSchema };
