import React, {ReactElement} from "react";
import Buttons from "./Buttons.tsx";
import OperandButtons from "./OperandButtons.tsx";


// yes this is my first time using ts, have mercy

export default function Calculator() {

    function handleClick(e): void {
        console.log(e.target.id)
    }

    return (
        <main id={'calculator'}>
            <h2 id={'calculator-screen'}></h2>
            <Buttons handleClick={handleClick}/>
            <OperandButtons handleClick={handleClick}/>
        </main>
    )
}