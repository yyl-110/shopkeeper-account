import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import Header from '../Header/index';
import { Row, Col } from 'antd';

const activeImg = require('@/assets/active.jpeg');
const room = require('@/assets/room.jpeg');

interface IProps {}
const Active: React.FC<IProps> = props => {
  return (
    <div className={styles.active}>
      <div className={styles.activeImg}>
        <img src={activeImg} alt="" />
      </div>
      <div className={styles.activeTitle}>
        <Header title="为你推荐以下精品楼盘" url="/login" />
      </div>
      <div className={styles.list}>
        <Row>
          <Col span={12} style={{ padding: '0 12px' }}>
            <div className={styles.item}>
              <img src={room} alt="" />
              <div className={styles.tip}>[黄江]</div>
              <div className={styles.bar}>
                <span>和光和光</span>
                <span className={styles.price}>21000元/平米</span>
              </div>
            </div>
          </Col>
          <Col span={12} style={{ padding: '0 12px' }}>
            <div className={styles.item}>
              <img src={room} alt="" />
              <div className={styles.bar}>
                <span>和光和光</span>
                <span className={styles.price}>21000元/平米</span>
              </div>
            </div>
          </Col>
          <Col span={12} style={{ padding: '0 12px' }}>
            <div className={styles.item}>
              <img src={room} alt="" />
              <div className={styles.bar}>
                <span>和光和光</span>
                <span className={styles.price}>21000元/平米</span>
              </div>
            </div>
          </Col>
          <Col span={12} style={{ padding: '0 12px' }}>
            <div className={styles.item}>
              <img src={room} alt="" />
              <div className={styles.bar}>
                <span>和光和光</span>
                <span className={styles.price}>21000元/平米</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Active;
