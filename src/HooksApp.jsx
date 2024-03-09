import React from 'react'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
export const HooksApp = () => {
  return (
    <>
    
        <div className='col-12 text-center'>
            <CounterApp/>
            <CounterWithCustomHook/>
        </div>
    </> 
  )
}
