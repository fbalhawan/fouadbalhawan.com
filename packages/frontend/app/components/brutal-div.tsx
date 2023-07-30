'use client';

import { ReactNode, useState } from "react";
import Image, { StaticImageData } from "next/image";

const styles = {
};

interface WrapperProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  imageSrc?: StaticImageData;
}

export default function BrutalDiv(props: WrapperProps) {
  const [hover, setHover] = useState(false);

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

  return (
    <div
      className={`
                  m-5 p-4
                  shadow-[3px_3px_0px_0px_rgba(0,0,0)]
                  border border-black rounded-3xl
                  ${props.hoverable ? 'hover:shadow-[6px_6px_0px_0px_rgba(0,0,0)] transition ease-in-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:scale-100 duration-200 hover' : null} 
                  ${props.imageSrc && ' pt-0 pr-0 pl-0'}
                  relative
                   h-80
                  ${props.className ?? ''}`}>

      {props.imageSrc &&
        <Image
          className='h-1/2'
          style={{
            borderTopLeftRadius: '1.5rem',
            borderTopRightRadius: '1.5rem',
            width: '100%',
            objectFit: 'cover'
          }}
          src={props.imageSrc ?? ''}
          alt="Picture of the author"
        />
      }

      {props.children}
    </div>
  );
}
