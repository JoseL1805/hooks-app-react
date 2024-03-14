import React from 'react'
import {useForm} from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {

    const {description, onInputChance, onResetForm} = useForm({
        description : ''
    })

    const onFormSubmit = (event) => {
        event.preventDefault()
        if(description.trim() === '') return;

        const newTodo = {
            id: crypto.randomUUID(),
            description,
            done: false
        }

        onNewTodo(newTodo)
        onResetForm()
    }
    
    return (
        <form onSubmit={ onFormSubmit }>
            <input 
                onChange={(e)=> onInputChance(e)}
                type="text" 
                name="description" 
                value={ description }
                placeholder='Agregar TODO'
                className='form-control'
                id="" />

            <input className='btn btn-success mt-3 col-12'
                type="submit" 
                value="Agregar" />
        </form>
    )
}
