import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import HomeFeature from '../../static/image/home-feature.jpg'
import Topic from '../../components/home/topic'
import List from '../../components/home/list'
import Writter from '../../components/home/writter'
import Recommend from '../../components/home/recommend'
import { getHomeInfo, getMoreList } from '../../store/home/actionCreator'
class Home extends PureComponent {

    constructor() {
        super()
        this.handleScollTop = this.handleScollTop.bind(this)
    }
    handleScollTop () {
        window.scrollTo(0, 0)
    }
    componentDidMount () {
        this.props.getHomePageInfo()
    }
    componentWillUnmount () {

    }
    render () {
        const { topicList, articleList, recommendList, loadMore, page } = this.props
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src={HomeFeature} alt='' />
                    <Topic topicList={topicList}></Topic>
                    <List articleList={articleList} loadMore={() => loadMore(page)} />
                </HomeLeft>
                <HomeRight>
                    <Recommend recommendList={recommendList} />
                    <Writter />
                </HomeRight>
                <BackTop onClick={this.handleScollTop}>顶部</BackTop>
            </HomeWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        topicList: state.get('home').get('topicList'),
        articleList: state.get('home').get('articleList'),
        recommendList: state.get('home').get('recommendList'),
        page: state.get('home').get('page')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getHomePageInfo () {
            dispatch(getHomeInfo())
        },
        loadMore (page) {
            dispatch(getMoreList(page))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)