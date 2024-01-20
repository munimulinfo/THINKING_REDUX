import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";
type TTodoFilterProps = {
  priority: string;
  setPriority: Dispatch<SetStateAction<string>>;
};
const TodoFilter = ({ priority, setPriority }: TTodoFilterProps) => {
  return (
    <Select onValueChange={(priority) => setPriority(priority)}>
      <SelectTrigger className="w-[180px] bg-button-gradient text-black font-sans uppercase font-bold">
        <SelectValue placeholder="Select Priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="low">low</SelectItem>
          <SelectItem value="high">high</SelectItem>
          <SelectItem value="medium">medium</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default TodoFilter;
