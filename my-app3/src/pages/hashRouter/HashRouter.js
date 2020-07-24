import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HashRouter extends Component {
    constructor() {
        super()
        this.state = {
            location: {
                pathname: window.location.hash.slice(1) || '/',
                state: {}
            }
        }
    }
    static childldContextTypes = {
        location: PropTypes.object,
        history: PropTypes.object
    }
    getChildContext () {
        return {
            location: this.state.location,
            history: {
                push: path => {
                    if (typeof path === 'object') {
                        let { pathname, state } = path
                        this.setState({
                            location: {
                                ...this.state.location, state
                            }
                        }, () => {
                            window.location.hash = pathname
                        })
                    } else {
                        window.location.hash = path
                    }
                }
            }
        }
    }
    render () {
        return this.props.children
    }
    componentDidMount () {
        window.location.hash = window.location.hash.slice(1) || '/'
        window.addEventListener('hashchange', () => {
            this.setState({
                location: {
                    ...this.state.location,
                    pathname: window.location.hash.slice(1) || '/'
                }
            })
        })
    }
}
