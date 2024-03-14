import React, { useEffect, useReducer, useState } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'



const init = () => {
    return JSON.parse( localStorage.getItem('todos') || '[]')
}


export const TodoApp = () => {
    const initialState = []

    const [ todos , dispatchTodo ] = useReducer( todoReducer , initialState , init)


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) )
    }, [todos])

    const handleNewTodo  = (newTodo) =>{
        dispatchTodo({
            type: 'NEW_TODO',
            payload: newTodo
        });
    }


    const handleDeleteTodo = ( id ) => {
        dispatchTodo({
            type: 'DELETE_TODO',
            payload: {id}
        });
    }

    return (
        <>
            <h1>Todo App useReducer: (10)  <small>pendientes: 2</small></h1>
            <hr />


            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={ handleDeleteTodo }/>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo }/>
                </div>
            </div>




        </>
    )
}
