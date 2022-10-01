import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import { Tabs, Row, Col, DatePicker, Input, Pagination, Select, Dropdown, Menu } from 'antd';
import styles from './index.less';
import classnames from 'classnames';
const { RangePicker } = DatePicker;
const { Option } = Select;

const room = require('@/assets/room.jpeg');

interface IProps {
  dispatch: Dispatch;
  loading: Boolean | undefined;
}
const Content: React.FC<IProps> = props => {
  const tabList = ['状态', '全部', '已发布', '审核中', '未通过', '仅我可见'];
  const [index, setIndex] = useState<number>(0);
  return (
    <div className={styles.content}>
      <div className={styles.tabWrap}>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="全部" key="1"></Tabs.TabPane>
          <Tabs.TabPane tab="文章" key="2"></Tabs.TabPane>
          <Tabs.TabPane tab="视频" key="3"></Tabs.TabPane>
          <Tabs.TabPane tab="微头条" key="4"></Tabs.TabPane>
          <Tabs.TabPane tab="问答" key="5"></Tabs.TabPane>
        </Tabs>
        <div className={styles.cg}>草稿箱（20）</div>
      </div>
      <div className={styles.minTab}>
        <Row>
          <Col xs={24} lg={10}>
            <div className={styles.minTabList}>
              {tabList.map((i, inx) => {
                return (
                  <div
                    className={classnames(styles.minTabItem, index === inx && styles.select)}
                    key={inx.toString()}
                    onClick={() => {
                      setIndex(inx);
                    }}
                  >
                    {i}
                  </div>
                );
              })}
            </div>
          </Col>
          <Col xs={24} lg={14}>
            <Select defaultValue="all" style={{ width: 120, marginRight: '24px', marginBottom: '14px' }}>
              <Option value="all">全部</Option>
              <Option value="lucy">已发布</Option>
              <Option value="in">审核中</Option>
            </Select>
            <RangePicker style={{ marginRight: '24px', marginBottom: '14px' }} />
            <Input.Search allowClear style={{ width: '150px' }} defaultValue="" placeholder="搜索关键词" />
          </Col>
        </Row>
        <div className={styles.list}>
          <div className={styles.num}>共1,382条内容</div>
          <div className={styles.item}>
            <img src={room} alt="" />
            <div className={styles.right}>
              <div className={styles.title}>
                <span className={styles.text}>闹钟定好，今晚8点哈哈哈哈哈哈哈哈</span>
                <span className={styles.time}>05-19 0:48</span>
              </div>
              <div className={styles.tip}>已发布</div>
              <div className={styles.bottom}>
                <div className={styles.data}>展现595&emsp;·&emsp;阅读4万&emsp;·&emsp;点赞0&emsp;·&emsp;评论0</div>
                <div className={styles.option}>
                  <span>查看回答</span>
                  <span>查看评论</span>
                  <span>修改</span>
                  <Dropdown
                    placement="bottom"
                    overlay={
                      <Menu
                        items={[
                          {
                            key: '1',
                            label: <div style={{ width: '140px' }}>加入合集</div>,
                          },
                          {
                            key: '2',
                            label: <div>置顶</div>,
                          },
                          {
                            key: '3',
                            label: <div>分享</div>,
                          },
                          {
                            key: '4',
                            label: <div>设为仅我可见</div>,
                          },
                          {
                            key: '5',
                            label: <div>删除作品</div>,
                          },
                        ]}
                      />
                    }
                  >
                    <span>更多</span>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.page}>
            <Pagination showSizeChanger defaultCurrent={3} total={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
