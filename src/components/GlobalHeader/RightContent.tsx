import { Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './index.less';
import Logout from './Logout';
import Avatar from './Avatar';
import Notice from './Notice';
import { RightOutlined } from '@ant-design/icons';

interface IProps {}
const RightContent: React.FC<IProps> = () => {
  return (
    <div className={styles.rightContent}>
      <Notice />
      <div className={styles.text}>欢迎来到你的创作中心</div>
      <Avatar />
      <div className={styles.userContent}>
        实名认证未完成
        <RightOutlined />
      </div>
    </div>
  );
};

export default RightContent;
