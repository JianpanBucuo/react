import {
    createStore, applyMiddleware, compose
} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga'
// import TodoSagas from './sagas'
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose


// redux-thunk中间件
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);



// redux-saga 中间件
// const sageMiddleware = createSagaMiddleware()
// const enhancer = composeEnhancers(
//     applyMiddleware(sageMiddleware),
//     // other store enhancers if any
// );
const store = createStore(reducer, enhancer)
// sageMiddleware.run(TodoSagas)
export default store