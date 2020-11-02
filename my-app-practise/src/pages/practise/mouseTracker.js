import React, { Component, Fragment } from 'react'

class Mouse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }
  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }
  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        <p>
          当前鼠标的位置是 {this.state.x}, {this.state.y}.
        </p>
      </div>
    )
  }
}
export default class MouseTracker extends Component {
  render() {
    return (
      <Fragment>
        <h1>移动鼠标</h1>
        <Mouse></Mouse>
      </Fragment>
    )
  }
}
