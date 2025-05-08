import { TodoInfo } from '../TodoInfo';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

type NewTodoProps = {
  todos: Todo[];
};

export const TodoList: React.FC<NewTodoProps> = ({ todos }) => {
  return (
    <section className="TodoList">
      <TodoInfo todos={todos} />
    </section>
  );
};
