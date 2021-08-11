export interface TodoItem {
  id: string;
  description: string;
  completed: boolean;
}

export type TodoItems = TodoItem[];
