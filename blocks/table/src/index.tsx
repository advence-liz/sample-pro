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
  fetch = () => {
    const { dispatch } = this.props

    dispatch({ type: 'BLOCK_NAME_CAMEL_CASE/fetch' })
  }

  render() {
    const { pagination } = this.props
    return (
      <div className={styles.normal}>
        <Table columns={columns} dataSource={data} pagination={pagination} />

      </div>
    )
  }
}
export default PAGE_NAME_UPPER_CAMEL_CASE
