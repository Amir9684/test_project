export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
    todoAdded(state, { payload }) {
      const { id, text } = payload;

      console.log(id, text);
      // "Mutating" update syntax thanks to Immer, and no `return` needed
      state.push({
        id,
        text,
        completed: false,
      });
    },
    todoToggled(state, { payload }) {
      // Look for the specific nested object to update.
      // In this case, `action.payload` is the default field in the action,
      // and can hold the `id` value - no need for `action.id` separately
      const matchingTodo = state.find((todo: any) => todo.id === payload);

      if (matchingTodo) {
        // Can directly "mutate" the nested object
        matchingTodo.completed = !matchingTodo.completed;
      }
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { todoAdded, todoToggled } = todosSlice.actions;

// Export the slice reducer as the default export
export default todosSlice.reducer;
