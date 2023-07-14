import {useState} from "react";
import Buttons from "./Buttons.tsx";
import OperandButtons from "./OperandButtons.tsx";
import Equals from "./Equals.tsx";
import {evaluate, Infinity} from "mathjs";
import AC from "./AC.tsx";
import {Evil} from "../evil.ts";

// yes this is my first time using ts, have mercy

export default function Calculator({evil}: {evil: Evil }) {
    const [equation, setEquation] = useState([] as string[])

    const operands: RegExp = new RegExp(/[/*+]/)
    const allOperands: RegExp = new RegExp(/[*+/-]/)

    function handleClick(e: any): void {
        const current: string = e.target.id
        const prev: string = equation[equation.length - 1] ?? ''
        const beforePrev: string = equation[equation.length - 2] ?? ''

        const currentIsNaN: boolean = isNaN(+current)
        const currentIsDot: boolean = current === '.'
        const currEquation: string[] = [...equation]

        // early exit checks
        if (
            prev.includes('.') && currentIsDot
            || prev === '' && currentIsNaN
            || prev[prev.length - 1] === '.' && currentIsNaN
            || prev.match(allOperands) && currentIsDot
            || prev.toString() === 'Infinity'
        ) {
            return
        } else if ((!currentIsNaN || currentIsDot) && equation.length > 0 && !isNaN(+prev)) {
            currEquation[currEquation.length - 1] += current
            setEquation(currEquation)
        }
        // check for double operand and replace prev
        else if (!isNaN(+beforePrev) && prev.match(allOperands) && current.match(operands)) {
            currEquation[currEquation.length - 1] = current
            setEquation(currEquation)
        }
        // handles double minus logic
        else if ((current.match(allOperands) && prev === '-') && (beforePrev.match(allOperands) || beforePrev === '-')) {
            currEquation.pop()
            currEquation[currEquation.length - 1] = current
            setEquation(currEquation)
        } else {
            setEquation(prev => [...prev, current])
        }
    }

    function calculate(): void {
        if (isNaN(+equation[equation.length - 1])) return

        let finalEquation: string = equation.join('')

        if (evil.value === '42' || evil.value === '1969') finalEquation = evil.value
        else if (evil.name === 'Randomizer') finalEquation += randomModifier()
        else finalEquation += evil.value

        setEquation([evaluate(finalEquation).toString()])
    }

    function randomModifier(): string {
        const operators: string[] = ['+', '-', '*', '/']
        const randomOperand: string = operators[Math.floor(Math.random() * operators.length)]
        const randomNumber: string = (Math.random() * 100).toFixed(2)
        return `${randomOperand} ${randomNumber}`
    }

    function allClear(): void {
        setEquation([])
    }

    return (
        <main id={'calculator'}>
            <div className={'screen'}>
                <h3 id={'calculator-screen'}>{equation}</h3>
            </div>
            <Buttons handleClick={handleClick}/>
            <OperandButtons handleClick={handleClick}/>
            <Equals handleClick={calculate}/>
            <AC handleClick={allClear}/>
        </main>
    )
}