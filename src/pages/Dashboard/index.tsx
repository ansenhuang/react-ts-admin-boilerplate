import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import cls from 'classnames';
import { getQueryString, formateDate } from 'src/utils';
import { SOME_INFORMATION } from 'src/constants';

const Dashboard: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const from = getQueryString('from');
  const timer = setTimeout(() => {
    setDate(new Date());
  }, 1000);

  useEffect(() => {
    return clearTimeout(timer);
  }, [timer]);

  return (
    <div
      className={cls(
        styles['dashboard'],
        from === 'home' && styles['is-from-home']
      )}
    >
      <h1>Dashboard</h1>
      <p>Here is your page content.</p>
      <p>Come from: {from || 'unknown'}</p>
      <p>Current time: {formateDate(date)}</p>
      <p>Information: {SOME_INFORMATION}</p>
    </div>
  );
};

export default Dashboard;
