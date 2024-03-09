import { useState } from 'react'
import { useCounter} from './../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter()
    const [{sum, res}, setValues] = useState({
        sum: 1,
        res: 1
    })

    return (
        <>
            <h2 className="mt-5">Counter With Custom Hook : {counter} </h2>
            <hr />

            <button onClick={ () => decrement(res) } className="btn btn-success ">-{res}</button>
            <button onClick={ reset } className="btn btn-success ">Reset</button>
            <button onClick={ () => increment(sum) } className="btn btn-success ">{sum}</button>

        </>
    )
}
