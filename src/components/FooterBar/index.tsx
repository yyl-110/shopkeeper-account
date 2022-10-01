import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import { Dropdown, Menu } from 'antd';

interface IProps {}
const FooterBar: React.FC<IProps> = props => {
  return (
    <div className={styles.footerBar}>
      <div className={styles.wrap}>
        <div className={styles.left}>
          <a href="https://job.bytedance.com" target="_blank">
            加入掌柜
          </a>
          <a href="/user_agreement/" target="_blank">
            用户协议
          </a>
          <a href="/privacy_protection/" target="_blank">
            隐私政策
          </a>
          <a href="/media_partners/" target="_blank">
            媒体合作
          </a>
          <a href="https://www.oceanengine.com/resource/toutiao?source=toutiao-pc-footer" target="_blank">
            广告合作
          </a>
          <a href="/friend_link/" rel="" target="_blank">
            友情链接
          </a>
          <a href="/#" rel="" target="_blank">
            <Dropdown
              placement="bottom"
              overlay={
                <Menu
                  items={[
                    {
                      key: '1',
                      label: <div style={{ width: '80px', color: '#999', fontSize: '12px' }}>加入合集</div>,
                    },
                    {
                      key: '2',
                      label: <div style={{ width: '80px', color: '#999', fontSize: '12px' }}>媒体报道</div>,
                    },
                    {
                      key: '3',
                      label: <div style={{ width: '80px', color: '#999', fontSize: '12px' }}>产品合作</div>,
                    },
                    {
                      key: '4',
                      label: <div style={{ width: '80px', color: '#999', fontSize: '12px' }}>头条MCN</div>,
                    },
                    {
                      key: '5',
                      label: <div style={{ width: '80px', color: '#999', fontSize: '12px' }}>联系我们</div>,
                    },
                  ]}
                />
              }
            >
              <span>更多</span>
            </Dropdown>
          </a>
        </div>
        <div className={styles.right}>
          <span>北京抖音信息服务有限公司</span>
          <span>违法和不良信息举报：400-999-9999</span>
          <span>举报邮箱：jubao@toutiao.com</span>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
