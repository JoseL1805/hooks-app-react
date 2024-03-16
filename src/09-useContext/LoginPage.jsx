import React, { useContext, useEffect } from 'react'
import { UserContext } from './../09-useContext/context/UserContext'


export const LoginPage = () => {

    const { user } = useContext( UserContext )
    
    return (
        <>
            <h1>LoginPage</h1>
            <pre>
                {JSON.stringify(user)}
            </pre>
        </>
    )
}
