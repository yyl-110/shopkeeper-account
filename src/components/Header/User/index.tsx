import React from 'react';
import styles from './index.less';
import { useSelector, Link } from 'umi';
import UserMenu from './UserMenu';
import ActionMenu from './ActionMenu';
import { Button, Space } from 'antd';

const User = () => {
  const me = useSelector(state => state.user.me);

  const renderUnLogin = () => {
    return (
      <Space>
        <Button type="ghost" href="/login">
          立即登录
        </Button>
        <Button type="primary" href="/register">
          免费注册
        </Button>
      </Space>
    );
  };

  return (
    <div className={styles['user']}>
      {me ? (
        <Space size="large">
          <ActionMenu />
          <UserMenu />
        </Space>
      ) : (
        renderUnLogin()
      )}
    </div>
  );
};

User.Menu = UserMenu;

export default User;
