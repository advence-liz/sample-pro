
import React from "react";
import {
    Form,
    Input,
} from "antd"
import BaseFormItem from './baseFormItem'

interface IProps extends IBaseProps {
    value?: string
}

export default class Password extends BaseFormItem<IProps, any> {
  
    state = {
        confirmDirty: false,

    }
    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!')
        } else {
            callback()
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true })
        }
        callback()
    }

    handleConfirmBlur = e => {
        const { value } = e.target
        this.setState({ confirmDirty: this.state.confirmDirty || !!value })
    }

    render() {

        const { label, form, required } = this.props
        const { getFieldDecorator } = form
        return (<React.Fragment>
            <Form.Item label={label} hasFeedback>
                {getFieldDecorator(this.idx, {
                    rules: [
                        {
                            required,
                            message: 'Please input your password!',
                        },
                        {
                            validator: this.validateToNextPassword,
                        },
                    ],
                })(<Input.Password />)}
            </Form.Item>
            <Form.Item label={`Confirm ${label}`} hasFeedback>
                {getFieldDecorator(`${this.idx}Confirm`, {
                    rules: [
                        {
                            required,
                            message: 'Please confirm your password!',
                        },
                        {
                            validator: this.compareToFirstPassword,
                        },
                    ],
                })(<Input.Password onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
        </React.Fragment>)

    }
}


