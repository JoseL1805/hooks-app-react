import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const { username, email ,password, onInputChance, onResetForm } = useForm({
        username: '',
        email:'',
        password:''
    })

    return (
        <>
            <h1 className='mt-5'>Formulario With Custom Hook</h1>
            <hr />

            <input type="text" 
                    onChange={onInputChance} 
                    className='form-control' 
                    placeholder='username' 
                    name='username' 
                    value={username}/>


            <input type="email" 
                    onChange={onInputChance} 
                    className='form-control mt-3' 
                    placeholder='email' 
                    name='email' 
                    value={email}/>


            <input type="password" 
                    onChange={onInputChance} 
                    className='form-control mt-3' 
                    placeholder='password' 
                    name='password' 
                    value={password}/>

            <button onClick={onResetForm} className='btn btn-primary mt-2'>Borrar</button>
        
        </>
    )
}
