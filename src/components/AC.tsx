import {MouseEventHandler} from "react";

export default function AC({handleClick}: {handleClick: MouseEventHandler<HTMLButtonElement>}){
    return <button className={'calculator-btn ac'} onClick={handleClick} id={'ac'}>AC</button>
}