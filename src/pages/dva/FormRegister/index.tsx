import React from 'react'
import {
  Form,
  Button,
} from 'antd'
import BaseForm from './components/baseForm'
import { formDataSource } from './conifg'
import styles from './index.less'


// @Form.create({ name: 'register' })
// export default class RegistrationForm extends React.Component<any, any> {

class RegistrationForm extends BaseForm<any, any> {

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  };

  handleFormChange = (...rest) => {
    console.log(rest)

  };




  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    }


    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} onChange={this.handleFormChange}>

        {this.renderForm(formDataSource)}

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>

      </Form>
    )
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(
  RegistrationForm,
)

export default () => (
  <div className={styles.container}>
    <div id="components-form-demo-register">
      <WrappedRegistrationForm />
    </div>
  </div>
)
