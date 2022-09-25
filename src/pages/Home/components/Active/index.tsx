import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import Header from '../Header/index';

const activeImg = require('@/assets/active.jpeg');

interface IProps {}
const Active: React.FC<IProps> = props => {
  return (
    <div className={styles.active}>
      <div className={styles.activeImg}>
        <img src={activeImg} alt="" />
      </div>
      <div className={styles.activeTitle}>
        <Header title="为你推荐以下创作活动" url="/login" />
      </div>
    </div>
  );
};

export default Active;
