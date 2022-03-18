import {
    SET_TODO_INPUT,
    ADD_TODO_INPUT,
    REMOVE_TODO_INPUT,
    SET_ID_EDIT,
    SET_EDIT_TODO_INPUT,
    REPLACE_TODO,
    SET_TODO_COMPLETE,
    SET_ID_TODO,
} from "./constants"

const initState = {
    inputTodo: '',
    todos: [],
    idTodo: 1,
    idEdit: null,
    inputEditTodo: '',
    listComplete: [],
}

const reducer = (state, action) => {
    const {type, payload} = action
    switch(type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                inputTodo: payload
            }
        case ADD_TODO_INPUT:
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case REMOVE_TODO_INPUT:
            const newTodos = state.todos.filter(todo => todo.id !== payload)
            return {
                ...state,
                todos: newTodos,
            }
        case SET_ID_EDIT:
            return {
                ...state,
                idEdit: payload
            }
        case SET_EDIT_TODO_INPUT:
            return {
                ...state,
                inputEditTodo: payload
            }
        case SET_TODO_COMPLETE:
            let newListComplete;
            if(state.listComplete.includes(payload)) {
                newListComplete = state.listComplete.filter(item => item !== payload)
            } else {
                newListComplete = [...state.listComplete, payload]
            }
            return {
                ...state,
                listComplete: newListComplete
            }
        case REPLACE_TODO:
            const [todoUpdate] = state.todos.filter(todo => todo.id === payload.id)
            todoUpdate.title = payload.valueReplace
            return {
                ...state,
                todos: [...state.todos]
            }
        case SET_ID_TODO: 
            return {
                ...state,
                idTodo: state.idTodo + 1      
            }
        default: 
            throw new Error(`Invalid action ${action}`)
    }
}

export { initState }
export default reducer