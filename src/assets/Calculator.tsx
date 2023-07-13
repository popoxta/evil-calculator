import React, {ReactElement} from "react";


// yes this is my first time using ts, have mercy

export default function Calculator() {

    function handleClick(e):void {
        console.log(e.target.id)
    }

    const buttons = (): ReactElement[] => {
        return new Array(10).fill(0).map((el: number, i: number): ReactElement => {
            return <button key={`btn-${i}`} className={'calculator-btn'} id={i.toString()}
                onClick={handleClick}>
                {i}
            </button>
        })
    }

    return (
        <main id={'calculator'}>
            <h2 id={'calculator-screen'}></h2>
            <div className={'calculator-buttons'}>
                {buttons()}
            </div>
        </main>
    )
}