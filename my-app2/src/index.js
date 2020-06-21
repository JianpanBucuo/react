import React from 'react';
import ReactDOM from 'react-dom';
import AntTodoList from './antTodolist-react-redux/index'
import {Provider} from 'react-redux'
import store from './store'
const App = (
    <Provider store={store}>
        <AntTodoList></AntTodoList>
    </Provider>
)
ReactDOM.render(
    App,
    document.getElementById('root')
);


