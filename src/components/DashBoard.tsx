import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ContentBox from "./ContentBox";

interface DashBoardProps {
  children?: React.ReactNode;
}
function DashBoard({ children }: DashBoardProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="">{children}</div>
      <ContentBox />
    </DndProvider>
  );
}

export default DashBoard;
