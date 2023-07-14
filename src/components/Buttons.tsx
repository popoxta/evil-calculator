import {MouseEventHandler, ReactElement} from "react";

export default function Buttons({handleClick}: {handleClick: MouseEventHandler<HTMLButtonElement>}) {

    const buttons: ReactElement[] = new Array(10).fill(0).map(
        (_: number, i: number): ReactElement => {
            return (
                <button
                    key={`btn-${i}`}
                    className={`calculator-btn number-${i}`}
                    id={i.toString()}
                    onClick={handleClick}>
                    {i}
                </button>
            )
        })

    return buttons

}