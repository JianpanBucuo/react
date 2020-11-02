import React, { Component, Fragment } from 'react'

export default class Refs extends Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
  }
  render() {
    return (
      <Fragment>
        <input type="text" ref={this.textInput}></input>
        <button onClick={this.focusTextInput}>Focus on input</button>
      </Fragment>
    )
  }
  componentDidMount() {
    const node = this.textInput.current
  }
  focusTextInput() {
    this.textInput.current.focus()
  }
}
class AutoFocusTextInput extends Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }
  componentDidMount() {
    this.textInput.current.focusTextInput()
  }
  render() {
    return <Refs ref={this.textInput}></Refs>
  }
}
