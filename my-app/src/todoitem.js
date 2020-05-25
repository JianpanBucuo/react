import React ,{Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        const {index,deleteItem} = this.props 
        deleteItem(index,e)
    }
    componentWillReceiveProps() {
    }
    componentWillUnmount() {
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content) {
            return true
        }
        return false
    }
    render() {
        console.log('todoitem render')
        const {content} = this.props;
        return(
            <div onClick={this.handleClick}>{content}</div>
        )
    }
}
TodoItem.defaultProps = {
    content:'1111'
}
TodoItem.propTypes  = {
    content:PropTypes.string.isRequired,
    deleteItem:PropTypes.func.isRequired,
    index:PropTypes.number.isRequired
}


export default TodoItem