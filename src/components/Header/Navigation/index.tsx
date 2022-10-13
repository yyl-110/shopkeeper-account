import React, { useState } from 'react';
import { Button, Popover, Select, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styles from './index.less';

export default ({ overlayStyle, ...props }) => {
  const { location } = props;
  const query = location ? location.query || {} : {};
  const [visible, setVisible] = useState(false);

  const provinceData = [
    { label: '广东', value: 'sh' },
    { label: '广东', value: 'gd' },
  ];
  const cityData = [
    { label: '东莞', value: 'dg' },
    { label: '重庆', value: 'cq' },
  ];
  const localRander = () => {
    return (
      <div className={styles['city-selector']}>
        <div className="desc">选择你所在的地区：</div>
        <div className="cascade-options">
          <Select options={provinceData} />
          <Select options={cityData} />
        </div>
        <div className="actions">
          <Space>
            <Button onClick={() => setVisible(false)}>取消</Button>
            <Button type="primary">确定</Button>
          </Space>
        </div>
      </div>
    );
  };

  const moreRander = () => {
    return (
      <ul className="feed-more-nav" role="menu">
        <li aria-label="体育频道" role="menuitem" tabindex="-1">
          <div className="feed-more-nav-item">体育</div>
        </li>
        <li aria-label="时尚频道" role="menuitem" tabindex="-1">
          <div className="feed-more-nav-item">时尚</div>
        </li>
        <li aria-label="娱乐频道" role="menuitem" tabindex="-1">
          <div className="feed-more-nav-item">娱乐</div>
        </li>
        <li aria-label="国际频道" role="menuitem" tabindex="-1">
          <div className="feed-more-nav-item">国际</div>
        </li>
        <li aria-label="养生频道" role="menuitem" tabindex="-1">
          <div className="feed-more-nav-item">养生</div>
        </li>
        <li aria-label="旅游频道" role="menuitem" tabindex="-1">
          <div className="feed-more-nav-item">旅游</div>
        </li>
        <li aria-label="军事频道" role="menuitem" tabindex="-1">
          <div className="feed-more-nav-item">军事</div>
        </li>
        <li aria-label="图片频道" role="menuitem" tabindex="-1">
          <div className="feed-more-nav-item">图片</div>
        </li>
        <li aria-label="育儿频道" role="menuitem" tabindex="-1">
          <div className="feed-more-nav-item">育儿</div>
        </li>
        <li aria-label="历史频道" role="menuitem" tabindex="-1">
          <div className="feed-more-nav-item">历史</div>
        </li>
        <li aria-label="游戏频道" role="menuitem" tabindex="-1">
          <div className="feed-more-nav-item">游戏</div>
        </li>
        <li aria-label="数码频道" role="menuitem" tabindex="-1">
          <div className="feed-more-nav-item">数码</div>
        </li>
      </ul>
    );
  };

  return (
    <div className="feed-m-nav">
      <ul className="feed-default-nav">
        <li>
          <div className="feed-default-nav-item">关注</div>
        </li>
        <li>
          <div className="feed-default-nav-item active">推荐</div>
        </li>
        <li>
          <div className="feed-default-nav-item">热点</div>
        </li>
        <li>
          <div className="feed-default-nav-item local">
            东莞
            <Popover
              placement="bottom"
              visible={visible}
              overlayStyle={overlayStyle}
              onVisibleChange={newVisible => {
                setVisible(newVisible);
              }}
              trigger="click"
              content={localRander}
            >
              <Button />
            </Popover>
          </div>
        </li>
        <li>
          <div className="feed-default-nav-item">财经</div>
        </li>
        <li>
          <div className="feed-default-nav-item">物业</div>
        </li>
        <li>
          <div className="feed-default-nav-item">视频</div>
        </li>
        <li>
          <Popover placement="bottomRight" content={moreRander}>
            <div className="feed-default-nav-item more">更多</div>
          </Popover>
        </li>
      </ul>
    </div>
  );
};
