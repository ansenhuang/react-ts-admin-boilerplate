import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import styles from './index.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles['home']}>
      <h1>Home</h1>
      <p>This is the page without layout.</p>
      <Button type="primary">
        <Link to="/admin/dashboard?from=home">Dashboard</Link>
      </Button>
    </div>
  );
};

export default Home;
