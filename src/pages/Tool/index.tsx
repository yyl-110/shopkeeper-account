import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import classnames from 'classnames';
import { CheckOutlined, DesktopOutlined, ScanOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Upload, Radio } from 'antd';
import { message } from '@umijs/plugin-request/lib/ui';

interface IProps {
  dispatch: Dispatch;
  loading: Boolean | undefined;
}
const Img: React.FC<IProps> = props => {
  const [showTool, setShowTool] = useState(false);
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
      {!showTool ? (
        <div className={styles.toolBar}>
          <div className={styles.left} onClick={() => setShowTool(!showTool)}>
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
      ) : (
        <div className={styles.optionBar}>
          <span className={styles.chooseImg}>
            <Radio>本页全选</Radio>
            已选择&nbsp;0&nbsp;张图片
          </span>
          <div className={styles.btn}>
            <span>批量删除</span>
            <span onClick={() => setShowTool(!showTool)}>完成管理</span>
          </div>
        </div>
      )}

      <div className={styles.imgList}>
        <div className={styles.item}>
          <img src={require('../../assets/zgh.png')} alt="" />
          {showTool && (
            <div className={styles.mask}>
              <div className={classnames(styles.choose, styles.select)}>
                <CheckOutlined />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Img;
