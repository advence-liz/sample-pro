import React from "react";
import {
    Form,
    Input,
} from "antd"

interface Options {
    label: string
    value: string | number
}

export class Email {
    options: Options
    constructor(options = { label: 'email', value: 'aaa@163.com' }) {
        this.options = options
    }

    render(getFieldDecorator) {

        const { label, value } = this.options

        return (<Form.Item label={label}>
            {getFieldDecorator("email", {
                initialValue: value,
                rules: [
                    {
                        type: "email",
                        message: "The input is not valid E-mail!"
                    },
                    {
                        required: false,
                        message: "Please input your E-mail!"
                    },

                ]
            })(<Input />)}
        </Form.Item>)
    }
}





