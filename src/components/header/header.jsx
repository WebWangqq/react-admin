import React from 'react'
import { Layout } from 'antd';
import './index.less'
const { Header } = Layout;
export default class HeaderNav extends React.Component {

  render () {
    return (
      <Header className="header-nav">Header</Header>
    )
  }
}