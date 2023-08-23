'use client';
import { Component, PropsWithChildren, ReactNode } from "react";
import { cleanString } from "../utils";
import BrutalDiv from "./brutal-div";
import TailwindColor from "../utils/TailwindColor";


const styles = {
};

interface WrapperProps {
    icon: string;
    label: string;
    className?: string;
}

const btnClass = ``;
// const colors = [
//     'rgba(254,243,199)', //'amber',
//     'rgba(204, 251, 241)', //'teal',
//     'rgb(236, 252, 203)', // 'lime',
//     // 'emerald',
//     'rgb(220 252 231)',// 'green',
//     // 'cyan',
//     'rgb(186, 230, 253)', // 'sky',
//     // 'indigo',
//     'rgb(243 232 255)',// 'purple',
//     // 'pink',
//     // 'rose',
//     'rgb(254 226 226)'// 'red'
// ]

const colors = [
    'bg-amber-100',
    'bg-teal-200',
    'bg-lime-100',
    'bg-green-100',
    'bg-sky-200',
    'bg-purple-100',
    'bg-red-100'
]

const colorOptions = { range: [1], prefix: 'bg' }
const containerColor = new TailwindColor(colorOptions).pick();

export default function DevIcon(props: WrapperProps) {
    const iconName = cleanString(props.icon).toLowerCase();
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
        <BrutalDiv className={` bg-green bg-sk h-auto flex-wrap overflow-auto inline-flex pt-2 pb-1 ${color}`}>

            <span className="text-md leading-none">{props.label}</span>
            <i className={`devicon-${iconName}-plain colored text-xl leading-none ${props.className ?? ''}`} />
        </BrutalDiv>
    );
}