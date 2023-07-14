import {ReactElement} from "react";

export default function OperandButtons({handleClick}) {

    const operands: string[] = ['+', '-', '*', '/', '.']
    const operandButtons = operands.map(
        (op: string): ReactElement => {
            return (
                <button
                    key={`btn-${op}`}
                    className={'operand-btn'}
                    id={op}
                    onClick={handleClick}>
                    {op}
                </button>
            )
        }
    )

    return (
        <div className={'calculator-operands'}>
            {operandButtons}
        </div>
    )
}