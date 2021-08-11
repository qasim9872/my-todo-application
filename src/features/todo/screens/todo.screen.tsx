import React from "react";
import { Text } from "react-native";

import tw from "../../../styles/tailwind";
import { PageTemplate } from "../../../components/templates/page.template";
import { useAppSelector } from "../../../redux/hooks";
import { selectTodoList } from "../todo.store";

export const TodoScreen = () => {
  const todoList = useAppSelector(selectTodoList);

  console.log({ todoList });

  return (
    <PageTemplate style={tw`items-center justify-center`}>
      <Text style={tw`text-black`}>
        Open up App.tsx to start working on your app!
      </Text>
    </PageTemplate>
  );
};
