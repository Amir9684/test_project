import { getItem, setItem } from "@/lib/utils";
import { Todo } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { todos: Todo[] } = {
  todos: getItem("todos") || [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      const newTodo = {
        id: payload.id as string,
        describe: payload.describe as string,
        isCompleted: false,
      };
      const todos = getItem("todos") || [];
      setItem("todos", [...todos, newTodo]);

      state.todos.push(newTodo);
    },
    updateTodo(state, { payload }) {
      const newTodo = state.todos.map((todo: Todo) =>
        todo.id === payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
      setItem("todos", newTodo);

      state.todos = newTodo;
    },
    deleteTodo(state, { payload }) {
      const newTodos = state.todos.filter(
        (todo: Todo) => todo.id !== payload.id
      );

      setItem("todos", newTodos);
      state.todos = newTodos;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
