import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";
const Todo = () => {
  return (
    <Container>
      <h1 className="text-center font-sans font-semibold uppercase text-3xl">
        This is Todo Page
      </h1>
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default Todo;
