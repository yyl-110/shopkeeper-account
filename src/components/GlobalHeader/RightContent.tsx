import { Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './index.less';
import Logout from './Logout';
import Avatar from './Avatar';
import Notice from './Notice';
import { LeftCircleOutlined, RightOutlined } from '@ant-design/icons';
import { history } from 'umi';

interface IProps {
  showText?: boolean;
  backText?: string;
}
const RightContent: React.FC<IProps> = props => {
  const { showText = true, backText = '' } = props;
  return (
    <div className={styles.rightContent}>
      {backText && (
        <div className={styles.goBack}>
          <div className={styles.logo}>
            <img src={require('../../assets/zgh.png')} alt="" />
          </div>
          <div
            className={styles.back}
            onClick={() => {
              history.push('/home');
            }}
          >
            <LeftCircleOutlined style={{ margin: '0 20px', fontSize: '24px', color: '#999' }} />
            <span className={styles.backText}>{backText}</span>
          </div>
        </div>
      )}

      <div className={styles.info}>
        <Notice />
        {showText && <div className={styles.text}>欢迎来到你的创作中心</div>}
        <Avatar />
        <div className={styles.userContent}>
          实名认证未完成
          <RightOutlined />
        </div>
      </div>
    </div>
  );
};

export default RightContent;
