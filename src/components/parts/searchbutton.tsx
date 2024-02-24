import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import type {MouseEventHandler} from "react";

interface ButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function SearchButton(props: ButtonProps) {
  return (
    <div className={props.className}>
      <button onClick={props.onClick} className="flex">
        <MagnifyingGlassIcon className="size-5 text-gray-500" />
      </button>
    </div>
  );
}
