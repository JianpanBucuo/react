# Redux 进阶

## UI组件和容器组件的拆分

1. UI组件 负责处理渲染
2. 容器组件 负责处理业务逻辑
3. 无状态组件 性能更优，不用走声明周期函数

## redux中发送异步请求获取数据

## redux-thunk中间件
npm install redux-thunk --save
store/index 增加中间件
1. actionCreator之前返回一个函数，再引入redux-thunk之后，可以返回一个函数
2. store.dispatch之前接收一个对象，再引入redux-thunk之后，可以接收一个函数，并自动执行
3. actionCreator 中返回的函数，可接收到一个dispatch方法，并可在函数里使用

## redux中间件

## redux-saga
