
const initialState = [
    { 
        id:1,
        todo:'Recolectar la piedra del Alma',
        done:false
    }
]






const todoReducer = ( state = initialState, action = {}) => {
    if(action.type === 'ADD TODO'){
        return [...state, action.payload]
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id:2,
    todo:'Recolectar la piedra del Poder',
    done:false
}


const addTodoAction = {
    type:'ADD TODO',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction)

console.log(todos)