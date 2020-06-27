import headerReducer from './header/reducer'
import homeReducer from './home/reducer'
import detailReducer from './detail/reducer'
import { combineReducers } from 'redux-immutable'

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer
})