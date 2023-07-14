import React, {ReactElement, useState} from "react";
import Buttons from "./Buttons.tsx";
import OperandButtons from "./OperandButtons.tsx";


// yes this is my first time using ts, have mercy

export default function Calculator() {
    const [equation, setEquation] = useState([])

    const operands = new RegExp(/[/*+]/)
    const allOperands = new RegExp(/[*+/-]/)

    function handleClick(e): void {
        const current: string = e.target.id
        const prev = equation[equation.length - 1] ?? ''
        const beforePrev = equation[equation.length - 2] ?? ''

        if (!isNaN(+current)) {
            if (equation.length > 0 && !isNaN(+prev)){
                const currEquation = [...equation]
                currEquation[currEquation.length - 1] += current
                setEquation(currEquation)
                return
            }
        }

        // check for double operand and replace prev
        if (!isNaN(beforePrev) && prev.match(allOperands) && current.match(operands)) {
            const currEquation = [...equation]
            currEquation[currEquation.length - 1] = current
            setEquation(currEquation)
            return
        }

        // handles double minus logic
        if ((current.match(allOperands) && prev === '-') && (beforePrev.match(allOperands) || beforePrev === '-')) {
            const currEquation = [...equation]
            currEquation.pop()
            currEquation[currEquation.length - 1] = current
            setEquation(currEquation)
            return
        }

        setEquation(prev => [...prev, current])
    }


    return (
        <main id={'calculator'}>
            <h2 id={'calculator-screen'}>{equation}</h2>
            <Buttons handleClick={handleClick}/>
            <OperandButtons handleClick={handleClick}/>
        </main>
    )
}