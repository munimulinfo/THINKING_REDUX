import { TodoContext } from "../../context/TodoProvider";
import { useContext } from "react";
type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};
const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div>
      {state.map((item: TTodo) => (
        <p
          style={{ color: item.isCompleted ? "red" : "green" }}
          onClick={() => dispatch({ type: "completTask", payload: item.id })}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default TodoList;
