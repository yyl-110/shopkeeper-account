import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import { RightOutlined } from '@ant-design/icons';

interface IProps {
  title: string;
  url: string;
}
const Header: React.FC<IProps> = props => {
  const { title, url } = props;
  return (
    <div className={styles.header}>
      <div className={styles.title}>{title}</div>
      <a className={styles.more} href={url}>
        更多
        <RightOutlined style={{ marginLeft: '4px' }} />
      </a>
    </div>
  );
};

export default Header;
