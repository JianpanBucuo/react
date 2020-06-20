import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST, GET_INIT_LIST_SAGA } from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => (
    {
        type: CHANGE_INPUT_VALUE,
        value
    }
)

export const addTodoItemAction = () => (
    {
        type: ADD_TODO_ITEM
    }
)
export const deleteTodoItemAction = (index) => {
    return {
        type: DELETE_TODO_ITEM,
        index
    }
}
export const initListAction = (data) => {
    return {
        type: INIT_LIST,
        data
    }
}

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/list.json').then(res => {
            const action = initListAction(res.data)
            dispatch(action)

        })
    }
}

export const getInitList = (data = []) => {
    return {
        type: GET_INIT_LIST_SAGA
    }
}