import * as constants from './constants';

const setInputTodo = (payload) => {
    return {
        type: constants.SET_TODO_INPUT,
        payload
    }
}

const setEditInputTodo = (payload) => {
    return {
        type: constants.SET_EDIT_TODO_INPUT,
        payload
    }
}

const addInputTodo = (payload) => {
    return {
        type: constants.ADD_TODO_INPUT,
        payload
    }
}

const removeInputTodo = (payload) => {
    return {
        type: constants.REMOVE_TODO_INPUT,
        payload
    }
}

const setIdEdit = (payload) => {
    return {
        type: constants.SET_ID_EDIT,
        payload
    }
}

const replaceTodo = (payload) => {
    return {
        type: constants.REPLACE_TODO,
        payload
    }
}

const setTodoComplete = (payload) => {
    return {
        type: constants.SET_TODO_COMPLETE,
        payload
    }
}

const setIdTodo = () => {
    return {
        type: constants.SET_ID_TODO
    }
}
export {
    setInputTodo,
    addInputTodo,
    removeInputTodo,
    setIdEdit,
    setEditInputTodo,
    replaceTodo,
    setTodoComplete,
    setIdTodo,
}