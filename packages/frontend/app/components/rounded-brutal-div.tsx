'use client';

import { CSSProperties, ReactNode} from 'react';

interface CommonProps {
  children: ReactNode;
  className?: string;
  title?: string;
  hoverable?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

type ConditionalProps =
  | {
      imageSrc?: string;
      icon?: never;
    }
  | {
      imageSrc?: never;
      icon?: string;
    };

// Discriminated Union: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
type WrapperProps = CommonProps & ConditionalProps;

export default function RoundedBrutalDiv(props: WrapperProps) {
  return (
    <div
      onClick={props.onClick ? props.onClick : undefined}
      className={`
                  border-2 shadow-[0px_2px_0px_0px_rgba(0,0,0)] border-black rounded-full m-1
                  ${
                    props.hoverable
                      ? 'hover:shadow-[0px_4px_0px_0px_rgba(0,0,0)] transition ease-in-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:scale-100 duration-0 hover cursor-pointer'
                      : null
                  }
                  ${props.className ?? ''}`}
    >
      {props.children}
    </div>
  );
}
