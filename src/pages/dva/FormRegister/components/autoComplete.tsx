import React from "react";
import {
    Form,
    Input,
    AutoComplete
} from "antd"
import BaseFormItem from './baseFormItem'
const AutoCompleteOption = AutoComplete.Option

interface IProps extends IBaseProps {
    value?: string
    autoComplete: string[]
}

export default class AutoCompleteItem extends BaseFormItem<IProps, any> {

    state = {
        autoCompleteResult: [],
    };
    handleCompleteChange = value => {
        const { autoComplete } = this.props
        let autoCompleteResult: string[] = []
        if (!value) {
            autoCompleteResult = []
        } else {
            autoCompleteResult = autoComplete.map(
                domain => `${value}${domain}`,
            )
        }
        this.setState({ autoCompleteResult })
    };

    render() {
        const { label, value, form, required,placeholder } = this.props
        const { getFieldDecorator } = form
        const { autoCompleteResult } = this.state
        const autoCompleteOptions = autoCompleteResult.map(item => (
            <AutoCompleteOption key={item}>{item}</AutoCompleteOption>
        ))
        return (<Form.Item label={label}>
            {getFieldDecorator(this.idx, {
                initialValue: value,
                rules: [{ required, message: 'Please input website!' }],
            })(
                <AutoComplete
                    dataSource={autoCompleteOptions}
                    onChange={this.handleCompleteChange}
                    placeholder={placeholder}
                >
                    <Input />
                </AutoComplete>,
            )}
        </Form.Item>)
    }
}





