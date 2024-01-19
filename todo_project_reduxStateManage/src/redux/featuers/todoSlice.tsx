import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit/react";

interface TTodo {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
}

type Tinitialstate = {
  todos: TTodo[];
};

const initialState: Tinitialstate = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleComplet: (state, action: PayloadAction<string>) => {
      // const completTask = state.todos.map((item) =>
      //   item.id === action.payload
      //     ? { ...item, isCompleted: !item.isCompleted }
      //     : item
      // );
      // state.todos = completTask;
      const taskIndex = state.todos.findIndex(
        (item) => item.id === action.payload
      );

      if (taskIndex !== -1) {
        // Remove the task from its current position
        const removedTask = state.todos.splice(taskIndex, 1)[0];

        // Update the isCompleted property
        const updatedTask = {
          ...removedTask,
          isCompleted: !removedTask.isCompleted,
        };

        // Add the task to the end of the array
        state.todos.push(updatedTask);
      }
    },
  },
});
export const { addTodo, removeTodo, toggleComplet } = todoSlice.actions;
export default todoSlice.reducer;
