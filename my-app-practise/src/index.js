import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const element = React.createElement('h1', { className: 'greeting' }, 'hee')
// ReactDOM.render(<App />, document.getElementById('root'))

function Welcome(props) {
  return <h1>111</h1>
}
class Welcome2 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
function App2(props) {
  return (
    <div>
      <Welcome />
      <Welcome2 />
    </div>
  )
}

function Clock(props) {
  return (
    <div>
      <h1>Hello world</h1>
      <h2>It is {props.data.toLocaleTimeString()}</h2>
    </div>
  )
}

class Children extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div onClick={this.props.onClick}>222</div>
  }
}
class Clock2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      timeID: null,
      value: '123'
    }
  }
  componentDidMount() {
    this.state.timeID = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.state.timeID)
  }
  tick = () => {
    this.setState({
      date: new Date()
    })
  }
  clickEvent = (id, e) => {
    console.log(id)
    console.log(e)
  }
  renderList = () => {
    const numbers = [1, 2, 3, 4, 5]
    const items = numbers.map((v) => {
      return <div>v</div>
    })
    return items
  }
  handleChange = (e) => {
    console.log(e)
    // e.persist()
    const value = e.target.value
    this.setState(() => {
      return {
        value: value
      }
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.value)
  }
  render() {
    return (
      <div>
        <h1 onClick={(e) => this.clickEvent('1', e)}>Hello, world!</h1>
        <Children onClick={() => this.clickEvent('2')}></Children>
        {this.renderList()}
        <form onSubmit={this.handleSubmit}>
          <label>
            名字：
            <input
              type="text"
              value={this.state.value}
              onChange={(e) => this.handleChange(e)}
            ></input>
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
