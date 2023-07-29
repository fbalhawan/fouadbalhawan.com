'use client';
import { Component, PropsWithChildren, ReactNode } from "react";


import { COLORS } from './constants';

const styles = {
};

interface WrapperProps {
    children: ReactNode;
    className?: string;
}

const btnClass = ``;
export default function BrutalBtn(props: WrapperProps) {
    console.log('btn re-rending')
    return (
        <div className="m-4">
            <a
            onClick={(e)=>{
                console.log("clicked");
            }}
            className={` pt-3 pb-3 pl-4 pr-4
            bg-teal-300 shadow-[3px_3px_0px_0px_rgba(0,0,0)]
            rounded-full border-black border
            transition hover:shadow-[6px_6px_0px_0px_rgba(0,0,0)] ease-in-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:scale-100 duration-200
            hover:cursor-pointer
            active:bg-teal-400
            active:shadow-[3px_3px_0px_0px_rgba(0,0,0)] active:translate-x-0.5 active:translate-y-0.5 active:-scale-100 
            `}>
                {props.children}
            </a>
        </div>
    );
}
// shadow-[5px_5px_0px_0px_rgba(109,40,217)]