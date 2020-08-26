import React from 'react'
import { Card, Table, Space, Button } from 'antd';
import { getJokes } from '../../api/news'
class News extends React.Component {
  state = {
    loading: true,
    tableData: []
  }
  initColumns = () => {
    this.columns = [
      {
        title: '标题',
        dataIndex: 'text',
        key: 'text'
      },
      {
        title: '操作',
        key: 'action',
        align: 'center',
        render: (text, record, index) => (
          <Space size="middle">
            <Button type="link" onClick={() => this.handleDetail(record.sid)}>详情</Button>
          </Space>

        )
      }
    ]
  }
  UNSAFE_componentWillMount () {
    this.initColumns()
  }
  loadMore = async () => {
    var data = { page: 1, count: 10, type: 'image' }
    let res = await getJokes(data)
    // console.log(res)
    this.setState({
      loading: false,
      tableData: res.result
    })
  }
  componentDidMount () {
    this.loadMore()
  }
  handleDetail = (sid) => {
    // console.log(sid)
    this.props.history.push('/news/detail/' + sid)
  }
  render () {
    // console.log(this.props)
    const { loading, tableData } = this.state
    return (
      <Card>
        <Table rowKey='sid' loading={loading} columns={this.columns} dataSource={tableData} pagination={false}></Table>

      </Card>
    )
  }
}
export default News