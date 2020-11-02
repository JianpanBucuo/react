import { fromJS } from 'immutable'
import * as constant from './actionTypes'
const defaultState = fromJS({
    topicList: [],
    articleList: [
    ],
    page: 1,
    recommendList: [
    ]
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case constant.getHomeListType:
            return state.merge({
                topicList: action.data.get('topicList'),
                articleList: action.data.get('articleList'),
                recommendList: action.data.get('recommendList')
            })
        case constant.loadMoreType:
            return state.merge({
                page: action.nextPage,
                articleList: state.get('articleList').concat(action.data.get('articleList'))
            })
        default: return state
    }
}