import axios from 'axios'
import { fromJS } from 'immutable'
import { getHomeListType, loadMoreType } from './actionTypes'
export const getHomeInfo = () => {
    return async (dispatch) => {
        const resData = await axios.get('/home.json')
        console.log(resData)
        dispatch(getHomeInfoAction(resData.data.data))
    }
}

const getHomeInfoAction = (data) => {
    return {
        type: getHomeListType,
        data: fromJS(data)
    }
}
export const getMoreList = (page) => {
    return async (dispatch) => {
        const resData = await axios.get('/list.json?page=' + page)
        console.log(resData)
        dispatch(loadMoreAction(resData.data.data, page + 1))
    }
}
const loadMoreAction = (data, nextPage) => {
    return {
        type: loadMoreType,
        data: fromJS(data),
        nextPage
    }
}