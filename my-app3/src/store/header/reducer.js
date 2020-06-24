import { changeSearchFocusedValue, getSearchList, mouseEnter, mouseLeave,changePage } from './actionTypes.js'
import { fromJS } from 'immutable'
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case changeSearchFocusedValue:
            return state.set('focused', action.data)

        case getSearchList:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })

        case mouseEnter:
            return state.set('mouseIn', true)

        case mouseLeave:
            return state.set('mouseIn', false)
        
        case changePage:
            return state.set('page', action.page)
        default: return state
    }

}