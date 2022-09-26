import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import { RightOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import Header from '../Header/index';

interface IProps {}
const Inspiration: React.FC<IProps> = props => {
  return (
    <div className={styles.inspiration}>
      <Header title="物业观察" url="/login" />
      <div className={styles.list}>
        <Row>
          <Col xs={12} lg={24}>
            <div className={styles.item}>
              <div>#突然彩票中奖五千万你会立刻离职吗#</div>
              <RightOutlined style={{ width: '88px' }} />
            </div>
            <div className={styles.item}>
              <div>#突然彩票中奖五千万你会立刻离职吗#</div>
              <RightOutlined style={{ width: '88px' }} />
            </div>
            <div className={styles.item}>
              <div>#突然彩票中奖五千万你会立刻离职吗#</div>
              <RightOutlined style={{ width: '88px' }} />
            </div>
          </Col>
          <Col xs={12} lg={24}>
            <div className={styles.item}>
              <div>#突然彩票中奖五千万你会立刻离职吗#</div>
              <RightOutlined style={{ width: '88px' }} />
            </div>
            <div className={styles.item}>
              <div>#突然彩票中奖五千万你会立刻离职吗#</div>
              <RightOutlined style={{ width: '88px' }} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Inspiration;
