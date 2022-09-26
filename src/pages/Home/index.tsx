import React, { useEffect, useState } from 'react';
import { Dispatch } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import { Col, Row } from 'antd';
import ColItem from './components/ColItem/index';
import Announcement from './components/Announcement/index';
import Inspiration from './components/Inspiration/index';
import Active from './components/Active/index';
import Course from './components/Course/index';
import GoodWorks from './components/GoodWorks';

interface IProps {
  dispatch: Dispatch;

  loading: Boolean | undefined;
}
const Home: React.FC<IProps> = props => {
  return (
    <div className={styles.containerWrap}>
      <Row>
        <Col xs={24} lg={16} style={{ padding: '0 12px' }}>
          <ColItem />
          <Active />
          {/* <Course /> */}
        </Col>
        <Col xs={24} lg={8} style={{ padding: '0 12px' }}>
          <Announcement />
          <Inspiration />
          <GoodWorks />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
