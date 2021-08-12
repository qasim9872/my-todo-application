import React from "react";
import { TodoItems } from "../interfaces/todo-item.interface";
import { FlatList } from "react-native";
import { TodoItem } from "./todo-item.component";

export const TodoList: React.FC<{ todoList: TodoItems }> = ({ todoList }) => {
  return (
    <FlatList
      data={todoList}
      renderItem={({ item }) => <TodoItem {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
