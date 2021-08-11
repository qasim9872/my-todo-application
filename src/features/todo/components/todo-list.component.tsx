import React from "react";
import { TodoItems } from "../interfaces/todo-item.interface";
import { Text, View } from "react-native";
import { TodoItem } from "./todo-item.component";

export const TodoList: React.FC<{ todoList: TodoItems }> = ({ todoList }) => {
  return (
    <View>
      {todoList.length ? (
        todoList.map((item, index) => (
          <TodoItem count={index + 1} key={item.id} {...item} />
        ))
      ) : (
        <Text>No Items To Display</Text>
      )}
    </View>
  );
};
