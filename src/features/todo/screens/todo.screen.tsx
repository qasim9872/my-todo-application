import React from "react";

import tw from "../../../styles/tailwind";
import { PageTemplate } from "../../../components/templates/page.template";
import { useAppSelector } from "../../../redux/hooks";
import { selectTodoList } from "../todo.store";
import { TodoList } from "../components/todo-list.component";
import { TodoInput } from "../components/todo-input";

export const TodoScreen = () => {
  const todoList = useAppSelector(selectTodoList);

  console.log({ todoList });

  return (
    <PageTemplate style={tw`flex justify-center flex-1 mx-2`}>
      <TodoInput />
      <TodoList todoList={todoList} />
    </PageTemplate>
  );
};
