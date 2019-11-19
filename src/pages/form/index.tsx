import React from 'react';
import styles from './index.css';
import TableBasic from './TableBasic';

const Block: React.FC = () => {
  return (
    <div className={styles.normal}>
      <TableBasic />
    </div>
  );
};

export default Block;
