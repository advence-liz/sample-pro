
import React from "react";
import {
    Form,
    Input,
} from "antd"

// interface Options {
//     label: string
//     value: string | number
// }

export class Password {

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!')
        } else {
            callback()
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true })
        }
        callback()
    };

    handleConfirmBlur = e => {
        const { value } = e.target
        this.setState({ confirmDirty: this.state.confirmDirty || !!value })
      };
      
    render(getFieldDecorator) {

        return (<React.Fragment>
            <Form.Item label="Password" hasFeedback>
                {getFieldDecorator('password', {
                    rules: [
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            validator: this.validateToNextPassword,
                        },
                    ],
                })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback>
                {getFieldDecorator('confirm', {
                    rules: [
                        {
                            required: true,
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


