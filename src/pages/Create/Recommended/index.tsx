import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import { RightContent } from '@/components/GlobalHeader';
import { Tabs, Input, Button, Modal, Upload } from 'antd';
import classnames from 'classnames';
import { PlusOutlined, SearchOutlined, StarOutlined } from '@ant-design/icons';
import { useRef } from 'react';
import { TextArea } from 'antd/lib/input/TextArea';
import { RcFile } from 'antd/lib/upload';

interface IProps {}
const Recommended: React.FC<IProps> = props => {
  const [tagInx, setTagInx] = useState<number>(0);
  const [showInput, setShowInput] = useState<boolean>(false);
  const inputRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
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

  const onPreview = async file => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
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
              <Button
                type="primary"
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                提问
              </Button>
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
      <Modal
        title="提问"
        open={isModalOpen}
        cancelText="存草稿"
        okText="提问"
        wrapClassName="inputModal"
        width={752}
        onCancel={() => {
          setModalOpen(false);
        }}
      >
        <div className="inputWrap">
          <Input placeholder="请输入问题（5～30字）"></Input>
        </div>
        <div className="descWrap">
          <Input.TextArea placeholder="请输入描述（选填）" />
        </div>
        <div className="uploadImg">
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={[]}
            onChange={() => {}}
            onPreview={onPreview}
          >
            <PlusOutlined />
          </Upload>
        </div>
      </Modal>
    </div>
  );
};

export default Recommended;
