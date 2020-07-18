import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import './index.module.css';

const sizeMap = {
  auto: undefined,
  small: 24,
  large: 36,
};

const Loading: React.FC<{
  size?: keyof typeof sizeMap;
}> = ({ size, children }) => {
  return (
    <div styleName="loading">
      <LoadingOutlined style={{ fontSize: size && sizeMap[size] }} />
      {children}
    </div>
  );
};

export default Loading;
