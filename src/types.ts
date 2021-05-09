export interface Todo {
  id: number;
  content: string;
  done: boolean;
}

export type Color = string;

export interface State {
  color: Color;
  setColor: React.Dispatch<React.SetStateAction<Color>>;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}