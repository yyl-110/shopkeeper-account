import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import { RightOutlined } from '@ant-design/icons';

interface IProps {}
const Announcement: React.FC<IProps> = props => {
  return (
    <div className={styles.announcement}>
      <div className={styles.homeNotice}>
        <div className={styles.header}>
          <div className={styles.annBtn}>公告</div>
          <a className={styles.more} href="/profile_v4/index/notice">
            更多
            <RightOutlined />
          </a>
        </div>
        <div className={styles.content}>
          <div className={styles.item}>
            <span style={{ color: '#666' }}>09-05</span>
            <div className={styles.text}>今日头条关于开展评论专项整治公告（第四期）</div>
          </div>
          <div className={styles.item}>
            <span style={{ color: '#666' }}>09-05</span>
            <div className={styles.text}>今日头条关于开展评论专项整治公告（第四期）</div>
          </div>
          <div className={styles.item}>
            <span style={{ color: '#666' }}>09-05</span>
            <div className={styles.text}>今日头条关于开展评论专项整治公告（第四期）</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
