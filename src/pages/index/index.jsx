import React from 'react'
import { connect } from 'react-redux'
import './index.less';

import echarts from 'echarts'
// const echarts = require('echarts')
class Index extends React.Component {
  state = {
    message: '你好啊',
    isActive: true,
    isLine: true
  }
  componentDidMount () {
    this.showBarChart()
  }
  UNSAFE_componentWillReceiveProps (props) {
    setTimeout(() => {
      this.myChart.resize()
    }, 200)

  }
  showBarChart = () => {
    this.myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    var option = {
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
    this.myChart.setOption(option)
    window.addEventListener('resize', () => {
      this.myChart.resize()
    })
  }
  render () {
    const { message, isActive, isLine } = this.state
    return (
      <div>
        <div className={`${isActive ? "active" : null} ${isLine ? "line" : null}`}>{message}</div>
        <div style={{ width: '100%', height: '300px', backgroundColor: '#ffffff', overflow: 'hidden' }}>
          <div style={{ width: '100%', height: '100%' }} id="main"></div>
        </div>

      </div>

    )
  }
}
export default connect(
  state => ({
    collapsed: state.admin.collapsed,
  }),
  {}
)(Index)