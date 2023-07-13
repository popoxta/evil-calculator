import React, {ReactElement, useState} from "react";
import Buttons from "./Buttons.tsx";
import OperandButtons from "./OperandButtons.tsx";


// yes this is my first time using ts, have mercy

export default function Calculator() {
    const [equation, setEquation] = useState([])

    function handleClick(e): void {
        console.log(e.target.id)
        setEquation(prev => [...prev, e.target.id])
    }

    return (
        <main id={'calculator'}>
            <h2 id={'calculator-screen'}>{equation}</h2>
            <Buttons handleClick={handleClick}/>
            <OperandButtons handleClick={handleClick}/>
        </main>
    )
}