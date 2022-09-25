import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
interface IProps {}
const Notice: React.FC<IProps> = props => {
  return (
    <div className={styles.notice}>
      <svg width="20" height="24" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 1.5a1 1 0 00-.968 1.252C4.566 3.657 2 6.898 2 10.758V16.5H1a1 1 0 100 2h18a1 1 0 100-2h-1v-5.742c0-3.86-2.565-7.1-6.032-8.006A1.001 1.001 0 0011 1.5H9zm7 15v-5.74c0-3.457-2.686-6.26-6-6.26s-6 2.803-6 6.26v5.74h12zM7 21a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
          fill="currentColor"
        ></path>
      </svg>
      消息
    </div>
  );
};

export default Notice;
