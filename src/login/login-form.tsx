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

import { formSchema } from "./schema";
import { useIsAuthenticated } from "@/lib/hooks/useIsAuthenticated";

export const LoginForm = () => {
  useIsAuthenticated();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    setTimeout(() => {
      dispatch(loginUser(values));
      setIsLoading(false);
      toast.success(`Welcome ${values.username}`);
      navigate("/user/dashboard");
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
              <FormLabel className="font-bold text-xl">Username</FormLabel>
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
              <FormLabel className="font-bold text-xl">Password</FormLabel>
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
          className="w-full max-w-[120px] text-lg"
          variant="primary"
          type="submit"
        >
          Login
          {isLoading && <Loader2 className="animate-spin w-6 h-6 ml-2" />}
        </Button>
      </form>
    </Form>
  );
};