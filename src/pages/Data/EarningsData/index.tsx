import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import { Tabs } from 'antd';
import All from './components/All/index';
import { SettingOutlined } from '@ant-design/icons';

interface IProps {
  dispatch: Dispatch;
  loading: Boolean | undefined;
}
const EarningsData: React.FC<IProps> = props => {
  return (
    <div className={styles.earnIngData}>
      <main>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="整体收益" key="1"></Tabs.TabPane>
          {/* <Tabs.TabPane tab="创作收益" key="2">
            创作
          </Tabs.TabPane> */}
        </Tabs>
        <span className={styles.setting}>
          <SettingOutlined style={{ marginRight: '4px' }} />
          收益设置
        </span>
      </main>
      <All />
    </div>
  );
};

export default EarningsData;
