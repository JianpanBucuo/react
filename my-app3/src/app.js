import React, { Component, Fragment } from 'react'
import { GlobalStyle } from './style.js'
import { GlobalFontStyle } from './static/font/iconfont'
import Header from './common/header'
import Store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home/index'
import Detail from './pages/detail/index'
class App extends Component {
    render () {
        return (
            <Fragment>
                <GlobalStyle />
                <GlobalFontStyle />
                <Provider store={Store}>
                    <Header></Header>
                    <BrowserRouter>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/detail' component={Detail}></Route>
                    </BrowserRouter>
                </Provider>
            </Fragment>

        )
    }
}
export default App