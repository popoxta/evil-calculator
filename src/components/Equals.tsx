import {MouseEventHandler} from "react";

export default function Equals({handleClick}: {handleClick: MouseEventHandler<HTMLButtonElement>}) {
    return <button onClick={handleClick} id={'equals'} className={'equals calculator-btn'}>=</button>
}