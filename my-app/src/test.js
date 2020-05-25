import React,{Component} from 'react'

class Test extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {content} = this.props
        // return (
            // <div>{ content}</div>
        // )
        return React.createElement('div',{},'aaa')
    }
}
export default Test