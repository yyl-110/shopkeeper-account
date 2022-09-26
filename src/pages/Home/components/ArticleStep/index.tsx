import { Popover, Steps, StepsProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import { RightOutlined } from '@ant-design/icons';

interface IProps {}
const { Step } = Steps;
const ArticleStep: React.FC<IProps> = props => {
  const data = [
    {
      title: '05-10 0:48 发布了文章',
      url: require('@/assets/default_avatar.png'),
      text: '闹钟定好了！今晚8点闹钟定好了！今晚8点闹钟定好了！今晚8点',
      display: 579,
      read: 4,
      comment: 0,
      zan: 0,
    },
    {
      title: '05-10 0:48 发布了文章',
      url: require('@/assets/default_avatar.png'),
      text: '闹钟定好了！今晚8点闹钟定好了！今晚8点闹钟定好了！今晚8点',
      display: 579,
      read: 4,
      comment: 0,
      zan: 0,
    },
    {
      title: '05-10 0:48 发布了文章',
      url: require('@/assets/default_avatar.png'),
      text: '闹钟定好了！今晚8点闹钟定好了！今晚8点闹钟定好了！今晚8点',
      display: 579,
      read: 4,
      comment: 0,
      zan: 0,
    },
  ];
  const customDot: StepsProps['progressDot'] = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}233123
        </span>
      }
    >
      {dot}
    </Popover>
  );
  const contentNote = row => {
    return (
      <div className="content">
        <div className="goods">
          <img src={row.url} alt="" />
          <div className="text">{row.text}</div>
        </div>
        <ul className="data">
          <li>
            <div className="num">{row.display}</div>
            <span>展现量</span>
          </li>
          <li>
            <div className="num">{row.read}</div>
            <span>阅读量</span>
          </li>
          <li>
            <div className="num">{row.comment}</div>
            <span>评论</span>
          </li>
          <li>
            <div className="num">{row.zan}</div>
            <span>点赞</span>
          </li>
        </ul>
      </div>
    );
  };
  const titleNote = row => {
    return <div className="title">{row.title}</div>;
  };
  return (
    <div>
      <Steps current={0} progressDot={customDot} direction="vertical" className="articleStep">
        {data.map(i => {
          return <Step title={titleNote(i)} description={contentNote(i)} />;
        })}
        <Step
          title={
            <div className={styles.more} style={{ fontSize: '12px' }}>
              查看更多作品
              <RightOutlined style={{ marginLeft: '4px' }} />
            </div>
          }
          description=""
        />
      </Steps>
    </div>
  );
};

export default ArticleStep;
