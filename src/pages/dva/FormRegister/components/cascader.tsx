import React from "react";
import {
    Form,
    Cascader,
} from "antd"
import BaseFormItem from './baseFormItem'

interface IProps extends IBaseProps {
    value?: string[]
    options:any[]
}

export default class CascaderItem extends BaseFormItem<IProps, any> {

    render() {
        const { label, value, form, required ,options} = this.props
        const { getFieldDecorator } = form

        return ( <Form.Item label={label}>
        {getFieldDecorator('residence', {
          initialValue: value,
          rules: [
            {
              type: 'array',
              required,
              message: 'Please select your habitual residence!',
            },
          ],
        })(<Cascader options={options} />)}
      </Form.Item>)
    }
}





