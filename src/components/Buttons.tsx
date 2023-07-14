import React, {ReactElement} from "react";

export default function Buttons({handleClick}) {

    const buttons: ReactElement[] = new Array(10).fill(0).map(
        (el: number, i: number): ReactElement => {
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