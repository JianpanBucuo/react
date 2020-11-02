import axios from 'axios'
import { fromJS } from 'immutable'
import * as Constant from './actionTypes'
export const getDetailInfoAction = (data) => {
    return {
        type: Constant.getDetailInfo,
        data
    }
}
export const getDetail = (id) => {
    return async (dispatch) => {
        const result = await axios.get('/detail.json?id=' + id)
        dispatch(getDetailInfoAction(fromJS(result.data.data)))
    }
}