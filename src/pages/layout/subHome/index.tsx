import React, { Component } from 'react'
import { Dispatch } from 'redux'
import { RouteChildrenProps } from 'react-router'
import { Button } from 'antd'
import { connect } from 'dva'
import styles from './styles.less'
import { ModalState } from './model'
interface SubHomeProps extends RouteChildrenProps {
  dispatch: Dispatch<any>
}
@connect(
  ({
    loading,
    layoutAndsubHome,
  }: {
    loading: { effects: { [key: string]: boolean } }
    layoutAndsubHome: any
  }) => ({
    loading,
    ...layoutAndsubHome,
  }),
)
class SubHome extends Component<
SubHomeProps & ModalState,
any
> {
  fetch = () => {
    const { dispatch } = this.props

    dispatch({ type: 'layoutAndsubHome/fetch' })
  }

  render() {
    const { name, users = [] } = this.props
    return (
      <div className={styles.normal}>
        <h1>{name}</h1>
        <Button onClick={this.fetch} type="primary">
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
export default SubHome
