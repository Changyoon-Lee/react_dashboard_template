import ContentBox from "./ContentBox";
import { useState } from "react";
import styles from "./DashBoard.module.css";
import { useDrop } from "react-dnd";
interface DashBoardProps {
  children?: React.ReactNode;
}
export interface BoxState {
  row?: number;
  col?: number;
}
interface BoxStates {
  [id: number]: BoxState;
}
function DashBoard({ children }: DashBoardProps) {
  const [order, setOrder] = useState([10, 11, 12, 13, 14, 15, 16, 17]); //각 자리는 index고 해당 index의 id값은 value 임
  const [boxStates, setBoxStates] = useState<BoxStates>({}); // key : id , value : {col, row}
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

  const [, connectResizeDrop] = useDrop(() => ({
    accept: "Resize",
    //   canDrop: () => false, // 이동 안되는 조건설정하고 싶을때 여기다 설정
    hover: (
      {
        //인풋은 드래그하고있는 오브젝트정보
        id: id,
        gridRowSpan: currentRowSize,
        gridColSpan: currentColSize,
        width,
        hieght,
      }: {
        id: number;
        gridRowSpan: number;
        gridColSpan: number;
        width: number;
        hieght: number;
      },
      monitor
    ): void => {
      const XYcoord = monitor.getDifferenceFromInitialOffset();

      const { x, y } = XYcoord || { x: 0, y: 0 };
      // console.log(width, hieght);
      const thresX = width / currentColSize;
      const thresY = hieght / currentRowSize;
      //   console.log(thresX, thresY);
      if (true) {
        currentColSize += Math.round(x / thresX);
        currentRowSize += Math.round(y / thresY);

        // let newState = { ...boxStates };
        // newState[id] = {
        //   row: currentRowSize > 3 ? currentRowSize : 3,
        //   col: currentColSize > 3 ? currentColSize : 3,
        // };
        setBoxStates((prevState) => {
          let newState = { ...prevState };
          newState[id] = {
            row: currentRowSize >= 3 ? currentRowSize : 3,
            col: currentColSize >= 3 ? currentColSize : 3,
          };
          return newState;
        });
      }
    },
  }));

  //   console.log(`order는 ${order}`);
  return (
    <div className="p-5 space-y-5">
      <div>{order.join(" ")}</div>
      <div>{JSON.stringify(boxStates)}</div>
      <div className={styles.grid} ref={connectResizeDrop}>
        {order.map((i, index) => (
          <ContentBox
            id={i}
            index={index}
            gridRowSpan={boxStates[i]?.row || 3}
            gridColSpan={boxStates[i]?.col || 3}
            moveBox={moveBox}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default DashBoard;
