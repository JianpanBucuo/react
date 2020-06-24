import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import HomeFeature from '../../static/image/home-feature.jpg'
import Topic from '../../components/home/topic'
import List from '../../components/home/list'
import Writter from '../../components/home/writter'
import Recommend from '../../components/home/recommend'
class Home extends Component {
    render () {
        const { topicList, articleList,recommendList } = this.props
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src={HomeFeature} alt='' />
                    <Topic topicList={topicList}></Topic>
                    <List articleList={articleList} />
                </HomeLeft>
                <HomeRight>
                    <Recommend recommendList={recommendList} />
                    <Writter />
                </HomeRight>
            </HomeWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        topicList: state.get('home').get('topicList'),
        articleList: state.get('home').get('articleList'),
        recommendList: state.get('home').get('recommendList')
    }
}
const mapDispatchToProps = (props) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)