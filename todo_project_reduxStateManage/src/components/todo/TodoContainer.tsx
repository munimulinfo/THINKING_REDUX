import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between my-5 mx-2">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient h-full w-full rounded-lg p-1">
        <div className="h-full w-full bg-white rounded-lg p-6 space-y-4">
          {todos.length > 0 ? (
            todos.map((singleTodo) => (
              <TodoCard key={singleTodo.id} {...singleTodo} />
            ))
          ) : (
            <div className="border h-full w-full p-5 flex justify-center items-center bg-white rounded-lg">
              <p className="font-bold text-2xl font-sans text-gray-400 uppercase">
                There are no pending tasks at this time
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
