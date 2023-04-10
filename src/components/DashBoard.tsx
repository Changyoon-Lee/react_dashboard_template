import ContentBox from "./ContentBox";
import { useState } from "react";
import styles from "./DashBoard.module.css";
interface DashBoardProps {
  children?: React.ReactNode;
}

function DashBoard({ children }: DashBoardProps) {
  const [order, setOrder] = useState([10, 11, 12, 13, 14, 15, 16, 17]); //각 자리는 index고 해당 index의 id값은 value 임
  const moveBox = (boxId: number, toIndex: number): void => {
    //boxId 를 toIndex로 이동
    const preIndex = order.indexOf(boxId); // boxId의 기존인덱스
    console.log(
      `현재이동시키고 있는박스의 id는 ${boxId}이고 ${preIndex} -> ${toIndex}`
    );
    let newOrder = [...order]; //현재 id 순서
    newOrder.splice(preIndex, 1); //해당인덱스 내용 삭제
    newOrder.splice(toIndex, 0, boxId); // toIndex에 해당 id 삽입
    setOrder(newOrder); // order를 새로 업데이트
  };

  console.log(`order는 ${order}`);
  return (
    <div className="p-5 space-y-5">
      <div>{order.join(" ")}</div>
      <div className={styles.grid}>
        {order.map((i, index) => (
          <ContentBox id={i} index={index} moveBox={moveBox} key={i} />
        ))}
      </div>
    </div>
  );
}

export default DashBoard;
