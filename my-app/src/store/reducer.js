import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'
const defaultState = {
    inputValue: '',
    list: ['1111']
}
export default (state = defaultState, action) => {
    console.log(state, action)
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''

        return newState
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = Object.assign({}, state)
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}