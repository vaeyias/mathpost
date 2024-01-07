import React, { useEffect, useRef, useState } from 'react'

const OnesBlock = (props:{id:number, containerRef:any}) => {
    const blockRef = useRef<HTMLDivElement>(null);

    const isClicked = useRef<boolean>(false);

    const coords = useRef<{
      startX: number,
      startY: number,
      endX: number,
      endY: number
    }>({
      startX: 0,
      startY: 80,
      endX: 0,
      endY: 0
    })

    useEffect(() => {
      if (!blockRef.current || !props.containerRef.current) return;

      const block = blockRef.current;
      const container = props.containerRef.current;


      const onMouseDown = (e: MouseEvent) => {
        isClicked.current = true;
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      }

      const onMouseUp = (e: MouseEvent) => {
        isClicked.current = false;
        coords.current.endX = block.offsetLeft;
        coords.current.endY = block.offsetTop-80;
      }

      const onMouseMove = (e: MouseEvent) => {

        if (!isClicked.current) return;

        const newX = e.clientX - coords.current.startX + coords.current.endX;
        const newY = e.clientY - coords.current.startY + coords.current.endY;

        block.style.top = `${newY+80}px`;
        block.style.left = `${newX}px`;
      }

      const onMouseClick =()=>{
        isClicked.current=false;
      }

      block.addEventListener('mousedown', onMouseDown);
      block.addEventListener('mouseup', onMouseUp);
      container.addEventListener('mousemove', onMouseMove);
      container.addEventListener('mouseleave', onMouseUp);
      window.addEventListener('mouseup', onMouseClick)

      return (() => {
        block.removeEventListener('mousedown', onMouseDown);
        block.removeEventListener('mouseup', onMouseUp);
        container.removeEventListener('mousemove', onMouseMove);
        container.removeEventListener('mouseleave', onMouseUp);
        window.removeEventListener('mouseup', onMouseClick)
      })

    }, [])

    return (
      <div ref={blockRef} className="bg-blue-600 w-16 h-16 rounded-md outline outline-blue-700 p-1 absolute m-3 top-20 left-0 text-white"> 1</div>
    );

}

export default OnesBlock
