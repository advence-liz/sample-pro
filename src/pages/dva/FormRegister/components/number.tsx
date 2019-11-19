import React from "react";
import {
    Form,
    Input,
} from "antd"
import BaseFormItem from './baseFormItem'

interface IProps extends IBaseProps {
    value?: string
}
export default class Number extends BaseFormItem<IProps, any>{
    
    render() {
        const { label, value, form ,required} = this.props
        const { getFieldDecorator } = form

        return (<Form.Item label={label}>
            {getFieldDecorator(this.idx, {
                initialValue: value,
                rules: [
                    {
                        type: "string",
                        required: true, pattern: /^[\d]+$/,
                        message: "The input is not valid number!",
                        transform(value: string) {
                            return value.toString().trim();
                        }
                    },
                    {
                        required,
                        message: "Please input your number"
                    },

                ]
            })(<Input />)}
        </Form.Item>)
    }
}





