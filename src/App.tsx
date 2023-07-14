import Calculator from "./components/Calculator.tsx";
import EvilSelector from "./components/EvilSelector.tsx";
import {useState} from "react";

function App() {
    const [evil, setEvil] = useState({name: '', value: ''})

    const evilOptions = [
        {name: 'You dropped a 2', value: '+2'},
        {name: '95% it all', value: '* 0.95'},
        {name: 'Summer of \'69', value: '1969'},
        {name: 'All is 42', value: '42'},
        {name: 'Infinity nightmare', value: '/0'},
        {name: 'Jerma', value: '+985'},
        {name: 'Randomizer', value: ''}
    ]

    function handleSetEvil(newEvil) {
        if (newEvil === false) return
        setEvil(newEvil)
    }

    return (
        <>
            <h1>Test</h1>
            <EvilSelector handleClick={handleSetEvil} evilOptions={evilOptions}/>
            <Calculator evil={evil}/>
        </>
    )
}

export default App
