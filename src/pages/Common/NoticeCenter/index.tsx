import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import classnames from 'classnames';
import { SettingOutlined } from '@ant-design/icons';
import { RightContent } from '@/components/GlobalHeader';
import { Tabs, Empty } from 'antd';
interface IProps {
  dispatch: Dispatch;
  loading: Boolean | undefined;
}
const NoticeCenter: React.FC<IProps> = props => {
  return (
    <div className={classnames(styles.noticeCenter)}>
      <RightContent showText={false} backText="消息中心" />
      <div className={styles.wrapper}>
        <header>
          <span className={styles.title}>消息中心</span>
          <span className={styles.set}>
            <SettingOutlined style={{ marginRight: '5px' }} />
            消息设置
          </span>
        </header>
        <div className={styles.noticeContent}>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="系统通知" key="1">
              <div className={styles.msgList}>
                <div className={styles.item}>
                  <img src={require('../../../assets/default_avatar.png')} alt="" />
                  <div className={styles.msgContent}>
                    <div className={styles.msgheader}>系统通知</div>
                    <div className={styles.itemBody}>
                      亲爱的用户，你好，感谢参与「内容品鉴官」测验。
                      遗憾的通知你，经过综合评估，本次测验未通过。感谢你对「内容品鉴官」的关注，后面会陆续放出再次测验的机会，敬请关注。
                    </div>
                    <div className={styles.itemFooter}>07-24 11:36</div>
                  </div>
                </div>
                <div className={styles.item}>
                  <img src={require('../../../assets/default_avatar.png')} alt="" />
                  <div className={styles.msgContent}>
                    <div className={styles.msgheader}>系统通知</div>
                    <div className={styles.itemBody}>
                      亲爱的用户，你好，感谢参与「内容品鉴官」测验。
                      遗憾的通知你，经过综合评估，本次测验未通过。感谢你对「内容品鉴官」的关注，后面会陆续放出再次测验的机会，敬请关注。
                    </div>
                    <div className={styles.itemFooter}>07-24 11:36</div>
                  </div>
                </div>
                <div className={styles.item}>
                  <img src={require('../../../assets/default_avatar.png')} alt="" />
                  <div className={styles.msgContent}>
                    <div className={styles.msgheader}>系统通知</div>
                    <div className={styles.itemBody}>
                      亲爱的用户，你好，感谢参与「内容品鉴官」测验。
                      遗憾的通知你，经过综合评估，本次测验未通过。感谢你对「内容品鉴官」的关注，后面会陆续放出再次测验的机会，敬请关注。
                    </div>
                    <div className={styles.itemFooter}>07-24 11:36</div>
                  </div>
                </div>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="评论" key="2">
              <Empty style={{ marginTop: '200px' }} image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="粉丝" key="3">
              <Empty style={{ marginTop: '200px' }} image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="点赞" key="4">
              <Empty style={{ marginTop: '200px' }} image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="私信" key="5">
              <Empty style={{ marginTop: '200px' }} image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </Tabs.TabPane>
          </Tabs>
          {/* <span className="c2">暂无新增系统通知</span> */}
        </div>
      </div>
    </div>
  );
};

export default NoticeCenter;
