import React, { Component } from 'react'
import { ToipicWrapper, TopicItem } from './style'
class Topic extends Component {

    getItem () {
        const { topicList } = this.props
        const allItem = topicList.toJS().map(v => {
            return (
                <TopicItem key={v.id}>
                    <img src={v.imgSrc} alt='' />
                    {v.title}
                </TopicItem>
            )
        })
        return allItem

    }
    render () {
        return (
            <ToipicWrapper>
                {this.getItem()}
            </ToipicWrapper>
        )
    }
}
export default Topic