import React from "react";


export default class BaseFormItem<P extends IBaseProps, S> extends React.Component<P, S>{
    static defaultProps = {
        required: true
    }
    get idx() {
        const { label, id } = this.props

        return id || label
    }

}
