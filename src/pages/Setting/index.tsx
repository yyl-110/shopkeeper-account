import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import { Tabs, Modal, Input, Upload, Progress, Button, Switch, Row, Col, Pagination } from 'antd';
import styles from './index.less';
import classnames from 'classnames';
import { CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

interface IProps {
  dispatch: Dispatch;
  loading: Boolean | undefined;
}
const Setting: React.FC<IProps> = props => {
  const [activeKey, setActiveKey] = useState('1');
  const [isModalOpen, setModalOpen] = useState(false);
  const [nameOpen, setNameOpen] = useState(false);
  const data = [
    {
      title: '用户名',
      text: 'yyl98989',
      btn: '编辑',
      isDis: false,
    },
    {
      title: '用户简介',
      text: 'd',
      btn: '编辑',
      isDis: false,
    },
    {
      title: '用户头像',
      text: 'yyl98989',
      btn: '编辑',
      isDis: true,
      url: require('../../assets/default_avatar.png'),
    },
    {
      title: '头条号类型',
      text: '个人',
      btn: '更改类型',
      isDis: true,
    },
    {
      title: '头条号ID',
      text: '213131',
      btn: '复制ID',
      isDis: true,
    },
    {
      title: '作者二维码',
      text: '-',
      btn: '下载二维码',
      isDis: false,
    },
  ];
  return (
    <div className={classnames(styles.setting, 'garrContainer')}>
      <Tabs
        defaultActiveKey="1"
        activeKey={activeKey}
        onChange={key => {
          setActiveKey(key);
        }}
      >
        <Tabs.TabPane tab="账号详情" key="1"></Tabs.TabPane>
        <Tabs.TabPane tab="功能设置" key="2"></Tabs.TabPane>
        <Tabs.TabPane tab="黑名单" key="3"></Tabs.TabPane>
      </Tabs>
      <div className={styles.setContent}>
        {activeKey === '1' && (
          <>
            <div className={styles.block}>
              <div className={styles.title}>账号信息</div>
              <div className={styles.blockContainer}>
                {data.map(i => {
                  return (
                    <div className={styles.blockItem}>
                      <div className={styles.label}>{i.title}</div>
                      <div className={styles.content}>
                        {i.url ? (
                          <div className={styles.imgWrap}>
                            <img src={i.url} alt="" />
                          </div>
                        ) : (
                          <>
                            <div>{i.text}</div>
                            <span
                              className={i.isDis ? styles.dis : ''}
                              onClick={() => {
                                if (!i.isDis) {
                                  if (i.title === '用户名') {
                                    setNameOpen(true);
                                  } else if (i.title === '用户简介') {
                                    setModalOpen(true);
                                  }
                                }
                              }}
                            >
                              {i.btn}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.title}>运营信息</div>
              <div className={styles.blockContainer}>
                <div className={styles.blockItem}>
                  <div className={styles.label}>运营人</div>
                  <div className={styles.content}>
                    <div>无</div>
                  </div>
                </div>
                <div className={styles.blockItem}>
                  <div className={styles.label}>联系邮箱</div>
                  <div className={styles.content}>
                    <div>无</div>
                    <span className={styles.dis}>填写邮箱</span>
                  </div>
                </div>
                <div className={styles.blockItem}>
                  <div className={styles.label}>所在地</div>
                  <div className={styles.content}>
                    <div>无</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.title}>安全中心</div>
              <div className={styles.blockContainer}>
                <div className={styles.blockItem}>
                  <div className={styles.label}>安全评分</div>
                  <div className={styles.safeContent}>
                    <Progress
                      percent={40}
                      showInfo={false}
                      style={{ height: '24px' }}
                      strokeColor={{
                        '0%': '#fdfdfd',
                        '100%': '#f04142',
                      }}
                    />
                    <p className={styles.hint}>你的账号存在安全风险，建议优化以下 2 项</p>
                    <div className={styles.safeList}>
                      <div className={styles.safeItem}>
                        <div className={styles.safeLable}>
                          <CheckCircleOutlined style={{ marginRight: '12px', color: 'rgb(52, 170, 84)' }} /> 绑定手机
                        </div>
                        <div className={styles.safeText}>
                          当前已绑定158******41
                          <span>更换手机</span>
                        </div>
                      </div>
                      <div className={styles.safeItem}>
                        <div className={styles.safeLable}>
                          <ExclamationCircleOutlined style={{ marginRight: '12px', color: 'rgb(247, 117, 43)' }} />
                          登录密码
                        </div>
                        <div className={styles.safeText}>
                          密码半年内未修改过 <span>修改</span>
                        </div>
                      </div>
                      <div className={styles.safeItem}>
                        <div className={styles.safeLable}>
                          <ExclamationCircleOutlined style={{ marginRight: '12px', color: 'rgb(247, 117, 43)' }} />
                          可信校验
                        </div>
                        <div className={styles.safeText}>
                          开启后，非可信设备登录需验证手机号
                          <span>开启</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.blockItem}>
                  <div className={styles.label}>安全评分</div>
                  <div className={styles.label}>运营人</div>
                  <div className={styles.content}>
                    <div>登录、敏感操作记录</div>
                    <span>查看</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeKey === '2' && (
          <div className={styles.settingBody}>
            <div className={styles.showSetting}>
              <div className={styles.title}>发布设置</div>
              <div className={styles.settingItem}>
                <div className={styles.settingTop}>图片优化</div>
                <div className={styles.setContent}>智能优化不清晰的图片</div>
                <Switch defaultChecked style={{ marginLeft: '20px' }} />
              </div>
              <div className={styles.settingItem}>
                <div className={styles.settingTop}>图片优化</div>
                <div className={styles.setContent}>智能优化不清晰的图片</div>
              </div>
              <div className={styles.settingItem}>
                <div className={styles.settingTop}>图片优化</div>
                <div className={styles.setContent}>智能优化不清晰的图片</div>
              </div>
            </div>
          </div>
        )}
        {activeKey === '3' && (
          <div className={styles.blacklist}>
            <div className={classnames(styles.perpleNum)}>共 2 人</div>
            <Row>
              <Col span={12} style={{ padding: '0 12px' }}>
                <div className={styles.userItem}>
                  <img src={require('../../assets/default_avatar.png')} alt="" />
                  <div>342424</div>
                  <Button>解除拉黑</Button>
                </div>
              </Col>
              <Col span={12} style={{ padding: '0 12px' }}>
                <div className={styles.userItem}>
                  <img src={require('../../assets/default_avatar.png')} alt="" />
                  <div>342424</div>
                  <Button>解除拉黑</Button>
                </div>
              </Col>
            </Row>
            <div className={styles.page}>
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </div>
        )}
      </div>

      <Modal
        title="编辑用户简介"
        open={isModalOpen}
        wrapClassName="editModal"
        okText="保存"
        width={420}
        onCancel={() => {
          setModalOpen(false);
        }}
      >
        <Input.TextArea placeholder="添加简介，让大家更好的认识您" showCount autoSize />
        <div className="hint">
          本月还能编辑简介 5 次，要求内容完整通顺，无特殊符号，请勿添加任何联系方式如微博、手机号、QQ
        </div>
      </Modal>

      <Modal
        title="编辑用户名"
        open={nameOpen}
        wrapClassName="editNameModal"
        okText="保存"
        width={420}
        onCancel={() => {
          setNameOpen(false);
        }}
      >
        <Input placeholder="请输入用户名" showCount />
        <div className="hint">
          本月还能编辑简介 1 次，要求内容完整通顺，无特殊符号，请勿添加任何联系方式如微博、手机号、QQ
        </div>
      </Modal>
    </div>
  );
};

export default Setting;
