import {MouseEventHandler, ReactElement} from "react";

export default function OperandButtons({handleClick}: {handleClick: MouseEventHandler<HTMLButtonElement>}) {
    const operands: string[] = ['/', '*', '-', '+', '.']

    const operandButtons: ReactElement[] = operands.map(
        (op: string, i: number): ReactElement => {
            return (
                <button
                    key={`btn-${op}`}
                    className={`operand-${i} calculator-btn`}
                    id={op}
                    onClick={handleClick}>
                    {op}
                </button>
            )
        }
    )

    return operandButtons

}