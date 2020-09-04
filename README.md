### 组件
组件的后缀可以是js,也可以是jsx;
一个React项目是有成千上万个组件组成

### props属性
props不可以被修改

### 事件处理
1、this问题
2、向事件处理程序传递参数

### state

### React生命周期函数
函数列表：
  componentWillMount:在组件渲染之前执行
  componentDidMount:在组件渲染之后执行
  shouldComponentUpdate:返回true和false,true代表允许改变，false代表不允许改变
  componentWillUpdate:数据在改变之前执行(state,props)
  componentDidUpdate:数据修改完成(state,props)
  componentWillReceiveProps:props发生改变执行
  componentWillUnmount:组件卸载前执行

  componentDidCatch:子元素发生错误时触发 Demo6
子传父
父传子

### setState更新是同步还是异步
1.setState会引起视图的重绘
2.在可控的情况是异步，再非可控的情况下是同步
es6的新特性参考

### 条件渲染

### 列表 & key

### 表单
1.受控组件
2.非受控组件

### Refs and the DOM
1.管理焦点，文本选择或媒体播放
2.出发强制动画
3.集成第三方DOM库

### 状态提升
组件之间的数据交互

### 组合 vs 继承
this.props.children



### Antd UI组件库的使用
### 按需加载
1.手动按需加载


### 跨域解决方案：


### react-router
1.安装 npm install react-router-dom --save

2.路由的作用：
    单页面应用（SPA），路由跳转：切换视图

HashRouter:锚点链接
BrowserRouter：h5新特性/history.push  如果上线之后，需要后台做一些处理：重定向处理 刷新404

exact精准匹配
strict 更精准匹配

传参 /:id?/:name?  多个参数

####
<Link to={{
  pathname: '/courses',
  search: '?sort=name&age=18',
  hash: '#the-hash',
  state: {
    fromDashboard: true
  }
}} />

### withRouter 高阶组件

### Prompt  
<Prompt when={!!this.state.name} message={'确定要离开吗'}></Prompt>

### redux:

  ### 安装redux: npm install redux react-redux redux-thunk
   npm install --save-dev redux-devtools-extension 查看状态的工具


redux和react-redux的区别：
  redux:js的状态管理 createStore
  react-redux:为了在react中容易的使用：connect provider

getState()
dispatch(action)
subscribe(listener)

React.Component:不会对数据进行比较
React.PureComponent:对数据进行浅比较 props

### Fragment 代替div

### 高阶组件
1.函数
2.参数一个组件
3.返回值是一个组件

### 动态绑定className 
 <div className={`${isActive ? "active" : null} ${isLine ? "line" : null}`}>{message}</div>
 <i style={{display: block ? 'block' : "none"，color: 'red'}}/>
 <i style={ block ?  {display: 'block'} : { display: 'none'}}/>