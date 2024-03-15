import React from 'react'

export const TodoItem = ({id, done, description, onDeleteTodo, onToggleTodo}) => {
    return (
        <li key={id} className='list-group-item d-flex justify-content-between'>
            <span  onClick={ ()=> onToggleTodo(id)} className={`align-self-center  ${ (done ) ? 'text-decoration-line-through' : ''}`}>{description}</span>
            <button onClick={ () => onDeleteTodo(id)} className='btn btn-danger'>Eliminar</button>
        </li>
    )
}
