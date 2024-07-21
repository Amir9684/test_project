import { useState } from "react";
import { useDispatch } from "react-redux";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";

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

import { todoSchema as todoSchemaFn } from "@/schemas/schema";
import { addTodo } from "@/redux/todo";
import { useTranslation } from "react-i18next";

export const AddTodoForm = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const todoSchema = todoSchemaFn();

  const form = useForm<z.infer<typeof todoSchema>>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      describe: "",
    },
  });

  function onSubmit(values: z.infer<typeof todoSchema>) {
    setIsLoading(true);
    const newTodo = {
      id: "id" + new Date().getTime(),
      describe: values.describe,
    };

    setTimeout(() => {
      dispatch(addTodo(newTodo));
      setIsLoading(false);
      form.reset();
      toast.success(t("todoAddMessage"));
    }, 1000);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center justify-center gap-5"
      >
        <FormField
          control={form.control}
          name="describe"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="font-bold text-xl">{t("todoTitle")}</FormLabel>
              <FormControl>
                <Input disabled={isLoading} placeholder="Homework" {...field} />
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
          {t("todoButton")}
          {isLoading && <Loader2 className="animate-spin w-6 h-6 ml-2" />}
        </Button>
      </form>
    </Form>
  );
};
