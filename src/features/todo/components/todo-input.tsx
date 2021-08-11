import React from "react";
import { TextInput } from "react-native-paper";
import { useAppDispatch } from "../../../redux/hooks";
import { add } from "../todo.store";

export const TodoInput = () => {
  const [text, setText] = React.useState("");
  const dispatch = useAppDispatch();

  const onTicked = () => {
    dispatch(
      add({
        id: "_" + Math.random().toString(36).substr(2, 9),
        description: text,
        completed: false,
      })
    );

    setText("");
  };

  return (
    <TextInput
      label="Todo item"
      value={text}
      onChangeText={(text) => setText(text)}
      right={<TextInput.Icon name="check-outline" onPress={onTicked} />}
    />
  );
};
