import React, {Component} from 'react'
class LoginControll extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
        }
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }
    handleLoginClick() {
        this.setState(() => ({
            isLogin: false
        }))
    }
    handleLogoutClick() {
        this.setState({
            isLogin: true
        })
    }
    render() {
        const isLogin = this.state.isLogin
        let btn
        if(isLogin) {
            btn = <button onClick={this.handleLoginClick}>登录</button>       
        } else {
            btn = <button onClick = {this.handleLogoutClick}>退出</button>
        }
        return (
            <div>
            {btn}

            </div>
        )
    }
 }
 export default LoginControll