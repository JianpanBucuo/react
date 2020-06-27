import React, { PureComponent, Fragment } from 'react'
import { GlobalStyle } from './style.js'
import { GlobalFontStyle } from './static/font/iconfont'
import Header from './common/header'
import Store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home/index'
import Detail from './pages/detail/loadable'
// import Detail from './pages/detail/index'
class App extends PureComponent {
    render () {
        return (
            <Fragment>
                <GlobalStyle />
                <GlobalFontStyle />
                <Provider store={Store}>
                    <BrowserRouter>
                        <Header></Header>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/detail/:id' component={Detail}></Route>
                    </BrowserRouter>
                </Provider>
            </Fragment>

        )
    }
}
export default App