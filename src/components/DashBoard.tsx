import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface DashBoardProps {
  children?: React.ReactNode;
}
function DashBoard({ children }: DashBoardProps) {
  return (
    <>
      <main className="">{children}</main>
    </>
  );
}

export default DashBoard;
