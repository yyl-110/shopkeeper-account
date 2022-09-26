import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import classnames from 'classnames';
import { Button } from 'antd';

interface IProps {
  dispatch: Dispatch;
  loading: Boolean | undefined;
}
const Certification: React.FC<IProps> = props => {
  const data = [
    {
      title: '加V认证',
      id: 1,
      list: [
        {
          mintitle: '职业认证',
          desc: '适用于有特定职业或附加身份的作者，如医生等',
          haveDetail: true,
          btn: '去认证',
          disabead: false,
          url: '/plan/ca/work',
        },
        {
          mintitle: '兴趣认证',
          desc: '适用于在某个领域持续贡献优质内容的作者',
          haveDetail: true,
          btn: '去认证',
          disabead: true,
          url: '/login',
        },
        {
          mintitle: '机构认证',
          desc: '适用于在某个领域持续贡献优质内容的作者',
          haveDetail: true,
          btn: '去认证',
          disabead: true,
        },
        {
          mintitle: '企业认证',
          desc: '适用于在某个领域持续贡献优质内容的作者',
          haveDetail: false,
          btn: '去认证',
          disabead: true,
        },
      ],
    },
    {
      title: '资质证明',
      id: 2,
      list: [
        {
          mintitle: '创作能力证明',
          desc: '提交你的其它自媒体平台账号信息，提高站内声明原创成功率；帮助平台快速发现你，为你提供更好的资源和服务',
          haveDetail: true,
          btn: '修改认证',
          disabead: false,
        },
        {
          mintitle: '财经/健康领域资质证明',
          desc: '提交你的其它自媒体平台账号信息，提高站内声明原创成功率；帮助平台快速发现你，为你提供更好的资源和服务',
          haveDetail: true,
          btn: '去证明',
          disabead: false,
        },
      ],
    },
  ];
  return (
    <div className={classnames(styles.certification, 'garrContainer')}>
      <header>掌柜认证</header>
      <div className={styles.data}>
        {data.map(i => {
          return (
            <div className={styles.wrap}>
              <h2 className={styles.name}>{i.title}</h2>
              <div className={styles.content}>
                {i.list.map((item, inx) => {
                  return (
                    <div className={styles.item} key={inx.toString()}>
                      <div className={styles.left}>
                        <div className={styles.title}>{item.mintitle}</div>
                        <div className={styles.desc}>
                          {item.desc}
                          {item.haveDetail && (
                            <a href="/login" style={{ color: '#1356bd' }}>
                              了解详情
                            </a>
                          )}
                        </div>
                      </div>
                      <div className={styles.btn}>
                        <Button
                          type="primary"
                          disabled={item.disabead}
                          onClick={() => {
                            if (!item.url) return;
                            history.push(item.url);
                          }}
                        >
                          {item.btn}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certification;
