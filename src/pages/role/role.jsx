import React from 'react'
import './index.less'

class Role extends React.Component {
  state = {
    count: 0
  }
  test1 = () => {
    console.log('test1 执行之前', this.state.count)
    this.setState(state => ({ count: state.count + 1 }))
    console.log('test1 执行之后', this.state.count)
  }
  componentDidMount () {
    // console.log('componentDidMount 执行之前', this.state.count)
    this.setState(state => ({ count: state.count + 1 }))
    // console.log('componentDidMount 执行之后', this.state.count)
  }
  // 定时器、原生事件监听、
  test2 = () => {
    setTimeout(() => {
      console.log('setTimeout 执行之前', this.state.count)
      this.setState(state => ({ count: state.count + 1 }))
      console.log('setTimeout 执行之后', this.state.count)
    })
  }
  test3 = () => {
    const h2 = this.refs.count
    h2.onclick = () => {
      console.log('aa')
      console.log('onClick 执行之前', this.state.count)
      this.setState(state => ({ count: state.count + 1 }))
      console.log('onClick 执行之后', this.state.count)
    }
  }
  test4 = () => {
    Promise.resolve().then(value => {
      console.log('Promise 执行之前', this.state.count)
      this.setState(state => ({ count: state.count + 1 }))
      console.log('Promise 执行之后', this.state.count)
    })
  }
  test5 = () => {
    console.log('test1 执行之前', this.state.count)
    this.setState(state => ({ count: state.count + 1 }))
    console.log('test1 执行之后', this.state.count)
    console.log('test1 执行之前2', this.state.count)
    this.setState(state => ({ count: state.count + 1 }))
    console.log('test1 执行之后2', this.state.count)
  }
  test6 = () => {
    console.log('test1 执行之前', this.state.count)
    this.setState({ count: this.state.count + 1 })
    console.log('test1 执行之后', this.state.count)
    console.log('test1 执行之前2', this.state.count)
    this.setState({ count: this.state.count + 1 })
    console.log('test1 执行之后2', this.state.count)
  }
  test7 = () => {

    console.log('test1 执行之前2', this.state.count)
    this.setState(state => ({ count: state.count + 1 }))
    console.log('test1 执行之后2', this.state.count)
    console.log('test1 执行之前', this.state.count)
    this.setState({ count: this.state.count + 1 })
    console.log('test1 执行之后', this.state.count)
  }
  render () {
    const { count } = this.state
    console.log(`render(),count:${count}`)
    return (
      <div>
        <h1 ref="count">{count}</h1>
        <button onClick={this.test1}>A测试1</button>
        <button onClick={this.test2}>A测试2</button>
        <button onClick={this.test3}>A测试3</button>
        <button onClick={this.test4}>A测试4</button>
        <button onClick={this.test5}>A测试5</button>
        <button onClick={this.test6}>A测试6</button>
        <button onClick={this.test7}>A测试7</button>
        {/* <div className="box">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div> */}
        {/* <div className="main">
          <div className="left"></div>
          <div className="right"></div>
        </div> */}
        {/* <div className="main">
          <div className="com">未知gaodu上下左右居中</div>
        </div> */}
      </div>
    )
  }
}
export default Role