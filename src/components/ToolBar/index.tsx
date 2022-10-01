import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import classnames from 'classnames';
import { BackTop } from 'antd';

interface IProps {}
const ToolBar: React.FC<IProps> = props => {
  const goTop = () => {
    document.body.firstElementChild?.scrollTo(0, 0);
  };
  return (
    <div className={styles['toolBar']}>
      <div
        className={classnames(styles.wrapper, styles.goTop)}
        onClick={() => {
          goTop();
        }}
      >
        <svg width="32" height="32" className={styles['feedback-questions-icon']}>
          <path
            fill="#666"
            d="M15.47 9.136a.75.75 0 011.017-.04l.043.04 9 9a.75.75 0 01-1.017 1.101l-.043-.04-8.47-8.47-8.47 8.47a.75.75 0 01-1.017.04l-.043-.04a.749.749 0 01-.04-1.018l.04-.043 9-9z"
          ></path>
        </svg>
      </div>
      <div className={styles.feedBack}>
        <a href="//baike.toutiao.com" className={styles.wrapper} target="_blank" rel="noopener noreferrer">
          <svg width="32" height="32" className="feedback-questions-icon feedback-wrapper-icon">
            <path
              fill="#666"
              d="M16 4.917c6.121 0 11.083 4.962 11.083 11.083S22.121 27.083 16 27.083c-1.61 0-3.174-.344-4.606-1H6.667a.749.749 0 01-.75-.75v-4.726a11.04 11.04 0 01-1-4.607C4.917 9.879 9.879 4.917 16 4.917zm0 1.5A9.582 9.582 0 006.417 16c0 1.445.32 2.843.927 4.118.048.1.073.21.073.323v4.142h4.143c.112 0 .222.025.323.073a9.53 9.53 0 004.117.927c5.293 0 9.583-4.29 9.583-9.583S21.293 6.417 16 6.417zm0 13.25a1 1 0 110 2 1 1 0 010-2zm.083-10c2.064 0 3.75 1.616 3.75 3.625 0 1.397-.55 2.1-1.832 2.96l-.112.075c-.84.563-1.056.826-1.056 1.423a.75.75 0 11-1.5 0c0-1.239.503-1.853 1.72-2.669l.112-.075c.91-.61 1.168-.94 1.168-1.714 0-1.166-1-2.125-2.25-2.125s-2.25.959-2.25 2.125a.749.749 0 11-1.5 0c0-2.01 1.686-3.625 3.75-3.625z"
            ></path>
          </svg>
          {/* <div className="feedback-wrapper-text">常见问题</div> */}
        </a>
        <a
          className={styles.wrapper}
          target="_blank"
          rel="noopener noreferrer"
          href="/profile_v4_public/public/feedback?source=index"
        >
          <div className="feedback-wrapper-icon">
            <svg width="32" height="32" className="feedback-questions-icon">
              <path
                fill="#666"
                d="M26.083 18.333c0 .524-.23.993-.593 1.314l-4.688 5.565a1.743 1.743 0 01-1.008.591l-3.986.767a.75.75 0 01-.283-1.473l3.985-.767a.245.245 0 00.145-.084l3.505-4.164-.827.001a1.75 1.75 0 01-1.75-1.75V15c0-.966.784-1.75 1.75-1.75h2c.054 0 .107.002.16.007a8.42 8.42 0 00-8.326-7.174h-.334a8.419 8.419 0 00-8.325 7.175c.052-.006.105-.008.159-.008h2c.966 0 1.75.784 1.75 1.75v3.333a1.75 1.75 0 01-1.75 1.75h-2a1.75 1.75 0 01-1.75-1.75V14.5c0-5.477 4.44-9.917 9.916-9.917h.334c5.476 0 9.916 4.44 9.916 9.917v3.833zM9.667 14.75h-2a.25.25 0 00-.25.25v3.333c0 .138.112.25.25.25h2a.25.25 0 00.25-.25V15a.25.25 0 00-.25-.25zm14.666 0h-2a.25.25 0 00-.25.25v3.333c0 .138.112.25.25.25h2a.26.26 0 00.112-.026l.08-.094a.249.249 0 00.058-.161V15a.25.25 0 00-.25-.25z"
              ></path>
            </svg>
          </div>
          {/* <div className="feedback-wrapper-text">问题咨询</div> */}
        </a>
      </div>
    </div>
  );
};

export default ToolBar;
