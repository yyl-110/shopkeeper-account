import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import Header from '../Header/index';
import styles from './index.less';
import { Row, Col } from 'antd';

const videoImg = require('@/assets/videoImg.jpeg');
const arr = [1, 2, 3, 4, 5, 6];

interface IProps {}
const Course: React.FC<IProps> = props => {
  return (
    <div className={styles.course}>
      <Header title="推荐课程" url="/login" />
      <div className={styles.list}>
        <Row>
          {arr.map(i => {
            return (
              <Col span={8} key={i} style={{ padding: '0 12px', marginBottom: '32px' }}>
                <div className={styles.item}>
                  <img src={videoImg} alt="" />
                  <div className={styles.videoTitle}>3分钟掌握如何发布图文内容</div>
                  <div className={styles.readNum}>
                    257.7万<span>人看过</span>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Course;
