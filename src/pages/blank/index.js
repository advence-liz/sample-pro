import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import styles from './style.less';
import UserLogin from './UserLogin';

@connect(({ blank }) => blank)
class Page extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'blank/fetch',
    });
  }

  render() {
    const { text } = this.props;
    return (
      <div className={styles.container}>
        <UserLogin />
        <Button>{text}</Button>
      </div>
    );
  }
}

export default Page;
