import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

import { setLanguage, setTheme, updateUser } from "@/redux/user";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { profileSchema as profileSchemaFn } from "@/schemas/schema";
import { languages as languagesFn, themes as themesFn } from "@/constants";
import { SelectOpt, SelectOptTheme } from "@/types";
import { useLanguage } from "@/components/providers/language-provider";

export const ProfileForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { setLanguage: languageSetter } = useLanguage();
  const user = useSelector((state: any) => state.user);
  const profileSchema = profileSchemaFn();
  const themes = themesFn();
  const languages = languagesFn();

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: user.username,
      theme: user.theme,
      language: user.language,
    },
  });

  function onSubmit(values: z.infer<typeof profileSchema>) {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(updateUser(values.username));
      dispatch(setTheme(values.theme));
      if (user.language !== values.language) {
        dispatch(setLanguage(values.language));
        languageSetter(values.language);
      }
      setIsLoading(false);
      toast.success("Changes made!");
    }, 1000);
  }
  const isDisabled =
    user.username === form.getValues("username") &&
    user.theme === form.getValues("theme") &&
    user.language === form.getValues("language");

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
          name="theme"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-xl">{t("theme")}</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    {themes.map((theme: SelectOptTheme) => (
                      <SelectItem key={theme.value} value={theme.value}>
                        <div className="flex items-center justify-center gap-5">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: theme.color }}
                          />
                          <p>{theme.label}</p>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-xl">
                {t("language")}
              </FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((language: SelectOpt) => (
                      <SelectItem key={language.value} value={language.value}>
                        {language.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isDisabled || isLoading}
          className="w-full max-w-fit text-lg"
          variant="primary"
          type="submit"
        >
          {t("profileSubmit")}
          {isLoading && <Loader2 className="animate-spin w-6 h-6 ml-2" />}
        </Button>
      </form>
    </Form>
  );
};
