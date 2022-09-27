import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import { Tabs } from 'antd';
import styles from './index.less';
import classnames from 'classnames';

interface IProps {
  dispatch: Dispatch;
  loading: Boolean | undefined;
}
const Setting: React.FC<IProps> = props => {
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
      isDis: false,
    },
    {
      title: '头条号类型',
      text: '个人',
      btn: '更改类型',
      isDis: false,
    },
    {
      title: '头条号ID',
      text: '213131',
      btn: '复制ID',
      isDis: false,
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
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="账号详情" key="1">
          <div className={styles.block}>
            <div className={styles.title}>账号信息</div>
            <div className={styles.blockContainer}>
              {data.map(i => {
                return (
                  <div className={styles.blockItem}>
                    <div className={styles.label}>{i.title}</div>
                    <div className={styles.content}>
                      <div>{i.text}</div>
                      <span className={styles.dis}>{i.btn}</span>
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
        </Tabs.TabPane>
        <Tabs.TabPane tab="功能设置" key="2">
          <div className={styles.settingBody}>
            <div className={styles.showSetting}>
              <div className={styles.title}>发布设置</div>
              <div className={styles.settingItem}>
                <div className={styles.settingTop}>图片优化</div>
                <div className={styles.setContent}>智能优化不清晰的图片</div>
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
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Setting;
