import React, { useState } from 'react';
import { Space } from 'antd';
import Logo from './Logo';
import User from './User';
import TopSearch from './Search';
import styles from './index.less';

export default ({ navigation, ...props }) => {
  const { location } = props;
  const query = location ? location.query || {} : {};
  return (
    <div className={styles['header-wrap']}>
      <div className={styles['header']}>
        <Logo />
        {navigation}
        <div style={{ flex: 1 }}></div>
        <Space>
          <TopSearch defaultValue={query.q || ''} type={query.t || ''} />
          <User {...props} />
        </Space>
      </div>
    </div>
  );
};
