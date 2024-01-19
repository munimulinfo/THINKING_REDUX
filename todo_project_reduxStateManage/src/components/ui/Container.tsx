import { ReactNode } from "react";

interface TContainerProps {
  children: ReactNode;
}
const Container = ({ children }: TContainerProps) => {
  return (
    <div className="h-screen w-full max-w-6xl mx-auto p-4">{children}</div>
  );
};

export default Container;
