import React, { Component } from 'react'

class Test extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        const { content } = this.props

        return React.createElement('div', {}, 'aaa')
    }
}
export default Test