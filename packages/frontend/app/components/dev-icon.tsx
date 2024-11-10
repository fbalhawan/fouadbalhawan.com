'use client';
import { Component, PropsWithChildren, ReactNode } from "react";
import { cleanString } from "../utils";
import BrutalDiv from "./brutal-div";
import TailwindColor from "../utils/TailwindColor";


const styles = {
};

interface WrapperProps {
    key: number;
    icon: string;
    label: string;
    className?: string;
}

const colors = [
    'bg-amber-100',
    'bg-teal-200',
    'bg-lime-100',
    'bg-green-100',
    'bg-sky-200',
    'bg-purple-100',
    'bg-red-100'
]

export default function DevIcon(props: WrapperProps) {
    const iconName = cleanString(props.icon).toLowerCase();
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
        <BrutalDiv key={props.key} className={` bg-green bg-sk h-auto flex-wrap overflow-auto inline-flex pt-2 pb-1 ${color}`}>
            <span className="text-md leading-none">{props.label}</span>
            <i className={`devicon-${iconName}-plain colored text-xl leading-none ${props.className ?? ''}`} />
        </BrutalDiv>
    );
}
