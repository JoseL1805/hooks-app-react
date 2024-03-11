import React from 'react'
import { CounterApp } from './01-useState/CounterApp'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

export const HooksApp = () => {
  return (
    <>
    
        <div className='col-12 text-center'>
            <CounterApp/>
            <CounterWithCustomHook/>
            <SimpleForm/>
            <FormWithCustomHook/>
            <MultipleCustomHooks/>
        </div>
    </> 
  )
}
