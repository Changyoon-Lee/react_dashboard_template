import ContentBox from "./ContentBox";
import { useState } from "react";

interface DashBoardProps {
  children?: React.ReactNode;
}

function DashBoard({ children }: DashBoardProps) {
  const [order, setOrder] = useState([0, 1, 2, 3]);
  const moveBox = (boxId: number, toIndex: number): void => {
    const index = order.indexOf(boxId);
    let newOrder = [...order];
    newOrder.splice(index, 1); //해당인덱스 내용 삭제
    newOrder.splice(toIndex, 0, boxId);
    setOrder(newOrder);
  };

  return (
    <div className="p-5 space-y-5">
      {order.map((i, index) => (
        <ContentBox id={i} index={index} moveBox={moveBox} />
      ))}
    </div>
  );
}

export default DashBoard;
