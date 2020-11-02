import React, { Component } from 'react'
import PropTypes from 'prop-types'
import pathToRegexp from 'path-to-regexp'

export default class Route extends Component {
    static contextTypes = {
        location: PropTypes.object,
        history: PropTypes.object
    }
    render () {
        let { path, component: Component, render, children } = this.props
        let { location, history } = this.context
        let props = {
            location,
            history
        }
        // 
        let keys = []
        let regexp = pathToRegexp(path, keys, { end: false })
        keys = keys.map(key => key.name)

        let result = location.pathname.match(regexp)
        if (result) { // 匹配上了
            let [url, ...values] = result
            props.match = {
                path,
                url,
                params: keys.reduce((memo, key, index) => { // 获取匹配到的参数
                    memo[key] = values[index]
                    return memo
                }, {})
            }
            if (Component) { // 普通的Route
                return <Component {...props} />
            } else if (render) { // 特定逻辑的渲染
                return render(props)
            } else if (children) { // MenuLink的渲染
                return children(props)
            } else {
                return null
            }
        } else {
            if (children) { // MenuLink的渲染
                return children(props)
            } else {
                return null
            }
        }
    }
}