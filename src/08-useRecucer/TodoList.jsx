import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], onDeleteTodo, onHandleToggleTodo }) => {
    return (
        <ul className='text-start list-group'>
            {
                todos.map( (todo) =>{
                    return (
                        <TodoItem  onToggleTodo={onHandleToggleTodo} key={todo.id} {...todo} onDeleteTodo={onDeleteTodo} />
                    )
                })
            }
        </ul>
    )
}
