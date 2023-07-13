import {ReactElement} from "react";


// yes this is my first time using ts, have mercy

export default function Calculator(){

    const buttons = (): ReactElement[] => {
        return new Array(10).fill(0).map((el : number, i : number): ReactElement => {
            return <button key={`btn-${i}`} className={'calculator-btn'} id={`btn-${i}`}>{i}</button>
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