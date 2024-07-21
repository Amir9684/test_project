import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { deleteTodo, updateTodo } from "@/redux/todo";
import { Todo } from "@/types";
import { Cross } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

export const TodosItem = () => {
  const { t } = useTranslation();
  const { todos } = useSelector((state: any) => state.todo);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = (todo: Todo) => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(updateTodo(todo));
      setIsLoading(false);
      toast.success(t("todoUpdateMessage"));
    }, 1000);
  };

  const handleDelete = (todo: Todo) => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(deleteTodo(todo));
      setIsLoading(false);
      toast.success(t("todoDeleteMessage"));
    }, 1000);
  };

  return (
    <div className="space-y-5">
      {todos.map((todo: Todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-evenly border-b relative px-5"
        >
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 opacity-65 transition-all animate-pulse w-full rounded-lg cursor-not-allowed z-10"></div>
          )}

          <Input
            type="checkbox"
            defaultChecked={todo.isCompleted}
            onChange={() => handleUpdate(todo)}
            className="accent-blue-500 w-6 h-6"
            disabled={isLoading}
          />
          <p className="text-xl font-semibold w-full text-center">
            {todo.describe}
          </p>
          <Button
            variant="ghost"
            onClick={() => handleDelete(todo)}
            className="mr-auto"
            disabled={isLoading}
          >
            <Cross className="text-rose-500 fill-rose-500 rotate-45 w-6 h-6" />
          </Button>
        </div>
      ))}
    </div>
  );
};
