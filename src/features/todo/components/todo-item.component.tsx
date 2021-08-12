import React from "react";
import { TodoItem as TodoItemType } from "../interfaces/todo-item.interface";
import tw from "../../../styles/tailwind";
import { Button, Card } from "react-native-paper";
import { useAppDispatch } from "../../../redux/hooks";
import { remove, toggleCompleted } from "../todo.store";

export const TodoItem: React.FC<TodoItemType> = ({
  id,
  description,
  completed,
}) => {
  const dispatch = useAppDispatch();

  return (
    <Card
      mode="outlined"
      style={tw.style("my-2", completed ? "bg-green-200" : "bg-red-200")}
    >
      <Card.Title title={description} />
      <Card.Actions>
        <Button
          style={tw`mx-2 bg-red-400`}
          onPress={() => dispatch(remove(id))}
        >
          Delete
        </Button>
        <Button
          onPress={() => dispatch(toggleCompleted(id))}
          style={tw.style("mx-2", completed ? "bg-gray-400" : "bg-green-400")}
        >
          {completed ? "Reset" : "Completed"}
        </Button>
      </Card.Actions>
    </Card>
  );
};
