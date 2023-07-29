'use client';

import { Component, MouseEventHandler, PropsWithChildren, ReactNode, useEffect, useState } from "react";
const styles = {
};

interface WrapperProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  // onMouseEnter?: Function;
  // onMouseLeave?: Function;
}

export default function BrutalDiv(props: WrapperProps) {
  const [hover, setHover] = useState(false);
  useEffect(()=>{
    // setHover(true);
  });
  const mouseEnter = function () {
    if (props.hoverable) {
      console.log("setHover");
      setHover(true);
    }
  }
  const mouseLeave = function () {
    if (hover) {
      console.log("setHover false");
      setHover(false);
    }
  }
  console.log('div re-rending')
  // transform .25s cubic-bezier(.645,.045,.355,1),box-shadow .25s cubic-bezier(.645,.045,.355,1)
  return (
    <div
      className={`shadow-[3px_3px_0px_0px_rgba(0,0,0)]
                  border border-black rounded-3xl
                  ${props.hoverable ? 'hover:shadow-[6px_6px_0px_0px_rgba(0,0,0)] transition ease-in-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:scale-100 duration-200 hover' : null} 
                  p-2 relative
                  ${props.className ?? ''}`}>
      {props.children}
    </div>
  );
}
