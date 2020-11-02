import React, { PureComponent, Fragment } from 'react'
import { ListItem, ListInfo, LoadMore } from './style'
import { Link } from 'react-router-dom'
class List extends PureComponent {
    render () {
        const { articleList } = this.props
        const allListItem = articleList.toJS().map((v, i) => {
            return (
                <Link style={{ textDecoration: 'none' }} key={i} to={'/detail/' + v.id}>
                    <ListItem>
                        <img src={v.imgSrc} alt='' />
                        <ListInfo>
                            <h3>{v.title}</h3>
                            <p>{v.desc}</p>
                        </ListInfo>
                    </ListItem>
                </Link>
            )
        })
        return (
            <Fragment>
                {allListItem}
                <LoadMore onClick={this.props.loadMore}>更多文字</LoadMore>
            </Fragment>
        )
    }
}
export default List