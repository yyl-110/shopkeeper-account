import React, { useState } from 'react';
import { Popover, Avatar, Menu, Space, Tag } from 'antd';
import { Link, useDispatch, useSelector } from 'umi';
import {
  UserOutlined,
  SettingOutlined,
  LoginOutlined,
  PropertySafetyOutlined,
  ProfileOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';
import styles from './index.less';

export default () => {
  const [visible, setVisible] = useState(false);
  const me = useSelector(state => state.user.me);
  const settings = useSelector(state => state.settings);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch({
      type: 'user/logout',
    });
  };

  if (!me) return;

  const { avatar, name, path, rank, bank } = me;

  const avatarLink = (
    <Link to="/dashboard" className={styles['user-avatar']}>
      <Avatar src={avatar || settings.defaultAvatar} size={24} />
    </Link>
  );

  const menu = (
    <div className={isMobile ? styles['m-user-menu'] : styles['user-menu']}>
      <div className={styles['info']}>
        <Space>
          {isMobile && avatarLink}
          <span className={styles['name']}>{name}</span>
          <span className={styles['rank']}>
            <Tag color="#347EFF">{(rank || {}).name}</Tag>
          </span>
        </Space>
      </div>
      <Menu onClick={() => setVisible(false)}>
        <Menu.Divider />

        <Menu.Item key="userCenter">
          <Link to={`/${path}`}>
            <UserOutlined />
            个人主页
          </Link>
        </Menu.Item>
        <Menu.Item key="userSetting">
          <Link to="/settings/profile">
            <ProfileOutlined />
            我的资料
          </Link>
        </Menu.Item>

        <Menu.Item key="userWallet">
          <Link to="/dashboard/wallet">
            <PropertySafetyOutlined />
            我的钱包
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout" onClick={onLogout}>
          <LoginOutlined />
          退出
        </Menu.Item>
      </Menu>
    </div>
  );
  return (
    <Popover overlayClassName={'popover-menu'} content={menu} arrowPointAtCenter placement="bottomRight">
      {avatarLink}
    </Popover>
  );
};
