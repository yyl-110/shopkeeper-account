import { Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './index.less';
import Logout from './Logout';
import Avatar from './Avatar';
import Notice from './Notice';
import { LeftCircleOutlined, RightOutlined } from '@ant-design/icons';
import { history } from 'umi';

interface IProps {
  showText?: boolean;
  backText?: string;
}
const RightContent: React.FC<IProps> = props => {
  const { showText = true, backText = '' } = props;
  return (
    <div className={styles.rightContent}>
      {backText && (
        <div className={styles.goBack}>
          <div className={styles.logo}>
            <svg
              version="1.1"
              id="图层_2"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="77px"
              height="27px"
              viewBox="0 0 77 27"
              enable-background="new 0 0 77 27"
            >
              <g enable-background="new    ">
                <path
                  fill="#FF5E5E"
                  d="M0.847,20.105h10.91v-1.146H2.541v-2.018h9.216V15.82l-9.54,0.074c-0.116-0.613-0.274-1.328-0.473-2.141
		c8.369,0,15.476-0.101,21.321-0.3l0.474,2.216l-8.594,0.125v1.146h8.17v2.018h-8.17v1.146h10.013v2.066H14.945v0.598
		c0,0.963-0.226,1.697-0.679,2.205c-0.453,0.506-1.063,0.789-1.831,0.846c-0.768,0.059-2.281,0.096-4.54,0.113
		c-0.149-0.814-0.357-1.703-0.623-2.666c0.955,0.084,1.909,0.125,2.864,0.125c1.079,0,1.619-0.406,1.619-1.221H0.847V20.105z
		 M11.109,1.448h3.288v2.74h2.565c0.673-0.972,1.279-1.885,1.818-2.74l2.616,1.221l-1.071,1.52h4.234v5.156h-3.039V6.629H4.035
		v2.715H0.996V4.188h4.16c-0.291-0.481-0.598-0.972-0.922-1.47l2.441-1.271C7.29,2.32,7.904,3.234,8.519,4.188h2.591V1.448z
		 M4.957,12.856V7.725h15.593v5.131H4.957z M7.996,10.963h9.515V9.618H7.996V10.963z"
                />
                <path
                  fill="#FF5E5E"
                  d="M25.805,15.971c1.37-2.292,2.42-4.576,3.151-6.851h-2.752V6.006h3.064V1.623h3.338v4.384h2.466V9.12h-2.466
		v1.968c1.121,0.582,2.158,1.158,3.113,1.731V3.017h14.348v3.089h-10.96v2.84h10.112v10.113H39.106v2.84h11.308v3.088H35.719V13.23
		l-1.345,2.84c-0.556-0.508-1.146-1.014-1.768-1.52v11.531h-3.338V15.359c-0.706,1.719-1.586,3.434-2.64,5.145
		C26.461,19.375,26.187,17.863,25.805,15.971z M45.832,16.02v-4.035h-6.726v4.035H45.832z"
                />
                <path
                  fill="#FF5E5E"
                  d="M51.41,12.084h24.734v3.039H58.995l-0.236,1.568h14.422l-0.498,5.406c-0.124,1.27-0.592,2.201-1.401,2.795
		s-1.855,0.898-3.139,0.916c-1.282,0.016-3.654,0.025-7.117,0.025c-0.232-1.096-0.54-2.275-0.922-3.537
		c2.416,0.191,4.297,0.285,5.643,0.285c1.07,0,1.826-0.055,2.266-0.168c0.44-0.111,0.748-0.307,0.922-0.584
		c0.175-0.279,0.303-0.994,0.387-2.148H54.699l0.734-4.559H51.41V12.084z M73.081,2.37v8.295H54.574V2.37H73.081z M69.494,7.701
		V5.333H58.161v2.367H69.494z"
                />
              </g>
            </svg>
          </div>
          <div
            className={styles.back}
            onClick={() => {
              history.push('/home');
            }}
          >
            <LeftCircleOutlined style={{ margin: '0 20px', fontSize: '24px', color: '#999' }} />
            <span className={styles.backText}>{backText}</span>
          </div>
        </div>
      )}

      <div className={styles.info}>
        <Notice />
        {showText && <div className={styles.text}>欢迎来到你的创作中心</div>}
        <Avatar />
        <div className={styles.userContent}>
          实名认证未完成
          <RightOutlined />
        </div>
      </div>
    </div>
  );
};

export default RightContent;
