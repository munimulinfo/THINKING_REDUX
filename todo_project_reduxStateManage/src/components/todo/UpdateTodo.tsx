import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { DialogFooter, DialogHeader } from "../ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { useUpdateTodoMutation } from "@/redux/api/api";
// import { useAppDispatch } from "@/redux/hook";
// import { addTodo } from "@/redux/featuers/todoSlice";
type TupdateProps = {
  _id: string;
  isCompleted: boolean | undefined;
};
function UpdateTodo({ _id, isCompleted }: TupdateProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  //From redux Local state mangage clinet side
  // const dispatch = useAppDispatch();
  // From Server Side
  const [updateTodo] = useUpdateTodoMutation();

  const handleUpdate = (e: FormEvent) => {
    e.preventDefault();
    // const randomstring = Math.random().toString(36).substring(2, 7);
    const options = {
      id: _id,
      data: {
        title,
        description,
        priority,
        isCompleted,
      },
    };

    //From Local state Manage
    // dispatch(addTodo(data));
    // From server manage
    updateTodo(options);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-purple-600 text-white ">
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
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            ></path>
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className=" w-full max-w-[400px] h-full p-5 bg-white shadow-lg">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Filup This Form And Your Task Count on Ui.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleUpdate}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Task Title
              </Label>
              <Input
                onBlur={(e) => setTitle(e.target.value)}
                id="title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Task Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Task Range
              </Label>
              <Select
                onValueChange={(value) => setPriority(value)}
                value={priority}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="low">low</SelectItem>
                    <SelectItem value="medium">medium</SelectItem>
                    <SelectItem value="high">high</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Task</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default UpdateTodo;
