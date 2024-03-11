import React, { useEffect, useState } from 'react'
import {Message} from './Message'
export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'jose',
        email:'jose@correo.com'
    })

    const { username, email } = formState;
    

    const onInputChance = ({target}) => {
        const { name,value } = target;
        setFormState({...formState, [name]: value })
    }


    useEffect(() => {
        console.log("useEfect called!")
    }, [])


    useEffect(() => {
        console.log("username changed!")
    }, [username])


    useEffect(() => {
        console.log("email changed!")
    }, [email])



    

    return (
        <>
            <h1 className='mt-5'>Formulario Simple</h1>
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


            { (username === 'jose2') && <Message/>}
        
        </>
    )
}
