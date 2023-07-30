'use client';

import { ReactNode, useState } from "react";
import Image, { StaticImageData } from "next/image";

const styles = {
};

interface CommonProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

type ConditionalProps =
  | {
    imageSrc?: StaticImageData;
    icon?: never;
  }
  | {
    imageSrc?: never;
    icon?: string;
  }

// Discriminated Union: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
type WrapperProps = CommonProps & ConditionalProps;

export default function BrutalDiv(props: WrapperProps) {
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

      {props.icon &&
        <p
          className={` text-8xl mb-4`}
          style={{
            textShadow: `-1px 0px 0px black,
                    4px 4px 0px black,
                    0px -1px 0px black,
                    4px 4px 0px black`
          }}
        >{props.icon}</p>
      }

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
