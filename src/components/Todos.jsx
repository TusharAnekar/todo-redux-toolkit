import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map(({ id, text }) => (
          <li key={id}>
            {text} <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Todos };
