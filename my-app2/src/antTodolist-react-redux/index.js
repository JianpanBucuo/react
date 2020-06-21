import React, {Component} from 'react'
// import store from '../store/index'
import {connect} from 'react-redux'
import {getInputChangeAction,addTodoItemAction} from '../store/actionCreators'
class TodoList extends Component {
    constructor(props) {
        super(props)
        // this.state = store.getState()
     
    }
    getItem() {
        console.log(this.props.dispatch)
        return  this.props.list.map((v,i) => {
            return (
                <li key={i}>{v}</li>
            )
        })
         
    }
    render() {
        return (
            <div>
                <input value={this.props.inputValue} onChange={this.props.changeInputValue}></input>
                <button onClick={this.props.handleClick}> 提交</button>
                <ul>
                {this.getItem()}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
// store.dispatch -> props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            console.log('in')
            dispatch(getInputChangeAction(e.target.value))
        },
        handleClick() {
            dispatch(addTodoItemAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)