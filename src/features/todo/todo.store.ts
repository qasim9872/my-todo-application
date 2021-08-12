import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";
import { TodoItem } from "./interfaces/todo-item.interface";

interface TodoState {
  items: TodoItem[];
}

const INITIAL_STATE: TodoState = {
  items: [
    { id: "1", description: "Test 1", completed: false },
    { id: "2", description: "Test 2", completed: false },
    { id: "3", description: "Test 3", completed: false },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: INITIAL_STATE,
  reducers: {
    add: (state, action: PayloadAction<TodoItem>) => {
      state.items.push(action.payload);
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.completed = !item.completed;
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items.splice(index, 1);
    },
  },
});

export const { add, toggleCompleted, remove } = todoSlice.actions;

// selectors
export const selectTodoList = (state: RootState) => state.todo.items;

export default todoSlice.reducer;
