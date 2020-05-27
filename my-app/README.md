1. 当一个组件的state或者props发生改变的时候，render就会重新执行一次、

## 虚拟DOM
1. 数据
2. JSX模板
3. 生成一个虚拟DOM（JS对象，用它来描述真实DOM）
['div',{id:'id'},['span',{},'hello world']]
4. 结合虚拟DOM，生成真的DOM
5. state发生改变
6. 生成新的虚拟DOM
7. 比较原始虚拟DOM和新的虚拟DOM相比较
8. 直接操作DOM，改变内容

JSX => React.createElement => 虚拟DOM(JS对象) => 真实DOM
1. 虚拟DOM的比对（js对象的比对）相较于真实DOM对象的比对消耗的性能小
2. 跨端应用得以实现

diff算法
分为同层比对和key值比对
1. 虚拟DOM逐层比较，一层不相等，则不会去比较下面的节点
2. 在循环列表时不用index作为key值使因为，当我们操作列表中其中的元素时，所有的key值将会发生改变，破坏了虚拟DOM key值一一对应的关系， 导致新的DOM和原始DOM相比较时耗费的性能增加

生命周期函数
- 是指某一时刻组件会自动调用执行的函数


Initialization 初始化过程
- setup props and state

Mounting 挂载
- componentWillMount  当组件即将被挂载到页面的时刻执行
- render
- compoentDidMount

Updation 更新

props
- componentWillReceiveProps 
- shouldComponentUpdate (true/false)
- componentWillUpdate
- render
- componentDidUpdate
state
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

Unmounting 去除
componentWillUnmount

componentWillReceiveProps 
执行时刻： 
1. 当一个组件要从父组件接收参数，当父组件render函数被重新执行之后，子组件的componentWillReceiveProps会被执行
2. 当子组件第一次存在于组件中，componentWillReceiveProps不会执行
3. 当子组件已经存在于父组件当中componentWillReceiveProps会执行

shouldComponentUpdate 将新传入的props和之前的props相比较，如果值不同则更新子组件 值相同则不更新（性能优化点）

redux

Redux = Reducer + Flux