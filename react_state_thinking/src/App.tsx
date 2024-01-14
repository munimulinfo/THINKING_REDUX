import TodoFrom from "./Component/Todo/TodoFrom";
import TodoList from "./Component/Todo/TodoList";
import TodoProvider from "./context/TodoProvider";

const App = () => {
  return (
    <TodoProvider>
      <div>
        <TodoFrom></TodoFrom>
        <TodoList></TodoList>
      </div>
    </TodoProvider>
  );
};

export default App;
