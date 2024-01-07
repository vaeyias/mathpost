'use client'
import React, { useEffect, useRef } from 'react'

const TensBlock = (props: {id: number, containerRef:any}) => {
const blockRef = useRef<HTMLDivElement>(null);

  const isClicked = useRef<boolean>(false);

  const coords = useRef<{
    startX: number,
    startY: number,
    lastX: number,
    lastY: number
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0
  })

  useEffect(() => {
    if (!blockRef.current || !props.containerRef.current) return;

    const block = blockRef.current;
    const container = props.containerRef.current;


    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    }

    const onMouseUp = (e: MouseEvent) => {
      e.preventDefault();
      isClicked.current = false;
      coords.current.lastX = block.offsetLeft;
      coords.current.lastY = block.offsetTop;
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const newX = e.clientX - coords.current.startX + coords.current.lastX;
      const newY = e.clientY - coords.current.startY + coords.current.lastY;

      block.style.top = `${newY}px`;
      block.style.left = `${newX}px`;
    }

    const onMouseLeave =()=>{
      isClicked.current=false;
    }
    block.addEventListener('mousedown', onMouseDown);
    block.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseUp);
    window.addEventListener('mouseup', onMouseLeave);

    const cleanup = () => {
      block.removeEventListener('mousedown', onMouseDown);
      block.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseUp);
    }

    return cleanup;
  }, [])

  return (
    <div ref={blockRef} className="bg-green-600 tensBlock outline outline-green-700 p-1 rounded-md absolute m-3 top-0 left-0 text-white"> 10</div>
  );
}

export default TensBlock
