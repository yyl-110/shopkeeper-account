import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import Header from '../Header/index';
import styles from './index.less';

interface IProps {}
const Course: React.FC<IProps> = props => {
  return (
    <div className={styles.course}>
      <Header title="推荐课程" url="/login" />
      <div className={styles.list}></div>
    </div>
  );
};

export default Course;
