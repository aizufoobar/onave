import {ArrowLeftIcon} from "@heroicons/react/24/outline";
import type {MouseEventHandler} from "react";

interface Props {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function BackButton(props: Props) {
  return (
    <div className={props.className}>
      <button onClick={props.onClick}>
        <ArrowLeftIcon className="size-full" />
      </button>
    </div>
  );
}
