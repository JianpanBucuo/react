import React, { Component, Fragment } from 'react'
import './app.css'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
        this.handleToggle = this.handleToggle.bind(this)
    }
    handleToggle () {
        this.setState({
            show: !this.state.show
        })
    }
    render () {
        return (
            <Fragment>
                <div className={this.state.show ? 'show' : 'hide'}>hello</div>
                <button onClick={this.handleToggle}>toggle</button>
            </Fragment>

        )
    }

}
export default App