import React from "react";
import Email from './email'
import Number from './number'
import Text from './text'
import Cascader from './cascader'
import Password from './password'
import AutoComplete from './autoComplete'




export default class BaseFormItem<P, S> extends React.Component<P, S>{

    renderForm(dataSource: any[],range?:number[]) {
        const { form } = this.props

        return dataSource.map((options, index) => {
            const { type } = options
            const props: IBaseProps = { ...options, form }
            switch (type) {
                case 'number':
                    return <Number {...props}></Number>
                case 'email':
                    return <Email {...props}></Email>
                case 'password':
                    return <Password {...props}></Password>
                case 'cascader':
                    return <Cascader {...props} />
                case 'autoComplete':
                    return <AutoComplete {...props} ></AutoComplete>
                default:
                    return <Text {...props}></Text>

            }
        })

    }

}
