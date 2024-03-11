import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef()

    const onClick = () => {
        inputRef.current.select();
    }


    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <div className="col-12 text-center d-flex aling-items-center justify-content-center">
                    <div className="col-6">
                        <input className='form-control' 
                            ref={inputRef}
                            type="text" 
                            name="nombre" 
                            id="nombre" 
                            placeholder='Ingresa tu nombre' />

                        <button onClick={onClick} className=' mt-3 btn btn-success'>Set Focus</button>
                    </div>
            </div>
        </>
    )
}
