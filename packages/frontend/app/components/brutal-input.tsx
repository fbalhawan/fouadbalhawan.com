'use client';
import { Component, PropsWithChildren, ReactNode } from "react";


import { COLORS } from './constants';

const styles = {
};

interface WrapperProps {
    className?: string;
}

const btnClass = ``;
export default function BrutalInput(props: WrapperProps) {
    console.log('btn re-rending')
    return (
        <div className=" m-4 relative">
            <div className={`absolute left-3 top-3`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-100 z-50">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            </div>
            <input
                onClick={(e) => {
                    console.log("clicked");
                }}
                className={` pt-3 pb-3 pl-4 pr-4
                 indent-8
             bg-slate-500 shadow-[3px_3px_0px_0px_rgba(0,0,0)]
             text-slate-100
            rounded-full border-black border
            `} />
            {/* transition hover:shadow-[6px_6px_0px_0px_rgba(0,0,0)] ease-in-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:scale-100 duration-200 */}
        </div>
    );
}
