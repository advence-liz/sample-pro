import React, { Component } from 'react'
import { Dispatch } from 'redux'
import { RouteChildrenProps } from 'react-router'
import { Button, Table } from 'antd'
import { connect } from 'dva'
import styles from './styles.less'
import { ModalState } from './model'
import { columns, data } from './config'

interface PAGE_NAME_UPPER_CAMEL_CASEProps extends RouteChildrenProps {
  dispatch: Dispatch<any>
}
@connect(
  ({
    loading,
    BLOCK_NAME_CAMEL_CASE,
  }: {
    loading: { effects: { [key: string]: boolean } }
    BLOCK_NAME_CAMEL_CASE: any
  }) => ({
    loading,
    ...BLOCK_NAME_CAMEL_CASE,
  }),
)
class PAGE_NAME_UPPER_CAMEL_CASE extends Component<
PAGE_NAME_UPPER_CAMEL_CASEProps & ModalState,
any
> {

  /**
  * 封装dispatch方法方便调用
  * @description
  *  this.dispatch({ count: count + 1 })  默认
  *  this.dispatch('ajax')
  */
  dispatch = (type: string | object, payload?: object) => {
    const { dispatch } = this.props
    let _action: string = 'update'
    let _payload: object = payload || {}
    if (typeof type === 'string') {
      _action = type
    }
    if (typeof type === 'object') {
      _action = 'update'
      _payload = type
    }

    dispatch({ type: `BLOCK_NAME_CAMEL_CASE/${_action}`, payload: _payload })
  }

  handleTableChange = (pagination: any) => {

    this.dispatch('fetchList', { pagination })

  }
  componentDidMount() {
    const { pagination } = this.props
    this.dispatch('fetchList', { pagination })
  }

  render() {
    const { pagination, list } = this.props
    return (
      <div className={styles.normal}>
        <Table columns={columns} dataSource={list} onChange={this.handleTableChange}
          pagination={pagination} />

      </div>
    )
  }
}
export default PAGE_NAME_UPPER_CAMEL_CASE
