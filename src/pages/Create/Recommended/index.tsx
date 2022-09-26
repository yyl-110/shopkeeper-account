import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import { RightContent } from '@/components/GlobalHeader';
import { Tabs, Input, Button } from 'antd';
import classnames from 'classnames';
import { PlusOutlined, SearchOutlined, StarOutlined } from '@ant-design/icons';
import { useRef } from 'react';

interface IProps {}
const Recommended: React.FC<IProps> = props => {
  const [tagInx, setTagInx] = useState<number>(0);
  const [showInput, setShowInput] = useState<boolean>(false);
  const inputRef = useRef(null);
  const data = [
    {
      title: '外国的疫情真有那么严重吗？',
      desc: '怎么总有越南人偷渡过来呢？',
      question: '290',
      read: 999,
      collection: '999',
      id: 1,
    },
    {
      title: '外国的疫情真有那么严重吗？',
      desc: '怎么总有越南人偷渡过来呢？',
      question: '290',
      read: 999,
      collection: '999',
      id: 1,
    },
    {
      title: '外国的疫情真有那么严重吗？',
      desc: '怎么总有越南人偷渡过来呢？',
      question: '290',
      read: 999,
      collection: '999',
      id: 1,
    },
  ];
  const tag = ['全部推荐', 'F1', '篮球'];
  return (
    <div className={classnames(styles.recommended)}>
      <RightContent showText={false} backText="发布问答" />
      <div className={styles.wendaHome}>
        <div className={styles.homeWrap}>
          <div className={styles.tabWrap}>
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="推荐" key="1"></Tabs.TabPane>
              <Tabs.TabPane tab="热点" key="2"></Tabs.TabPane>
              <Tabs.TabPane tab="最新" key="3"></Tabs.TabPane>
              <Tabs.TabPane tab="邀我回答" key="4"></Tabs.TabPane>
              <Tabs.TabPane tab="收藏" key="5"></Tabs.TabPane>
            </Tabs>
            <div className={styles.search}>
              <Input placeholder="搜索你感兴趣的问题" suffix={<SearchOutlined color="red" />} />
              <Button type="primary">提问</Button>
            </div>
          </div>
          <div className={styles.recommendedPage}>
            <div className={styles.queTagList}>
              <div className={styles.list}>
                {tag.map((i, inx) => {
                  return (
                    <div
                      className={classnames(styles.tagItem, inx === tagInx ? styles.selectItem : '')}
                      key={inx.toString()}
                      onClick={() => {
                        setTagInx(inx);
                      }}
                    >
                      {i}
                    </div>
                  );
                })}
                {!showInput && (
                  <div
                    className={styles.add}
                    onClick={() => {
                      setTimeout(() => {
                        inputRef.current?.focus({
                          cursor: 'end',
                        });
                      }, 200);
                      setShowInput(true);
                    }}
                  >
                    <PlusOutlined />
                    添加擅长领域
                  </div>
                )}

                {showInput && (
                  <div className={styles.inputWrap}>
                    <Input
                      size="small"
                      ref={inputRef}
                      onBlur={() => {
                        setShowInput(false);
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className={styles.commonMore}>
              {data.map(i => {
                return (
                  <div className={styles.item}>
                    <div className={styles.top}>
                      <div className={styles.title}>{i.title}</div>
                      <p className={styles.descMore}>{i.desc}</p>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.data}>
                        回答{i.question} · 阅读{i.read}万 · 收藏{i.collection}
                      </div>
                      <div className={styles.option}>
                        <span>查看回答</span>
                        <span>
                          <StarOutlined style={{ marginRight: '2px' }} />
                          收藏问题
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
