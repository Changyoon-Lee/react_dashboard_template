import React, { useEffect, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import styles from "./ContentBox.module.css";
import { BoxState } from "./DashBoard";
interface ContentBoxProps {
  id: number;
  index: number;
  gridRowSpan: number;
  gridColSpan: number;
  moveBox: (boxId: number, toIndex: number) => void;
}
/**
 * Your Component
 */
export default function ContentBox({
  id,
  index,
  gridRowSpan,
  gridColSpan,
  moveBox,
}: ContentBoxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const [hieght, setHiehgt] = useState(0);
  useEffect(() => {
    setWidth(ref.current ? ref.current.offsetWidth : 0);
    setHiehgt(ref.current ? ref.current.offsetHeight : 0);
    console.log(width, hieght);
  }, [ref.current, gridRowSpan, gridColSpan]);
  const [{ isDragging }, connectDrag, dragPreview] = useDrag(
    // dragPreview: 드래그 도중에 보여줄 화면
    () => ({
      type: "Box", //It is used by the "accept" specification of drop targets.
      item: { id, index }, // item에 선언되는 것은 drop tartet에서 알수 있는 drag source 정보이다
      collect: (monitor) => ({
        isDragging: monitor.isDragging(), // isDragging 변수가 현재 드래깅중인지 아닌지를 기록
      }),
      end: (item, monitor) => {
        //드래그가 끝났을 때 작동하는 부분,
        const { id: originId, index: originIndex } = item; // box를 내려놓을때 먼저 초기 id,index를 받아온다
        const didDrop = monitor.didDrop(); // check whether or not the drop was handled by a compatible drop target.
        if (!didDrop) {
          //connectDrop으로 선언한 태그위에 드랍되지 않았을때
          moveBox(originId, originIndex); //초기위치로 다시 이동
          console.log("초기위치로 이동합니다");
        }
      },
    })
  );

  const [, connectDrop] = useDrop(
    () => ({
      accept: "Box",
      //   canDrop: () => false, // 이동 안되는 조건설정하고 싶을때 여기다 설정
      hover: ({
        //인풋은 드래그하고있는 오브젝트정보
        id: draggedId,
        index: originIndex,
      }: {
        id: number;
        index: number;
      }): void => {
        // 여기 나중에 코드 수정필요
        if (draggedId !== id) {
          console.log(
            `움직여드립니다. 나는 ${id}인데 ${draggedId}가 내자리를 차지했어요`
          );
          moveBox(draggedId, index);
        }
      },
    }),
    [moveBox]
  );

  const [{ isResizing }, connectResize] = useDrag(
    // dragPreview: 드래그 도중에 보여줄 화면
    () => ({
      type: "Resize", //It is used by the "accept" specification of drop targets.
      item: { id, gridRowSpan, gridColSpan, width, hieght }, // item에 선언되는 것은 drop tartet에서 알수 있는 drag source 정보이다
      collect: (monitor) => ({
        isResizing: monitor.isDragging(), // isDragging
      }),
      end: (item, monitor) => {
        //드래그가 끝났을 때 작동하는 부분,
        const { gridRowSpan: originRow, gridColSpan: originCol } = item; // box를 내려놓을때 먼저 초기 id,index를 받아온다
        const didDrop = monitor.didDrop(); // check whether or not the drop was handled by a compatible drop target.
        if (!didDrop) {
          //connectDrop으로 선언한 태그위에 드랍되지 않았을때
          console.log("크기변경실패");
        }
      },
    }),
    [width, hieght]
  );

  connectDrag(connectDrop(ref));
  return (
    /* This is optional. The dragPreview will be attached to the dragSource by default */
    <div
      ref={ref}
      className={`relative flex flex-col column row-span-${gridRowSpan} col-span-${gridColSpan} bg-gray-300 rounded-lg shadow-md overflow-hidden`} //{styles.box} //
      style={{
        opacity: isDragging ? 0.5 : 1,
        gridColumn: `auto/span ${gridColSpan}`,
        gridRow: `auto/span ${gridRowSpan}`,
      }}
    >
      <div className="bg-blue-500">
        <span>id는 {id} 입니다</span>
        <span>
          width: {width} height: {hieght}
        </span>
      </div>
      <div className="bg-red-200 opacity-50 w-10 h-10"></div>
      <div>
        index는 {index}{" "}
        {isResizing ? `${gridRowSpan || 3} x ${gridColSpan || 3}` : ""}
      </div>
      <div
        className="absolute bottom-0 right-0 w-0 h-0 border-[10px] border-black border-t-transparent border-l-transparent cursor-nw-resize"
        ref={connectResize}
      ></div>
    </div> //The drag ref marks this node as being the "pick-up" node
  );
}
