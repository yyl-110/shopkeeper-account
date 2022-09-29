import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import { Dropdown, Menu } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
interface IProps {}
const Notice: React.FC<IProps> = props => {
  const numStyle = {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    color: '#fff',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#ff5e5e',
  };
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <div style={{ width: '90px' }}>
              <a
                rel="noopener noreferrer"
                href="/notice"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#222' }}
              >
                系统消息 <span style={numStyle}>2</span>
              </a>
            </div>
          ),
        },
        {
          key: '2',
          label: (
            <div style={{ width: '90px' }}>
              <a
                rel="noopener noreferrer"
                href="/notice"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#222' }}
              >
                评论
              </a>
            </div>
          ),
        },
        {
          key: '3',
          label: (
            <div style={{ width: '90px' }}>
              <a
                rel="noopener noreferrer"
                href="/notice"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#222' }}
              >
                粉丝
              </a>
            </div>
          ),
        },
        {
          key: '4',
          label: (
            <div style={{ width: '90px' }}>
              <a
                rel="noopener noreferrer"
                href="/notice"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#222' }}
              >
                点赞
              </a>
            </div>
          ),
        },
      ]}
    />
  );
  return (
    <Dropdown overlay={menu}>
      <div className={styles.notice}>
        <svg width="20" height="24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 1.5a1 1 0 00-.968 1.252C4.566 3.657 2 6.898 2 10.758V16.5H1a1 1 0 100 2h18a1 1 0 100-2h-1v-5.742c0-3.86-2.565-7.1-6.032-8.006A1.001 1.001 0 0011 1.5H9zm7 15v-5.74c0-3.457-2.686-6.26-6-6.26s-6 2.803-6 6.26v5.74h12zM7 21a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
            fill="currentColor"
          ></path>
        </svg>
        消息
        <div className={styles.noticeNum}>2</div>
      </div>
    </Dropdown>
  );
};

export default Notice;
