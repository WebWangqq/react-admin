import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Modal } from 'antd'
const Item = Form.Item
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
class AddForm extends React.Component {
  static propTypes = {
    loadMore: PropTypes.func.isRequired
  }
  state = {
    visible: false,
    addOpration: true,
    userInfo: {}
  }
  formRef = React.createRef()
  loadInfo = (addOpration, userInfo) => {
    this.setState({
      visible: true,
      addOpration,
      userInfo: Object.assign({}, userInfo)
    }, () => {
      if (this.formRef.current) {
        if (userInfo) {
          this.formRef.current.setFieldsValue(userInfo)
        } else {
          this.formRef.current.resetFields()
        }
      }
    })
  }

  handleOk = () => {
    this.formRef.current.validateFields().then(values => {
      this.setState({
        visible: false
      })
      let data = this.state.userInfo
      data = Object.assign(data, values)
      console.log(data)
      this.props.loadMore()
    }).catch(() => { })
  }
  handleCancel = (e) => {
    this.setState({
      visible: false
    })
  }
  render () {
    const { visible, addOpration, userInfo } = this.state
    return (
      <Modal visible={visible}
        title={addOpration ? '添加用户' : '编辑用户'}
        centered
        maskClosable={false}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        okText={'确定'}
        cancelText={'取消'}
      >
        <Form {...layout}
          ref={this.formRef}
          initialValues={userInfo}>
          <Item
            label="用户名"
            name="name"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Item>
          <Item
            label="年龄"
            name="age"
            rules={[{ required: true, message: '请输入年龄' }]}
          >
            <Input />
          </Item>
        </Form>
      </Modal>

    )
  }
}
export default AddForm