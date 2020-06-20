import React, { Component, Fragment } from "react";
import TodoItem from './todoitem'
import './style.css'
import Axios from "axios";
import store from './store/index'
class TodoList extends Component {
    constructor(props) {
        super(props)
        console.log(store.getState())
        // 当组件的state和prop发生改变的时候，render函数将会重新执行
        this.state = {
            inputValue: 'hello',
            list: ['1', '2']
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }
    handleInputChange (e) {
        // this.setState({
        //     inputValue:e.target.value
        // })
        const value = e.target.value
        this.setState(() => (
            {
                inputValue: value
            }
        ))
    }
    handleButtonClick (e) {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }), () => {
            console.log(this.ul.querySelectorAll('div').length)
        })

    }
    handleItemDelete (index, e) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
    getTodoItem () {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={index}
                    index={index}
                    content={item}
                    deleteItem={this.handleItemDelete}
                />
            )
        })
    }
    componentWillMount () {
    }
    componentDidMount () {
        Axios.get('/list.json').then((res) => {
            console.log(res.data)
            this.setState(() => {
                return {
                    list: res.data
                }
            })
        })
    }

    shouldComponentUpdate () {
        return true
    }
    componentWillUpdate () {
    }
    componentDidUpdate () {
    }
    render () {
        return (
            <Fragment>
                <h3>TodoList</h3>
                {
                    /* 
                    这是注释内容 
                    */
                    //单行注释
                }
                <label htmlFor='insertArea'>输入内容</label>
                <input
                    id="insertArea"
                    type='text'
                    className='input'
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    ref={(input) => { this.input = input }}
                />
                <button onClick={this.handleButtonClick}>提交</button>
                <ul ref={(ul) => { this.ul = ul }}>
                    <li>Learning React</li>
                    {
                        this.getTodoItem()
                    }
                </ul>
            </Fragment>
        )
    }
}
export default TodoList