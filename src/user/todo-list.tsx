import { AddTodoForm } from "./add-todo-form";
import { TodosItem } from "./todos-item";

export const TodoList = () => {
  return (
    <div className="w-full px-10 py-5">
      <AddTodoForm />
      <TodosItem />
    </div>
  );
};
