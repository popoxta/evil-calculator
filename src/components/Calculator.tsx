import {useState} from "react";
import Buttons from "./Buttons.tsx";
import OperandButtons from "./OperandButtons.tsx";
import Equals from "./Equals.tsx";

// yes this is my first time using ts, have mercy

export default function Calculator() {
    const [equation, setEquation] = useState([])

    const operands: RegExp = new RegExp(/[/*+]/)
    const allOperands: RegExp = new RegExp(/[*+/-]/)

    function handleClick(e): void {
        const current: string = e.target.id
        const prev: string = equation[equation.length - 1] ?? ''
        const beforePrev: string = equation[equation.length - 2] ?? ''

        const currentIsNaN: boolean = isNaN(+current)
        const currentIsDot: boolean = current === '.'

        // early exit checks
        if (
            prev.includes('.') && currentIsDot
            || prev === '' && currentIsNaN
            || prev[prev.length - 1] === '.' && currentIsNaN
            || prev.match(allOperands) && currentIsDot
        ) {
            return

        } else if ((!currentIsNaN || currentIsDot) && equation.length > 0 && !isNaN(+prev)) {
            const currEquation: string[] = [...equation]
            currEquation[currEquation.length - 1] += current
            setEquation(currEquation)
        }
        // check for double operand and replace prev
        else if (!isNaN(+beforePrev) && prev.match(allOperands) && current.match(operands)) {
            const currEquation: string[] = [...equation]
            currEquation[currEquation.length - 1] = current
            setEquation(currEquation)
        }
        // handles double minus logic
        else if ((current.match(allOperands) && prev === '-') && (beforePrev.match(allOperands) || beforePrev === '-')) {
            const currEquation: string[] = [...equation]
            currEquation.pop()
            currEquation[currEquation.length - 1] = current
            setEquation(currEquation)
        } else setEquation(prev => [...prev, current])
    }


    return (
        <main id={'calculator'}>
            <h2 id={'calculator-screen'}>{equation}</h2>
            <Buttons handleClick={handleClick}/>
            <OperandButtons handleClick={handleClick}/>
            <Equals/>
        </main>
    )
}