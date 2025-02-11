"use client";
import { cleanString } from "../utils";
import BrutalDiv from "./brutal-div";
import {
  Popover,
  Button,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

import RoundedBrutalDiv from "./rounded-brutal-div";

interface WrapperProps {
  icon: string;
  label: string;
  className?: string;
}

const colors = [
  "bg-amber-100",
  "bg-teal-200",
  "bg-lime-100",
  "bg-green-100",
  "bg-sky-200",
  "bg-purple-100",
  "bg-red-100",
];

export default function DevIcon(props: WrapperProps) {
  const iconName = cleanString(props.icon).toLowerCase();
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <Popover
      classNames={{
        base: `p-1 border-2 shadow-[0px_2px_0px_0px_rgba(0,0,0)] border-black ${color}`,
        arrow: "bg-green visible border-1px",
      }}
    >
      <PopoverTrigger>
        <Button className="rounded-full">
          <RoundedBrutalDiv
            hoverable={true}
            className={` bg-green bg-sk flex-wrap overflow-auto m-2 p-2 mt-6 ${color}`}
          >
            <i
              className={`devicon-${iconName}-plain colored text-4xl leading-none ${
                props.className ?? ""
              }`}
            />
          </RoundedBrutalDiv>
        </Button>
      </PopoverTrigger>
      <PopoverContent>{props.label}</PopoverContent>
    </Popover>
  );
}
