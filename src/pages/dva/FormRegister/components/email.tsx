import React from "react";
import {
    Form,
    Input
} from "antd"
import BaseFormItem from './baseFormItem'

interface IProps extends IBaseProps {
    value?: string
}

export default class Email extends BaseFormItem<IProps, any> {

    render() {
        const { label, value, form, required } = this.props
        const { getFieldDecorator } = form

        return (<Form.Item label={label}>
            {getFieldDecorator(this.idx, {
                initialValue: value,
                rules: [
                    {
                        type: "email",
                        message: "The input is not valid E-mail!"
                    },
                    {
                        required,
                        message: "Please input your E-mail!"
                    },

                ]
            })(<Input />)}
        </Form.Item>)
    }
}





