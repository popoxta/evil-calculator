import React, {ReactElement, useState} from "react";
import Buttons from "./Buttons.tsx";
import OperandButtons from "./OperandButtons.tsx";


// yes this is my first time using ts, have mercy

export default function Calculator() {
    const [equation, setEquation] = useState([])

    function handleClick(e): void {
        const value: string = e.target.id
        const prevValue = equation[equation.length-1]

        // replace operand if prev value is of non '-' operand
        if (prevValue && prevValue.match(/[*/+]/) && value.match(/[*/+]/)) {
            const prev: string[] = [...equation]
            prev[prev.length -1] = value
            setEquation(prev)
            return
        }

        setEquation(prev => [...prev, value])
    }

    return (
        <main id={'calculator'}>
            <h2 id={'calculator-screen'}>{equation}</h2>
            <Buttons handleClick={handleClick}/>
            <OperandButtons handleClick={handleClick}/>
        </main>
    )
}