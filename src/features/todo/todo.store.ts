import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";

interface TodoItem {
  id: string;
  description: string;
  completed: boolean;
}

interface TodoState {
  items: TodoItem[];
}

const INITIAL_STATE: TodoState = {
  items: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: INITIAL_STATE,
  reducers: {
    add: (state, action: PayloadAction<TodoItem>) => {
      state.items.push(action.payload);
    },
    update: (state, action: PayloadAction<TodoItem>) => {
      const id = action.payload.id;
      const index = state.items.findIndex((item) => item.id === id);
      state.items.splice(index, 1, action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items.splice(index, 1);
    },
  },
});

export const { add, update, remove } = todoSlice.actions;

// selectors
export const selectTodoList = (state: RootState) => state.todo.items;

export default todoSlice.reducer;