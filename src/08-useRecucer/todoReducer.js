


export const todoReducer = (initialState , action) => {
    switch (action.type) {
        case 'NEW_TODO':
            return [...initialState, action.payload];

        case 'DELETE_TODO':
            return initialState.filter( todo=> todo.id !== action.payload.id)

        default:
            return initialState;
    }
}