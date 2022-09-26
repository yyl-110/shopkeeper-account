import React, { useEffect, useState } from 'react';
import { connect, Dispatch } from 'umi';
import styles from './index.less';

interface IProps {}
const GlobalFooter: React.FC<IProps> = props => {
  return (
    <div className={styles.footer}>
      <a target="_blank" rel="noopener noreferrer" className="sfoot_about" href="//web.toutiao.com/about/">
        关于掌柜
      </a>
      <span>|</span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/profile_v4_public/public/protocol/agreement"
        className={styles.text}
      >
        用户协议
      </a>
      <span>|</span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/profile_v4_public/public/protocol/privacy"
        className={styles.text}
      >
        隐私政策
      </a>
      <span>|</span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://baike.toutiao.com/detail/236/238/0"
        className={styles.operation}
      >
        社区规范
      </a>
      <span>|</span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/profile_v4_public/public/discipline-convention"
        className={styles.text}
      >
        自律公约
      </a>
      <span>|</span>
      <span>
        <a target="_blank" rel="noopener noreferrer" href="/profile_v4_public/public/complains" className={styles.text}>
          侵权投诉
        </a>
        <span>|</span>
      </span>
      <a target="_blank" rel="noopener noreferrer" href="//web.toutiao.com/contact/" className="sfoot_contact">
        联系我们
      </a>
      <span style={{ whiteSpace: 'nowrap' }}>
        <span className="sfoot_copyright">© 2022 toutiao.com</span>
        <span>&nbsp;All Rights Reserved</span>
      </span>
    </div>
  );
};

export default GlobalFooter;
