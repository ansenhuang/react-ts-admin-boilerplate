import React from 'react';
import css from './style.module.css';

const Business: React.FC = () => {
  return (
    <div>
      <p className={css.business}>我是一个业务组件。</p>
    </div>
  );
};

export default Business;
