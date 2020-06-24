import React, { Component, Fragment } from 'react'
import { ListItem, ListInfo } from './style'
class List extends Component {
    render () {
        const { articleList } = this.props
        const allListItem = articleList.toJS().map(v => {
            return (
                <ListItem key={v.id}>
                    <img src={v.imgSrc} alt='' />
                    <ListInfo>
                        <h3>{v.title}</h3>
                        <p>{v.desc}</p>
                    </ListInfo>
                </ListItem>
            )
        })
        return (
            <Fragment>
                {allListItem}
            </Fragment>
        )
    }
}
export default List