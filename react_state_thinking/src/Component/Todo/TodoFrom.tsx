import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoFrom = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [task, setTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };
    dispatch({ type: "adTodo", payload: todo });
  };
  return (
    <div>
      <h1>Please Add Toodo List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todotask add "></label>
        <input
          type=" text"
          placeholder="todo title"
          name="todo"
          id="todo"
          onBlur={(e) => setTask(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default TodoFrom;
