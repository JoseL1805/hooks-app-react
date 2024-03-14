import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], onDeleteTodo }) => {
    return (
        <ul className='text-start list-group'>
            {
                todos.map( (todo) =>{
                    return (
                        <TodoItem  key={todo.id} {...todo} onDeleteTodo={onDeleteTodo} />
                    )
                })
            }
        </ul>
    )
}
