import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from './../03-examples/LoadingMessage';
import { PokemonCard } from './../03-examples/PokemonCard';

export const Layout = () => {

    const  { counter, decrement,increment} = useCounter(1);
    const { data, isLoading, hasError, error }  = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

    return (
        <>  
            <hr /> 
            <h3 className='mt-5'>useForm Custom Hook</h3>
            <h1 className='mt-3'>Información de Pokémon</h1>

            { isLoading ? <LoadingMessage/> : <PokemonCard id={data.id} name={data.name} sprites={[ data.sprites.front_default, data.sprites.front_shiny, data.sprites.back_default, data.sprites.back_shiny]} />}
            
            <div className='col-12'>
                <button onClick={ () => counter > 1 && decrement()} className='btn btn-success'>Anterior</button>
                <button onClick={ ()=> increment() } className='btn btn-success'>Siguiente</button>
            </div>
        </>
    )
}
