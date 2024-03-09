import { useState } from "react"

export const CounterApp = () => {
    const [ state, setCounter ] = useState({
        counter_uno : 10,
        counter_dos: 20,
        counter_tres: 30
    })

    const {counter_uno, counter_dos, counter_tres} = state;

    const sum = () => {
        setCounter({...state, counter_uno: counter_uno + 1 })
        // ()=> setCounter(counter + 1)
    }

    return (
        <>
            <h2>Counter: {counter_uno}</h2>
            <hr />

            <button onClick={ sum } className="btn btn-success">+1</button>
            <button onClick={ () => {setCounter({...state, counter_uno: 0 })} } className="btn btn-success">Reset</button>
        </>
    )
}
