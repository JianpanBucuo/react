import { fromJS } from 'immutable'
import * as Constant from './actionTypes'
const defaultState = fromJS({
    title: '',
    content: " "
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case Constant.getDetailInfo:
            return state.merge({
                title: action.data.get('title'),
                content: action.data.get('content')
            })
        default: return state
    }
}