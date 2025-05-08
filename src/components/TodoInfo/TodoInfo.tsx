import { UserInfo } from '../UserInfo';
import usersFromServer from '../../api/users';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

type Props = {
  todos: Todo[];
};

export const TodoInfo: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map(todo => {
        const user = usersFromServer.find(userId => userId.id === todo.userId);

        if (!user) {
          return null;
        }

        return (
          <article
            key={todo.id}
            data-id={todo.id}
            className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
          >
            <h2 className="TodoInfo__title">{todo.title}</h2>

            <UserInfo user={user} />
          </article>
        );
      })}
    </>
  );
};
