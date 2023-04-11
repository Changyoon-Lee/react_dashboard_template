import DashBoard from "../components/DashBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function Home() {
  return (
    <div className="">
      <DndProvider backend={HTML5Backend}>
        <DashBoard />
      </DndProvider>
    </div>
  );
}
export default Home;
