import React, { Component } from 'react'
import { Input } from 'antd'
import { Button } from 'antd'
import { List, Avatar } from 'antd'
import 'antd/dist/antd.css'
import store from '../store/index'
// import Game from '../offical/Game'
import {
  getInputChangeAction,
  addTodoItemAction,
  deleteTodoItemAction
} from '../store/actionCreators'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleButtonClick() {
    console.log('aa')
    const action = addTodoItemAction()
    store.dispatch(action)
  }
  handleItemDelete(index) {
    console.log('in delete: ', index)
    const action = deleteTodoItemAction(index)
    store.dispatch(action)
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        {/* <Game ></Game> */}
        <Input
          value={this.state.inputValue}
          placeholder="todo info"
          style={{ width: '300px', marginTop: '30px', marginRight: '30px' }}
          onChange={this.handleInputChange}
        />
        <Button type="primary" onClick={this.handleButtonClick}>
          提交
        </Button>
        <List
          style={{ marginTop: '30px', width: '300px' }}
          itemLayout="horizontal"
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={(index) => this.handleItemDelete(index)}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description={item}
              />
            </List.Item>
          )}
        />
        ,
      </div>
    )
  }
}
export default TodoList
