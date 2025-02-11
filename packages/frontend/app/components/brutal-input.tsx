"use client";

interface InputProps {
  className?: string;
  icon?: any;
  placeholder?: string;
}

export default function BrutalInput(props: InputProps) {
  return (
    <div className=" m-4 relative">
      {props.icon && (
        <div className={`absolute left-3 top-3`}>
          <props.icon />
        </div>
      )}

      <input
        placeholder={props.placeholder}
        className={` pt-3 pb-3 pl-4 pr-4
                 ${props.icon && "indent-8"}
              shadow-[3px_3px_0px_0px_rgba(0,0,0)]
             
            rounded-full border-black border
            `}
      />
    </div>
  );
}
