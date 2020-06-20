import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST_SAGA } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* getInitList () {
    console.log('abc')
    const res = yield axios.get('/list.json')
    const data = res.data
    const action = initListAction(data)
    yield put(action)
}
// generator函数
function* mySaga () {
    yield takeEvery(GET_INIT_LIST_SAGA, getInitList)

}

export default mySaga;