import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import { RightOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

interface IProps {}
const Inspiration: React.FC<IProps> = props => {
  return (
    <div className={styles.inspiration}>
      <div className={styles.header}>
        <span className={styles.homeTitle}>创作灵感</span>
        <a className={styles.more} href="/profile_v4/activity/hot-spot">
          更多
          <RightOutlined style={{ marginLeft: '4px' }} />
        </a>
      </div>
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
