import React from "react";
import { TodoItem as TodoItemType } from "../interfaces/todo-item.interface";
import { Text } from "react-native";
import tw from "../../../styles/tailwind";

export const TodoItem: React.FC<TodoItemType & { count: number }> = ({
  count,
  description,
  completed,
}) => {
  return (
    <Text
      style={tw.style("text-lg", completed ? "text-green-200" : "text-red-400")}
    >
      {count}. {description}
    </Text>
  );
};
