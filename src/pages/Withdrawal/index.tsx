import { FileTextOutlined, SettingOutlined, QuestionCircleOutlined, RightOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import { Row, Col, Button, Table, Tooltip, Modal } from 'antd';
import classnames from 'classnames';

interface IProps {}
const Withdrawal: React.FC<IProps> = props => {
  const [showCa, setShowCa] = useState<boolean>(false);
  const columns = [
    {
      title: '提醒日期',
      dataIndex: 'name',
      key: 'name',
      width: 150,
    },
    {
      title: '结算周期',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '收益合计(含税)',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '扣税',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: '打款金额(税后)',
      key: 'momentF',
      dataIndex: 'tags',
    },
    {
      title: '打款状态',
      key: 'state',
      dataIndex: 'tags',
    },
    {
      title: '操作',
      key: 'options',
      dataIndex: 'tags',
    },
  ];

  return (
    <div className={styles.withdrawal}>
      <header className={styles.header}>
        <span className={styles.title}>提现</span>
        <div className={styles.btn}>
          <span>
            <FileTextOutlined style={{ marginRight: '4px' }} />
            提现教程
          </span>
          <span>
            <SettingOutlined style={{ marginRight: '4px' }} />
            提现设置
          </span>
        </div>
      </header>
      <h2 className={styles.withdrawalTitle}>数据预览</h2>
      <div className={styles.content}>
        <Row>
          <Col xs={24} sm={8}>
            <div className={styles.item}>
              <span className="c1">
                总金额
                <Tooltip title={<div style={{ color: '#222' }}>当前未被提现的收益金额</div>} color="#fff">
                  <QuestionCircleOutlined style={{ marginLeft: '4px' }} />
                </Tooltip>
              </span>
              <p className={styles.primary}>
                0<span>元</span>
              </p>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div className={styles.item}>
              <span className="c1">
                可提现金额
                <Tooltip
                  title={
                    <div style={{ color: '#222' }}>截止 2022-09-25 的可提现的税后总收益，对应的税前总收益为 0 元</div>
                  }
                  color="#fff"
                >
                  <QuestionCircleOutlined style={{ marginLeft: '4px' }} />
                </Tooltip>
              </span>
              <p className={styles.primary}>
                <>0</>
                <span>元</span>
              </p>
              {/* 查看 */}
              <div className={classnames(styles.toView, 'c1', 'hover')}>
                查看明细 <RightOutlined style={{ fontSize: '12px' }} />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div className={styles.item}>
              <span className="c1">累计提现金额</span>
              <p className={styles.primary}>
                <>0</>
                <span>元</span>
              </p>
            </div>
          </Col>
        </Row>
        <div className={styles.apply}>
          <Button
            onClick={() => {
              setShowCa(true);
            }}
          >
            申请提现
          </Button>
        </div>

        {/* 提现明细 */}
        <div className={styles.detail}>
          <span className={styles.title}>提现明细</span>
          <span className={styles.unit}>单位： 元</span>
        </div>
        <Table columns={columns} dataSource={[]} scroll={{ y: 300, x: '100vw' }} />
      </div>
      <Modal
        title="请完成实名认证"
        open={showCa}
        footer={null}
        onCancel={() => {
          setShowCa(false);
        }}
        wrapClassName="modalWrap"
        getContainer={document.body}
      >
        <div className="modalContent">
          <div>
            <h1 className="sec-title">大陆作者认证</h1>
            <div className="title">应网络实名制要求，完成实名认证后才可以发表文章视频等内容，以保护账号安全。</div>
            <div className="steps-wrap">
              <div className="step1">
                <p className="step-name">
                  <span className="dot">1</span>打开“今日头条App”
                </p>
                <p className="intro">登录当前账号（今日头条极速版应用暂不支持）</p>
                <div className="step-content">
                  <img className="qrcode" alt="qrcode" src="//p3.toutiaoimg.com/large/8b5f0003053fa12a013a" />
                  <span>扫码下载“今日头条App”</span>
                </div>
              </div>
              <div className="step2">
                <p className="step-name">
                  <span className="dot">2</span>打开“我的”
                </p>
                <p className="intro">点击“个人主页 - 申请认证 - 实名认证未完成”完成实名认证</p>
                <div className="step-content">
                  <img
                    className="realname"
                    alt="realname-app"
                    src="https://lf6-cdn-tos.bytegoofy.com/goofy/pgcfe/mp/web/assets/phone-verify_7b3b42a1.png"
                  />
                </div>
              </div>
            </div>
            <h1 className="sec-title oversea">
              港澳台及海外作者认证
              <a className="oversea-verify-entry" href="/verify" style={{ color: '#1356bd' }}>
                请点击这里完成实名认证
              </a>
            </h1>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Withdrawal;
