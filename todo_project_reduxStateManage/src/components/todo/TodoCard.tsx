// import { useAppDispatch } from "@/redux/hook";
import { useDeletTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";
import { Button } from "../ui/button";
import UpdateTodo from "./updateTodo";
// import { removeTodo, toggleComplet } from "@/redux/featuers/todoSlice";
type TTodoCardProps = {
  _id: string;
  title: string;
  description: string;
  id: string;
  isCompleted?: boolean;
  priority: string;
};
const TodoCard = ({
  title,
  description,
  isCompleted,
  priority,
  _id,
}: TTodoCardProps) => {
  //local Satete manage redux
  // const dispatch = useAppDispatch();
  const [updateTodo] = useUpdateTodoMutation();
  const [deletTodo] = useDeletTodoMutation();
  const toggleTaskComplet = (id: string) => {
    const options = {
      id,
      data: { title, priority, isCompleted: !isCompleted, description },
    };
    updateTodo(options);
  };

  return (
    <div className="border bg-white h-full w-full rounded-lg flex justify-between items-center p-3 ">
      <input
        className="mr-3"
        onChange={() => toggleTaskComplet(_id)}
        type="checkbox"
        name="complet"
        id="complet"
      />
      <p className="text-lg font-sans font-semiboald flex-1 mr-3">{title}</p>

      <div className="flex-1 flex items-center gap-2">
        <div
          className={`
      size-2 rounded-full ${priority === "high" ? "bg-red-500" : null} ${
            priority === "medium" ? "bg-yellow-500" : null
          } ${priority === "low" ? "bg-green-500" : null}
       `}
        ></div>
        <p>{priority}</p>
      </div>
      <div className="flex-1">
        {isCompleted ? (
          <p className="text-lg text-green-500 font-sans font-semiboald">
            Done
          </p>
        ) : (
          <p className="text-lg text-red-500 font-sans font-semiboald">
            pending
          </p>
        )}{" "}
      </div>

      <p className="text-lg flex-[2] font-sans font-semiboald ">
        {description}
      </p>

      <div className="space-x-6 ">
        <UpdateTodo _id={_id} isCompleted={isCompleted} key={_id}></UpdateTodo>
        <Button
          onClick={() => deletTodo(_id)}
          className="bg-rose-600 text-white "
        >
          <svg
            className="size-5"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
