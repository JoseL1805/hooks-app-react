import React, { useLayoutEffect, useRef, useState } from 'react'

export const PokemonCard = ({ id, name, sprites = []}) => {

    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0})

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect() 

        setBoxSize({width, height});
    }, [id])


    return (
        <>
        

        <section style={{ height: 200 }}>
            <div className='tetx-center  aling-items-center justify-content-center' style={{ display: 'flex', maxWidth: '100%'}}>
            <p style={{ flexShrink: 0 }} ref={pRef} className='text-capitalize'> #{id} - {name}</p>
            </div>
            <div className='col-12'>
                    { sprites.map( (elemento)=>{
                        return <img  key={crypto.randomUUID()} src={elemento} alt="" height={80}/>
                    })}
            </div>
        </section>

        <code>
            {JSON.stringify(boxSize)}
        </code>
        </>

    )
}
