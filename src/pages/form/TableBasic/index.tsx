import React from "react";
import styles from "./index.less";
import { Table} from "antd";
import {columns,data} from './config'


export default () => (
  <div className={styles.container}>
    <div id="components-table-demo-basic">
      <Table columns={columns} dataSource={data} />
    </div>
  </div>
);
