import React from 'react'
import { Card, Table, Space, Button, Modal } from 'antd';
import { PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import AddForm from './add-form'

const { confirm } = Modal


class User extends React.Component {
  state = {
    loading: true,
    tableData: [],
    visible: false,
    addOpration: true,
    userInfo: {}
  }
  addForm = React.createRef()

  initColumns = () => {
    this.columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: '操作',
        key: 'action',
        align: 'center',
        render: (text, record, index) => (
          <Space size="middle">
            <Button type="link" onClick={() => this.handleEdit(record)}>编辑</Button>
            <Button type="link" onClick={() => this.handleDelete(record.id)}>删除</Button>
          </Space>

        )
      }
    ]
  }

  handleDelete = (id) => {
    confirm({
      title: '确定删除此项内容',
      icon: <ExclamationCircleOutlined />,
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk: () => {
        console.log(id);
        this.loadMore()
      },
      onCancel () {
        console.log('Cancel');
      },
    })
  }
  handleEdit = (record) => {
    this.setState({
      visible: true,
      addOpration: false,
      userInfo: Object.assign({}, record)
    })
  }
  handleAdd = () => {
    this.setState({
      visible: true,
      addOpration: true,
      userInfo: {
        name: '',
        age: '',
        address: ''
      }
    })
  }
  handleOk = () => {
    const form = this.addForm.current.form.current
    form.validateFields()
      .then(values => {
        let data = this.state.userInfo
        data = Object.assign(data, values)
        console.log(data)
        this.setState({
          visible: false
        })
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  }
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }
  UNSAFE_componentWillMount () {
    this.initColumns()
  }
  loadMore = () => {
    setTimeout(() => {
      console.log('执行父组件')
      const tableData = [
        { id: 1, name: '王小明1', age: 22, address: '西湖区胡迪工1号' },
        { id: 2, name: '王小明2', age: 22, address: '西湖区胡迪工2号' },
        { id: 3, name: '王小明3', age: 22, address: '西湖区胡迪工3号' },
        { id: 4, name: '王小明4', age: 22, address: '西湖区胡迪工4号' },
        { id: 5, name: '王小明5', age: 22, address: '西湖区胡迪工5号' },
        { id: 6, name: '王小明6', age: 22, address: '西湖区胡迪工6号' }
      ]
      this.setState({
        tableData,
        loading: false
      })
    }, 200)
  }
  componentDidMount () {
    this.loadMore()
  }

  render () {
    const { loading, tableData, visible, addOpration, userInfo } = this.state
    return (
      <Card>
        <Button type="primary" icon={<PlusOutlined />} onClick={this.handleAdd}>添加</Button>
        <Table rowKey='id' loading={loading} columns={this.columns} dataSource={tableData}></Table>
        <Modal visible={visible}
          title={addOpration ? '添加用户' : '编辑用户'}
          centered
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText={'确定'}
          cancelText={'取消'}
        >
          <AddForm ref={this.addForm} userInfo={userInfo} />
        </Modal>

      </Card>
    )
  }
}
export default User