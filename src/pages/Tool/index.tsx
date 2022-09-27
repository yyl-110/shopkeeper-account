import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import classnames from 'classnames';
import { DesktopOutlined, ScanOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { message } from '@umijs/plugin-request/lib/ui';

interface IProps {
  dispatch: Dispatch;
  loading: Boolean | undefined;
}
const Img: React.FC<IProps> = props => {
  const prop = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info: any) {},
  };
  return (
    <div className={classnames(styles.imgWrapper, 'garrContainer')}>
      <div className={styles.header}>图片素材</div>
      <div className={styles.toolBar}>
        <div className={styles.left}>
          <SettingOutlined style={{ marginRight: '4px' }} />
          批量管理
        </div>
        <div className={styles.rightBtn}>
          <Upload
            {...prop}
            itemRender={val => {
              console.log('val:', val);
              return <div></div>;
            }}
          >
            <Button type="primary">
              <DesktopOutlined />
              本地上传
            </Button>
          </Upload>
          <Button type="primary">
            <ScanOutlined />
            扫码上传
          </Button>
        </div>
      </div>
      <div className={styles.imgList}>
        <div className={styles.item}>
          <img src={require('../../assets/zgh.png')} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Img;
