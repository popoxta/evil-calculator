import {useState} from "react";
import Buttons from "./Buttons.tsx";
import OperandButtons from "./OperandButtons.tsx";
import Equals from "./Equals.tsx";
import {evaluate, re} from "mathjs";
import AC from "./AC.tsx";

// yes this is my first time using ts, have mercy

export default function Calculator({evil}) {
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

    function calculate(): void {
        if (isNaN(+equation[equation.length - 1])) return

        let valueToCalculate:string = equation.join('')

        if (evil.value === '42' || evil.value === '1969') valueToCalculate = evil.value
        else if (evil.name === 'Randomizer') valueToCalculate += randomModifier()
        else valueToCalculate += evil.value

        setEquation([evaluate(valueToCalculate).toFixed(2).toString()])
    }

    function randomModifier(): string{
        const operators: string[] = ['+', '-', '*', '/']
        const randomValue: string = operators[Math.floor(Math.random() * operators.length)]
        const randomNumber: string = (Math.random() * 100).toFixed(2)
        return `${randomValue} ${randomNumber}`
    }

    function allClear(): void {
        setEquation([])
    }

    return (
        <main id={'calculator'}>
            <h2 id={'calculator-screen'}>{equation}</h2>
            <Buttons handleClick={handleClick}/>
            <OperandButtons handleClick={handleClick}/>
            <Equals handleClick={calculate}/>
            <AC handleClick={allClear}/>
        </main>
    )
}