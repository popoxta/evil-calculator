import Calculator from "./components/Calculator.tsx";
import EvilSelector from "./components/EvilSelector.tsx";
import {useState} from "react";

function App() {
    const [evil, setEvil] = useState({name: '', value: ''})
    const [showEvil, setShowEvil] = useState(true)

    const evilOptions = [
        {name: 'You dropped a 2', value: '+2'},
        {name: '95% it all', value: '* 0.95'},
        {name: 'Summer of \'69', value: '1969'},
        {name: 'All is 42', value: '42'},
        {name: 'Infinity nightmare', value: '/0'},
        {name: 'Jerma', value: '+985'},
        {name: 'Randomizer', value: ''}
    ]

    function handleSetEvil(newEvil): void {
        setShowEvil(false)
        if (newEvil === null) return
        setEvil(newEvil)
    }

    return (
        <div className={'container'}>
            <div className={'header'}>
                <h2>Another</h2>
                <h1>Ordinary Calculator.</h1>
                <h2>Seriously.</h2>
            </div>
            {showEvil && <EvilSelector handleClick={handleSetEvil} evilOptions={evilOptions}/>}
            <Calculator evil={evil}/>
        </div>
    )
}

export default App
