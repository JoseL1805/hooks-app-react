import React from 'react'

export const TodoItem = ({id, description, onDeleteTodo}) => {
    return (
        <li key={id} className='list-group-item d-flex justify-content-between'>
            <span className='align-self-center'>{description}</span>
            <button onClick={ () => onDeleteTodo(id)} className='btn btn-danger'>Eliminar</button>
        </li>
    )
}
