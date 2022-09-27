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
        <div className={styles.privilege}>
          <div className={styles.icon}>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxIDE4Ljk5OTlDMjEgMTAuOTk5OSAzMyA5IDMzIDlDMzMgOSAzMyAxMi41MTYxIDMzIDE3QzMzIDI2LjAwMDEgMjEgMjggMjEgMjhDMjEgMjggMjEgMjUuMDk2NyAyMSAxOC45OTk5WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8cGF0aCBkPSJNMTkgMjEuOTk5OUMxOSAxMy45OTk5IDcgMTIgNyAxMkM3IDEyIDcgMTUuNTE2MSA3IDIwQzcgMjkuMDAwMSAxOSAzMSAxOSAzMUMxOSAzMSAxOSAyOC4wOTY3IDE5IDIxLjk5OTlaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIzMyIgeTE9IjguOTk5OTQiIHgyPSIyMSIgeTI9IjI3Ljk5OTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzM3REM2QiIvPgo8c3RvcCBvZmZzZXQ9IjAuNDM4MjY2IiBzdG9wLWNvbG9yPSIjNDFDQjZDIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzREQjY2RSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSI3IiB5MT0iMTEuOTk5OSIgeDI9IjE5IiB5Mj0iMzAuOTk5OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMzdEQzZCIi8+CjxzdG9wIG9mZnNldD0iMC40MzgyNjYiIHN0b3AtY29sb3I9IiM0MUNCNkMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNERCNjZFIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="
              alt=""
            />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.title}>创作权益绿色通道</div>
            <div className="c2 hover">直接开通百粉和千粉权益，提升变现能力</div>
          </div>
        </div>
        <h2>认证标准</h2>
        <div className={styles.privilege}>
          <div className={styles.icon}>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxIDE4Ljk5OTlDMjEgMTAuOTk5OSAzMyA5IDMzIDlDMzMgOSAzMyAxMi41MTYxIDMzIDE3QzMzIDI2LjAwMDEgMjEgMjggMjEgMjhDMjEgMjggMjEgMjUuMDk2NyAyMSAxOC45OTk5WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8cGF0aCBkPSJNMTkgMjEuOTk5OUMxOSAxMy45OTk5IDcgMTIgNyAxMkM3IDEyIDcgMTUuNTE2MSA3IDIwQzcgMjkuMDAwMSAxOSAzMSAxOSAzMUMxOSAzMSAxOSAyOC4wOTY3IDE5IDIxLjk5OTlaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIzMyIgeTE9IjguOTk5OTQiIHgyPSIyMSIgeTI9IjI3Ljk5OTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzM3REM2QiIvPgo8c3RvcCBvZmZzZXQ9IjAuNDM4MjY2IiBzdG9wLWNvbG9yPSIjNDFDQjZDIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzREQjY2RSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSI3IiB5MT0iMTEuOTk5OSIgeDI9IjE5IiB5Mj0iMzAuOTk5OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMzdEQzZCIi8+CjxzdG9wIG9mZnNldD0iMC40MzgyNjYiIHN0b3AtY29sb3I9IiM0MUNCNkMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNERCNjZFIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="
              alt=""
            />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.title}>创作权益绿色通道</div>
            <div className="c2 hover">直接开通百粉和千粉权益，提升变现能力</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCa;
