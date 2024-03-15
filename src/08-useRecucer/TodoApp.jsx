import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

import {useTodo} from './../hooks/useTodo'


export const TodoApp = () => {

    const {todos, handleDeleteTodo, handleNewTodo, onHandleToggleTodo } = useTodo();
    
    return (
        <>
            <h1>Todo App useReducer: (10)  <small>pendientes: 2</small></h1>
            <hr />


            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={ handleDeleteTodo } onHandleToggleTodo={onHandleToggleTodo}/>
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
