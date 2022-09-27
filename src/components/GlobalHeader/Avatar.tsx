import React, { useState } from 'react';
import { Avatar, Modal, Spin, Dropdown, Menu, Form, Input } from 'antd';
import { LogoutOutlined, LockOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { connect, Dispatch, IGlobalModelState, history } from 'umi';
import styles from './index.less';

const defaultAvatar = require('@/assets/default_avatar.png');

interface IAvatarDropdownProps {
  dispatch: Dispatch;
  global: IGlobalModelState;
}

const { confirm } = Modal;

const AvatarDropdown: React.FC<IAvatarDropdownProps> = ({ dispatch, global }) => {
  const [visible, setVisible] = useState(false);
  // 处理选中的子菜单
  const handleMenu = ({ key }: { key: string }) => {
    if (key === 'setting') {
      history.push('/setting');
      setVisible(true);
    }
    if (key === 'logout') {
      // 退出,清空本地的所有缓存
      confirm({
        centered: true,
        icon: <ExclamationCircleOutlined />,
        content: '确定要注销登录吗？',
        okText: '确定',
        cancelText: '取消',
        onOk() {
          history.push('/login');
        },
        onCancel() {},
      });
    }
  };
  const menu = (
    <Menu className={styles.menu} onClick={handleMenu} style={{ marginTop: 0, marginRight: -10 }}>
      <Menu.Item key="setting">
        <LockOutlined style={{ marginRight: '2px' }} />
        个人设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <LogoutOutlined style={{ marginRight: '2px' }} />
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu}>
        <span className={styles.action}>
          <Avatar className={styles.avatar} size="small" src={defaultAvatar} alt="avatar" />
          <span>掌柜号</span>
        </span>
      </Dropdown>
    </>
  );
};

export default connect(({ global }: { global: IGlobalModelState }) => ({ global }))(AvatarDropdown);
