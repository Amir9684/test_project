import { useState } from "react";
import { useDispatch } from "react-redux";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "@/redux/user";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { loginSchema as loginSchemaFN } from "../schemas/schema";
import { useIsAuthenticated } from "@/lib/hooks/useIsAuthenticated";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/components/providers/language-provider";

export const LoginForm = () => {
  useIsAuthenticated();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { lang } = useLanguage();

  const loginSchema = loginSchemaFN();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true);

    setTimeout(() => {
      dispatch(loginUser(values));
      setIsLoading(false);
      toast.success(`Welcome ${values.username}`);
      navigate(`/user/dashboard/?lng=${lang}`);
    }, 1000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-xl">
                {t("username")}
              </FormLabel>
              <FormControl>
                <Input disabled={isLoading} placeholder="JonDoe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-xl">
                {t("password")}
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  disabled={isLoading}
                  placeholder="*****"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isLoading}
          className="w-full max-w-fit text-lg"
          variant="primary"
          type="submit"
        >
          {t("loginButton")}
          {isLoading && <Loader2 className="animate-spin w-6 h-6 ml-2" />}
        </Button>
      </form>
    </Form>
  );
};
