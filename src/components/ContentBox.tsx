import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
interface ContentBoxProps {
  id: number;
  index: number;
  moveBox: (boxId: number, toIndex: number) => void;
}
/**
 * Your Component
 */
export default function ContentBox({ id, index, moveBox }: ContentBoxProps) {
  const [{ isDragging }, connectDrag, dragPreview] = useDrag(
    // dragPreview: 드래그 도중에 보여줄 화면
    () => ({
      type: "Box", //It is used by the "accept" specification of drop targets.
      item: { id, index }, // item에 선언되는 것은 box에 넣어줄 정보를 세팅
      collect: (monitor) => ({
        isDragging: monitor.isDragging(), // isDragging 변수가 현재 드래깅중인지 아닌지를 기록
      }),
      end: (item, monitor) => {
        //드래그가 끝났을 때 작동하는 부분,
        const { id: originId, index: originIndex } = item; // box를 내려놓을때 먼저 초기 id,index를 받아온다
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          // 올바른 위치에 드랍되지 않았을때
          moveBox(originId, originIndex);
        }
      },
    })
  );

  const [, connectDrop] = useDrop(
    () => ({
      accept: "Box",
      canDrop: () => false,
      hover: ({
        id: draggedId,
        index: originIndex,
      }: {
        id: number;
        index: number;
      }): void => {
        // 여기 나중에 코드 수정필요
        if (draggedId !== id) {
          //drop위치에 있는게 dragedId이고 잡고있는게 id 인가? 헷갈리네
          console.log("움직여야지~");
          moveBox(draggedId, index);
        }
      },
    }),
    [moveBox]
  );

  return (
    /* This is optional. The dragPreview will be attached to the dragSource by default */
    <div
      ref={connectDrag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="bg-gray-600"
    >
      <div ref={connectDrop}>{id} 입니다</div>
      <div className="bg-red-200 opacity-50 w-10 h-10"></div>
      <div>title입니다2</div>
    </div> //The drag ref marks this node as being the "pick-up" node
  );
}
