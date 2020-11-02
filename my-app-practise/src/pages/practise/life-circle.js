import { render } from '@testing-library/react'
import React, { Component } from 'react'
const DataSource = {}
function withSubscription(wrappedComponent, selectData) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.state = {
        data: selectData(DataSource, props)
      }
    }
    componentDidMount() {}
  }
}

const Button = (props) => {
  const { kind, ...other } = props
  const className = kind === 'primary' ? 'primaryBtn' : 'secondBtn'
  return <button className={className} {...other}></button>
}
