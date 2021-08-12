import React from "react";
import { TextInput } from "react-native-paper";
import { useAppDispatch } from "../../../redux/hooks";
import { add } from "../todo.store";
import tw from "../../../styles/tailwind";

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
      style={tw`my-4`}
      label="Add todo item"
      value={text}
      onChangeText={(text) => setText(text)}
      right={<TextInput.Icon name="check-outline" onPress={onTicked} />}
    />
  );
};
