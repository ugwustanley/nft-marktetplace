import React, { useRef, useEffect,  ReactElement } from "react";
import styles from "./cursor.module.scss";

const Cursor = (): ReactElement => {
   
  const delay = 18;

  const dot = useRef<HTMLDivElement >(null);

  const cursorVisible = useRef<HTMLDivElement | null | boolean>(null);
  const cursorEnlarged = useRef<HTMLDivElement | null | boolean>(null);

  const endX = useRef<any>(0)
  const endY = useRef(0)
  
  

  const _x = useRef<number>(0)
  const _y = useRef<number>(0)

  const requestRef = useRef<HTMLDivElement | any>(null)

  const toggleCursorVisibility = ():void =>{
      if(cursorVisible.current){
          dot.current!.style.opacity = '0.8';
      }
      else{
        dot.current!.style.opacity = '0';
      }
  }

  const toggleCursorSize = ():void => {
      if(cursorEnlarged.current){
          dot.current!.style.transform = 'translate(-50%, -50%) scale(0.75)'
      }
      else{
          dot.current!.style.transform = 'translate(-50%, -50%) scale(1)'
      }
  }

  const mouseOverEvent = ():void =>{
      cursorEnlarged.current = true;
     toggleCursorSize();
  }

  const mouseOutEvent = ():void =>{
    cursorEnlarged.current = false;
    toggleCursorSize();
  }

  const mouseEnterEvent = ():void =>{
    cursorVisible.current = true;
    toggleCursorVisibility();
 }

 const mouseLeaveEvent = ():void =>{
    cursorVisible.current = false;
    toggleCursorVisibility();
 }

 const mouseMoveEvent = ( e: any):void =>{
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX 
    endY.current = e.pageY

  setTimeout(() => {
    dot.current!.style.top = endY.current + 'px'
    dot.current!.style.left = endX.current + 'px'
    
    dot.current!.style.transition = 'all 0.24s ease-out'

  } , 100)
 }



 useEffect(() => {
   
    document.addEventListener('mousemove', mouseMoveEvent)
    document.addEventListener('mouseenter', mouseEnterEvent)
    document.addEventListener('mouseleave', mouseLeaveEvent)
    document.addEventListener('mousedown', mouseOverEvent)
    document.addEventListener('mouseup', mouseOutEvent)
 
   return () => {

    document.removeEventListener('mousemove', mouseMoveEvent)
    document.removeEventListener('mouseenter', mouseEnterEvent)
    document.removeEventListener('mouseleave', mouseLeaveEvent)
    document.removeEventListener('mousedown', mouseOverEvent)
    document.removeEventListener('mouseup', mouseOutEvent)

    cancelAnimationFrame(requestRef.current)
     
   }
 }, [])
 
 
  return (

       <div ref={dot} className={styles.cursor__dot}></div>
    
  );
};

export default Cursor;
