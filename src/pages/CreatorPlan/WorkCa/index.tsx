import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import { Breadcrumb, Steps, Row, Col } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import classnames from 'classnames';

const { Step } = Steps;

interface IProps {}
const WorkCa: React.FC<IProps> = props => {
  const data = [
    { title: '身份校验', isFinsh: false },
    { title: '清晰的头像', isFinsh: true },
    { title: '合法的用户名', isFinsh: true },
    { title: '绑定手机号', isFinsh: true },
    { title: '加入创作者计划', isFinsh: true },
    { title: '信用分 = 100分', isFinsh: true },
  ];
  return (
    <div className={classnames(styles.workCa, 'garrContainer')}>
      <Breadcrumb separator={<RightOutlined />} style={{ padding: '26px 0' }}>
        <Breadcrumb.Item>
          <a href="/plan/ca">掌柜认证</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/plan/ca/work">职业认证</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.step}>
        <Steps current={0}>
          <Step title="完成申请条件" />
          <Step title="填写认证信息" />
        </Steps>
      </div>
      <div className={styles.content}>
        <h2>申请条件</h2>
        <Row>
          {data.map((i, inx) => {
            return (
              <Col xs={24} sm={24} md={8} key={inx.toString()} style={{ padding: '0 10px' }}>
                <div className={styles.item}>
                  <div className="c0">{i.title}</div>
                  <div className={classnames(styles.btn, i.isFinsh ? 'c2' : 'cr')}>
                    {i.isFinsh ? '已完成' : '去完成 >'}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <h2>认证特权</h2>
        <div className={styles.privilege}></div>
        <h2>认证标准</h2>
        <div className={styles.standard}></div>
      </div>
    </div>
  );
};

export default WorkCa;
