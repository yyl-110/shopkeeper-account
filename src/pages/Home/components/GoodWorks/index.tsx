import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import Header from '../Header/index';
import styles from './index.less';
import { Row, Col } from 'antd';

const videoImg = require('@/assets/videoImg.jpeg');
const arr = [1, 2, 3, 4, 5, 6];

interface IProps {}
const GoodWorks: React.FC<IProps> = props => {
  return (
    <div className={styles.goodWorks}>
      <Header title="湾区城更" url="/login" />
      <div className={styles.list}>
        <Row>
          {arr.map(i => {
            return (
              <Col xs={24} lg={24} key={i} style={{ marginBottom: '32px' }}>
                <div className={styles.item}>
                  <img src={videoImg} alt="" />
                  <div className={styles.content}>
                    <div className={styles.videoTitle}>
                      3分钟掌握如何发布图文内容3分钟掌握如何发布图文内容3分钟掌握如何发布图文内容3分钟掌握如何发布图文内容
                    </div>
                    <div className={styles.readNum}>
                      257.7万<span>人看过</span>
                    </div>
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

export default GoodWorks;
