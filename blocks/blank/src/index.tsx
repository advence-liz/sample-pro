import React, { Component } from 'react'
import { Dispatch } from 'redux'
import { RouteChildrenProps } from 'react-router'
import { Button } from 'antd'
import { connect } from 'dva'
import styles from './styles.less'
import { ModalState } from './model'
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

  fetch = () => {
    this.dispatch('fetch')
  }
  countPlus = () => {
    const { count } = this.props
    this.dispatch({ count: count + 1 })
  }

  render() {
    const { count, users = [], loading: { global } } = this.props
    return (
      <div className={styles.normal}>
        <Button type="primary" onClick={this.countPlus}>count + 1</Button>
        <h2>count:{count}</h2>

        <Button onClick={this.fetch} type="primary" loading={global}>
          获取users
        </Button>
        <h2>users:</h2>
        {users.map((value, index) => {
          return <div key={index}>{value}</div>
        })}
      </div>
    )
  }
}
export default PAGE_NAME_UPPER_CAMEL_CASE
