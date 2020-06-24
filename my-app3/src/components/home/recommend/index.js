import React, { Component } from 'react'
import { RecommonedWrapper, RecommonedItem } from './style'

class Recommonend extends Component {
    render () {
        const { recommendList } = this.props
        const listAll = recommendList.toJS().map(v => {
            return <RecommonedItem imgUrl={v.imgSrc}></RecommonedItem>
        })
        return (
            <RecommonedWrapper>
                {listAll}
            </RecommonedWrapper>
        )
    }
}
export default Recommonend