import React, { Component } from 'react'
import store from '../store/index'
import TodoListUI from './ui'
import { getInputChangeAction, addTodoItemAction, deleteTodoItemAction, getInitList } from '../store/actionCreators'
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    componentDidMount () {
        const action = getInitList()
        store.dispatch(action)

    }
    handleInputChange (e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleStoreChange () {
        this.setState(store.getState())
    }
    handleButtonClick () {
        console.log('aa')
        const action = addTodoItemAction()
        store.dispatch(action)
    }
    handleItemDelete (index) {
        console.log('in delete: ', index)
        const action = deleteTodoItemAction(index)
        store.dispatch(action)
    }
    render () {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleButtonClick={this.handleButtonClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }
}
export default TodoList