import React, { useState, useEffect } from 'react';
import './index.module.css';
import { getQueryString, formateDate } from 'src/utils';
import { SOME_INFORMATION } from 'src/constants';

const Page: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const timer = setTimeout(() => {
    setDate(new Date());
  }, 1000);

  useEffect(() => {
    return clearTimeout(timer);
  }, [timer]);

  return (
    <div styleName="dashboard">
      <h1>Dashboard</h1>
      <p>Here is your page content.</p>
      <p>Come from: {getQueryString('from') || 'unknown'}</p>
      <p>Current time: {formateDate(date)}</p>
      <p>Information: {SOME_INFORMATION}</p>
    </div>
  );
};

export default Page;
