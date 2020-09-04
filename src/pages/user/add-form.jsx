import React from 'react'
import { Form, Input } from 'antd'
const Item = Form.Item
const { TextArea } = Input;
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

class AddForm extends React.Component {
  constructor(props) {
    super(props)
    this.form = React.createRef()
  }
  UNSAFE_componentWillReceiveProps (nextProps) {
    if (this.props.userInfo.id !== nextProps.userInfo.id) {
      this.form.current.setFieldsValue(nextProps.userInfo)
    }
  }
  render () {
    const { userInfo } = this.props
    return (
      <Form {...layout}
        ref={this.form}
        initialValues={userInfo}>
        <Item
          label="用户名"
          name="name"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input placeholder="请输入用户名" />
        </Item>
        <Item
          label="年龄"
          name="age"
          rules={[{ required: true, message: '请输入年龄' }]}
        >
          <Input placeholder="请输入年龄" />
        </Item>
        <Item label="地址" name="address">
          <TextArea placeholder="请输入地址"></TextArea>
        </Item>
      </Form>

    )
  }
}
export default AddForm