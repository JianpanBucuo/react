import React, { PureComponent } from 'react'
import { RecommonedWrapper, RecommonedItem } from './style'

class Recommonend extends PureComponent {
    render () {
        const { recommendList } = this.props
        const listAll = recommendList.toJS().map(v => {
            return <RecommonedItem key={v.id} imgUrl={v.imgSrc}></RecommonedItem>
        })
        return (
            <RecommonedWrapper>
                {listAll}
            </RecommonedWrapper>
        )
    }
}
export default Recommonend