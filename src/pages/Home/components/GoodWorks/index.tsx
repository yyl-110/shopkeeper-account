import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import Header from '../Header/index';

import styles from './index.less';

interface IProps {}
const GoodWorks: React.FC<IProps> = props => {
  return (
    <div className={styles.goodWorks}>
      <Header title="优秀作品榜" url="/login" />
    </div>
  );
};

export default GoodWorks;
