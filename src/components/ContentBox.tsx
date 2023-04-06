import React from 'react'
import { useDrag } from 'react-dnd'

/**
 * Your Component
 */
export default function ContentBox() {
    const [{ isDragging }, drag, dragPreview] = useDrag(
        () => ({
            type: 'Box',//It is used by the "accept" specification of drop targets.
            collect: (monitor) => ({
                isDragging: monitor.isDragging()
            })
        }),
    )
    return (
        /* This is optional. The dragPreview will be attached to the dragSource by default */
        <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1 }} className="bg-gray-600">
            <div role="Handle" ref={drag} />
        </div> //The drag ref marks this node as being the "pick-up" node
    )
}