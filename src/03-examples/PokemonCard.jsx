import React from 'react'

export const PokemonCard = ({ id, name, sprites = []}) => {

    console.log(sprites)
    return (
        <section style={{ height: 200 }}>
            <h2 className='text-capitalize'> #{id} - {name}</h2>
            <div className='col-12'>
                    { sprites.map( (elemento)=>{
                        return <img  key={crypto.randomUUID()} src={elemento} alt="" height={80}/>
                    })}
            </div>
        </section>
    )
}
