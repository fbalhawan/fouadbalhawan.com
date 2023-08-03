'use client';

import { ReactNode, useState } from "react";
import Image, { StaticImageData } from "next/image";
import TailwindColor from "../utils/TailwindColor";
const styles = {
};

interface CommonProps {
  children: ReactNode;
  className?: string;
  bgColor?: string;
  title?: string;
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
      style={{
        background: props.bgColor ?? 'auto'
      }}
      className={`
                  m-1 p-4
                  shadow-[3px_3px_0px_0px_rgba(0,0,0)]
                  border border-black rounded-3xl
                  ${props.hoverable ? 'hover:shadow-[6px_6px_0px_0px_rgba(0,0,0)] transition ease-in-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:scale-100 duration-200 hover' : null} 
                  ${props.imageSrc && ' pt-0 pr-0 pl-0'}
                  relative
                   h-auto
                  ${props.className ?? ''}`}>

      <div className="grid grid-cols-3 sm:grid-cols-4 mb-4">
        {props.icon &&
          <span
            className={`text-8xl`}
            style={{
              textShadow: `-1px 0px 0px black,
                    4px 4px 0px black,
                    0px -1px 0px black,
                    4px 4px 0px black`
            }}
          >{props.icon}</span>
        }

        {
          props.title &&
          <h2 className={` m-auto`}>
            {props.title}
          </h2>
        }
      </div>

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
          alt="Picture of div"
        />
      }

      {props.children}
    </div>
  );
}