import React from 'react'
// import { CounterApp } from './01-useState/CounterApp'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import {Memorize} from './06-memos/Memorize'
import {MemoHook} from './06-memos/MemoHook'

export const HooksApp = () => {
    return (
        <>
            <div className='col-12 text-center'>
                {/* 
                <CounterApp/>
                <CounterWithCustomHook/>
                <SimpleForm/>
                <FormWithCustomHook/>
                <MultipleCustomHooks/> 
                <FocusScreen/>
                <Layout/>
                <Memorize/>
                */}
                <MemoHook/>
            </div>
        </> 
    )
}
