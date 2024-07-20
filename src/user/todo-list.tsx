import { Input } from "@/components/ui/input";
import { todoAdded } from "@/redux/todo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const TodoList = () => {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  console.log(todos);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    dispatch(todoAdded({ id: Math.random(), text: value }));
  };
  return (
    <div>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleSubmit}>sumbit</button>
    </div>
  );
};
