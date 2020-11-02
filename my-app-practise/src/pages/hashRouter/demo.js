import React, { Component } from 'react'

export default class Parent extends Component {
  render() {
    return (
      <Child>
        <span>111</span>
      </Child>
    )
  }
}

class Child extends Component {
  render() {
    console.log(this.props.children)
    return <div>{this.props.children}</div>
  }
}
