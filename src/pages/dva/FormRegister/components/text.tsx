import React from "react";
import {
    Form,
    Input,
} from "antd"
import BaseFormItem from './baseFormItem'
interface IProps extends IBaseProps {
    value?: string
}

export default class Text extends BaseFormItem<IProps, any>{
    static defaultProps ={
        required:true 
    }
    get idx() {
        const { label, id } = this.props
        return id || label
    }
    render() {
        const { label, value, form ,required} = this.props
        const { getFieldDecorator } = form

        return (<Form.Item label={label}>
            {getFieldDecorator(this.idx, {
                initialValue: value,
                rules: [

                    {
                        required,
                        message: "Please input your text"
                    },

                ]
            })(<Input />)}
        </Form.Item>)
    }
}

