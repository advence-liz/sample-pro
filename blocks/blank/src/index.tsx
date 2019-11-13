import React, { Component } from 'react'
import { Dispatch } from 'redux';
import { RouteChildrenProps } from 'react-router';
import { Button } from 'antd';
import { connect } from 'dva'
import styles from './styles.less'
import { ModalState } from './model'
interface PAGE_NAME_UPPER_CAMEL_CASEProps extends RouteChildrenProps {
  dispatch: Dispatch<any>;
}
@connect(
  ({
    loading,
    BLOCK_NAME_CAMEL_CASE,
  }: {
    loading: { effects: { [key: string]: boolean } };
    BLOCK_NAME_CAMEL_CASE: any;
  }) => ({
    loading,
    ...BLOCK_NAME_CAMEL_CASE

  }),
)
class PAGE_NAME_UPPER_CAMEL_CASE extends Component<PAGE_NAME_UPPER_CAMEL_CASEProps & ModalState, any>{

  fetch = () => {
    const { dispatch } = this.props

    dispatch({ type: 'BLOCK_NAME_CAMEL_CASE/fetch' })
  }

  render() {
    const { name, users = [] } = this.props
    return (
      <div className={styles.normal} >
        <h1>{name}</h1>
        <Button onClick={this.fetch} type='primary'>获取users</Button>
        <h2>users:</h2>
        {users.map((value, index) => {
          return <div key={index}>{value}</div>
        })}

      </div>
    )

  }
}
export default PAGE_NAME_UPPER_CAMEL_CASE
