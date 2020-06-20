import React
    // , 
    // { Component }
    from 'react'
import { Input } from 'antd'
import { Button } from 'antd'
import { List, Avatar } from 'antd'
import 'antd/dist/antd.css'

const TodoListUI2 = (props) => {
    return (
        <div>
            <Input value={props.inputValue} placeholder='todo info' style={{ width: '300px', marginTop: '30px', marginRight: '30px' }} onChange={props.handleInputChange} />
            <Button type="primary" onClick={props.handleButtonClick}>提交</Button>
            <List
                style={{ marginTop: '30px', width: '300px' }}
                itemLayout="horizontal"
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => props.handleItemDelete(index)}>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item}

                        />
                    </List.Item>
                )}
            />,
</div>
    )
}

// class TodoListUI extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render () {
//         return (
//             <div>
//                 <Input value={this.props.inputValue} placeholder='todo info' style={{ width: '300px', marginTop: '30px', marginRight: '30px' }} onChange={this.props.handleInputChange} />
//                 <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>
//                 <List
//                     style={{ marginTop: '30px', width: '300px' }}
//                     itemLayout="horizontal"
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (
//                         <List.Item onClick={index => this.props.handleItemDelete(index)}>
//                             <List.Item.Meta
//                                 avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
//                                 title={<a href="https://ant.design">{item.title}</a>}
//                                 description={item}

//                             />
//                         </List.Item>
//                     )}
//                 />,
//         </div>
//         )
//     }
// }
export default TodoListUI2