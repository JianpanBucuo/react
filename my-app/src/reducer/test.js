import {
    createStore
} from 'redux'

const defaultState = [{
    text: 'Eat food',
    completed: true
}, {
    text: 'Exercise',
    completed: false
}]



function todos(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([{
                text: action.text,
                completed: false
            }])
        case 'TOGGLE_TODO':
            return state.map((todo, index) =>
                action.index === index ? {
                    text: todo.text,
                    completed: !todo.completed
                } : todo
            )
        default:
            return state
    }
}