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
            <svg width="79" height="27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M78.848 12.644v3.133H61.736l-.576 2.014h16.76v1.828l-1.669 7.233H59.375V23.45h13.581l.522-2.259H56.594v-1.7l1.063-3.715h-3.845v-3.133h25.036zM41.42 13.843v1.934h10.507v3.401H41.42v7.674h-4.08v-7.674H26.891v-3.401H37.34v-1.934h4.08zM18.104.85c-.101 7.245-.24 11.578-1.329 14.927h8.26v3.401h-9.898c-1.58 2.383-4.039 4.58-7.89 7.674H.968l.791-.625c3.87-3.053 6.53-5.151 8.334-7.049H0v-3.401h12.509c1.397-3.018 1.505-7.325 1.609-14.927h3.987zm3.06 20.029l3.867 5.973h-4.81l-3.867-5.973h4.81zm26.895 0l3.867 5.973h-4.811l-3.867-5.973h4.811zm-12.492 0l-3.866 5.973H26.89l3.866-5.973h4.811zM31.374 0l3.771 1.7h15.391v3.958c-1.14.987-2.862 2.413-5.857 3.91a89.124 89.124 0 007.248 1.468v3.63c-5.362-.847-9.447-1.862-12.608-2.907-3.2 1.074-7.255 2.09-12.428 2.904v-3.628a90.857 90.857 0 007.106-1.425c-2.22-1.1-3.65-2.124-4.73-2.898-.165-.118-1.678-1.256-1.678-1.256L31.374 0zM2.314 8.125l8.869 1.226v3.797L2.315 11.92V8.125zM77.365 1.7v8.93H55.295V1.7h22.07zm-31.91 3.4h-12.12c1.39.874 3.292 1.886 6.1 2.896 2.814-1.01 4.692-2.023 6.02-2.895zm27.83 0H59.375V7.23h13.91V5.102zm-70.97-3.4l8.869 1.226v3.797L2.315 5.497V1.7z"
                fill="#ff5e5e"
              ></path>
            </svg>
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
