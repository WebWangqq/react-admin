import React from 'react'
import { Button } from 'antd';
class Menu1 extends React.Component {
  toDetail = () => {
    console.log(this)
    this.props.history.push('/menus/menu1/detail')
  }
  render () {
    return (
      <div>
        <Button onClick={this.toDetail} type="link">跳转至详情</Button>
      </div>
    )
  }
}
export default Menu1