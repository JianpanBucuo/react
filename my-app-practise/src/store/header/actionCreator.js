import { changeSearchFocusedValue, getSearchList, mouseEnter, mouseLeave, changePage } from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'
export const changeSearchFocusedAction = (data) => {
    return {
        type: changeSearchFocusedValue,
        data
    }
}
export const mouseEnterAction = () => {
    return {
        type: mouseEnter
    }
}
export const mouseLeaveAction = () => {
    return {
        type: mouseLeave
    }
}
export const getList = () => {
    return async (dispatch) => {
        const res = await axios.get('/api/headerlist.json')
        dispatch(getListAction(res.data))
    }
}
export const changePageAction = (page) => {
    return {
        type: changePage,
        page
    }
}
const getListAction = (data) => {
    return {
        type: getSearchList,
        data: fromJS(data),
        totalPage: Math.ceil(data.length / 10)
    }
}
