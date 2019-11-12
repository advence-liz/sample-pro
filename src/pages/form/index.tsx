import React from 'react';
import styles from './index.css';
import TableBasic from './TableBasic';
import AlertBanner from './AlertBanner';

const Block: React.FC = () => {
  return (
    <div className={styles.normal}>
      <TableBasic />
      <h1>I am a from block!</h1>
      <AlertBanner />
    </div>
  );
};

export default Block;
