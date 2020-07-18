import React from 'react';
import styles from './index.module.css';

const NotFound: React.FC = () => {
  return (
    <div className={styles['notFound']}>
      <h1>404</h1>
    </div>
  );
};

export default NotFound;
