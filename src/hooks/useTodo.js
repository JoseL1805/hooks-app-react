import React, { useEffect, useReducer, useState } from 'react'
import { todoReducer } from './../08-useRecucer/todoReducer'


const init = () => {
    return JSON.parse( localStorage.getItem('todos') || '[]')
}


export const useTodo = () => {
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

    const onHandleToggleTodo = (id) =>{
        dispatchTodo({
            type: 'UPDATE_TODO',
            payload: {id}
        });
        
    }
    return {
        onHandleToggleTodo,
        handleDeleteTodo,
        handleNewTodo,
        todos
    }
}