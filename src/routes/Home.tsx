import DashBoard from "../components/DashBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Home() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DashBoard />
    </DndProvider>
  );
}
export default Home;
