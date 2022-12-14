import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import { Tabs, Row, Col, Button, Dropdown, Menu, Modal, Radio, Input, Select } from 'antd';
import styles from './index.less';
import { EllipsisOutlined, LikeOutlined, MessageOutlined, VerticalAlignTopOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import TextArea from 'antd/lib/input/TextArea';
const { Search } = Input;
const { Option } = Select;
interface IProps {}
const Comment: React.FC<IProps> = props => {
  const data = [1, 2, 3, 4, 5, 6];
  const [select, setSelect] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [modalOpen, setModalOpen] = useState(false);
  const [accessKey, setAccessKey] = useState('1');
  const [selectIndex, setSelectIndex] = useState(0);
  const commentItem = (i = 0, inx = 0, state = true) => {
    return (
      <div
        className={classnames(styles.item, inx + 1 === select && state && styles.select)}
        onClick={() => {
          setSelect(i);
        }}
      >
        <div className={styles.itemWrap}>
          <div className={styles.commentName}>
            <img src={require('@/assets/default_avatar.png')} alt="" />
            居家园丁 <span>评论了图集</span> 《圈粉无圈粉无圈粉无圈粉无圈粉无圈粉无圈粉无圈粉无数》
          </div>
          <p className={styles.text}>到底有没有到底有没有到底有没有到底有没有到底有没有</p>
          <div className={styles.footer}>
            <span className={styles.time}>03-13 21:50</span>
            <div className={styles.options}>
              <span>
                <MessageOutlined style={{ marginRight: '3px' }} />
                回复
              </span>
              <span>
                <LikeOutlined style={{ marginRight: '3px' }} />赞
              </span>
              <span>
                <VerticalAlignTopOutlined style={{ marginRight: '3px' }} />
                置顶
              </span>
              <Dropdown
                overlay={
                  <Menu
                    items={[
                      {
                        key: '1',
                        label: (
                          <div
                            onClick={() => {
                              setModalOpen(true);
                            }}
                          >
                            举报
                          </div>
                        ),
                      },
                      {
                        key: '2',
                        label: (
                          <a rel="noopener noreferrer" href="#">
                            删除
                          </a>
                        ),
                      },
                    ]}
                  />
                }
                placement="top"
              >
                <EllipsisOutlined style={{ position: 'relative', zIndex: '99' }} />
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.comment}>
      <div className={styles.tabWrap}>
        <Tabs
          defaultActiveKey="1"
          accessKey={accessKey}
          onChange={key => {
            setAccessKey(key);
          }}
        >
          <Tabs.TabPane tab="全部" key="1"></Tabs.TabPane>
          <Tabs.TabPane tab="文章" key="2"></Tabs.TabPane>
          <Tabs.TabPane tab="视频" key="3"></Tabs.TabPane>
          <Tabs.TabPane tab="微头条" key="4"></Tabs.TabPane>
          <Tabs.TabPane tab="问答" key="5"></Tabs.TabPane>
        </Tabs>
      </div>
      {accessKey === '1' && (
        <div className={styles.commentContent}>
          <Row style={{ width: '100%' }}>
            <Col span={12}>
              <div className={styles.commentList}>
                {data.map((i, inx) => {
                  return commentItem(i, inx);
                })}
              </div>
            </Col>
            <Col span={12}>
              <div className={styles.commentInfo}>
                {commentItem(0, 0, false)}
                <div className={styles.textarea}>
                  <TextArea
                    placeholder="积极回复可吸引更多评论"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    rows={4}
                    value={comment}
                    onChange={val => {
                      setComment(val.target.value);
                    }}
                  />
                  <Button type="primary" disabled={!comment} className={styles.btn}>
                    发布
                  </Button>
                </div>
                <div className={styles.reply}>
                  <h2>全部 0 条回复</h2>
                  <div className={styles.replyContent}>
                    <img src={require('@/assets/nocomment.png')} alt="" />
                    暂无回复
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
      {accessKey === '2' && (
        <div className={styles.articleContent}>
          <Row style={{ width: '100%' }}>
            <Col span={12}>
              <Search placeholder="搜索作品标题" size="middle" style={{ width: '233px', marginLeft: '32px' }} />
              <div className={styles.list}>
                {data.map(i => {
                  return (
                    <div
                      className={classnames(styles.item, selectIndex === i && styles.select)}
                      key={i}
                      onClick={() => {
                        setSelectIndex(i);
                      }}
                    >
                      <img src={require('../../../assets/baseBg.png')} alt="" />
                      <div className={styles.itemContent}>
                        <div className={styles.text}>实探！这一次，轮到东莞行政中心区火力全开</div>
                        <div className={styles.contentFooter}>评论 6</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
            <Col span={12} style={{ paddingLeft: '32px' }}>
              <Select defaultValue="1" style={{ width: 120, marginLeft: '32px' }}>
                <Option value="1">最新</Option>
                <Option value="2">最热</Option>
              </Select>
              <div className={styles.commentArticleList}>
                {data.map((i, inx) => {
                  return (
                    <div className={styles.commentItem}>
                      <div className={styles.name}>
                        <img src={require('@/assets/default_avatar.png')} alt="" />
                        <span>居家园丁</span>
                      </div>
                      <p className={styles.text}>到底有没有到底有没有到底有没有到底有没有到底有没有</p>
                      <div className={styles.footer}>
                        <span className={styles.time}>03-13 21:50</span>
                        <div className={styles.options}>
                          <span>
                            <MessageOutlined style={{ marginRight: '3px' }} />
                            回复
                          </span>
                          <span>
                            <LikeOutlined style={{ marginRight: '3px' }} />赞
                          </span>
                          <span>
                            <VerticalAlignTopOutlined style={{ marginRight: '3px' }} />
                            置顶
                          </span>
                          <Dropdown
                            overlay={
                              <Menu
                                items={[
                                  {
                                    key: '1',
                                    label: (
                                      <div
                                        onClick={() => {
                                          setModalOpen(true);
                                        }}
                                      >
                                        举报
                                      </div>
                                    ),
                                  },
                                  {
                                    key: '2',
                                    label: (
                                      <a rel="noopener noreferrer" href="#">
                                        删除
                                      </a>
                                    ),
                                  },
                                ]}
                              />
                            }
                            placement="top"
                          >
                            <EllipsisOutlined style={{ position: 'relative', zIndex: '99' }} />
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </div>
      )}

      <Modal
        title="举报"
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
        }}
      >
        <div className={styles.modalWrap}>
          <h2 style={{ marginBottom: '12px' }}>请选择举报原因</h2>
          <div className="radioWrap">
            <Radio>淫秽色情</Radio>
            <Radio>营销广告</Radio>
            <Radio>恶意谩骂</Radio>
            <Radio>违法信息</Radio>
            <Radio>我有话要说</Radio>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Comment;
