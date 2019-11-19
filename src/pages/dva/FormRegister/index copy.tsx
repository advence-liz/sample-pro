import React from 'react'
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
} from 'antd'
import BaseForm from './components/baseForm'
import { formDataSource } from './conifg'
import styles from './index.less'

const { Option } = Select


// @Form.create({ name: 'register' })
// export default class RegistrationForm extends React.Component<any, any> {

class RegistrationForm extends BaseForm <any,any> {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

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
    // this.setState(({ fields }) => ({
    //   fields: { ...fields, ...changedFields },
    // }));
  };

  


  render() {
    const { getFieldDecorator } = this.props.form
    const { form } = this.props

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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    )



    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} onChange={this.handleFormChange}>

        {this.renderForm(formDataSource)}

        <Form.Item label='enum'>
          {getFieldDecorator("enum", {
            rules: [
              {
                type: "enum",
                enum: ['admin', 'user', 'guest'],
                message: "The input is only allow 'admin', 'user', 'guest'"
              },
              {
                required: true,
                message: "Please input your number"
              },

            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('nickname', {
            rules: [
              {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [
              { required: true, message: 'Please input your phone number!' },
            ],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item>

        <Form.Item
          label="Captcha"
          extra="We must make sure that your are a human."
        >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the captcha you got!',
                  },
                ],
              })(<Input />)}
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>,
          )}
        </Form.Item>
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
