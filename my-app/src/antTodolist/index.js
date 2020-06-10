import React, {Component} from 'react'
import { Input } from 'antd';
import { Button } from 'antd'
import { List, Avatar } from 'antd';
import 'antd/dist/antd.css'
import store from '../store/index'
import Game from '../offical/Game'
 
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <Game ></Game>
                <Input  value={this.state.inputValue} placeholder='todo info' style={{width:'300px',marginTop:'30px', marginRight:'30px'}} />
                <Button type="primary">提交</Button>
                <List
                    style={{marginTop:'30px',width:'300px'}}
                    itemLayout="horizontal"
                    dataSource={this.state.list}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                    )}
                />,
            </div>
        )
    }
}
export default TodoList