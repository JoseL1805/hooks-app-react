import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {
  const [counter, setCounter] = useState(0)

  const incrementFather = useCallback(
    () => {
        setCounter( (value) => value + 1)
    },
    [],
  )
  return (
    <>
      <h1> UseCallBack Hook : {counter } </h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  )
}
