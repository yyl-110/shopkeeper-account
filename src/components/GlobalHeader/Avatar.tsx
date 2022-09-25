import React, { useState } from 'react';
import { Avatar, Modal, Spin, Dropdown, Menu, Form, Input } from 'antd';
import { LogoutOutlined, LockOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { connect, Dispatch, IGlobalModelState } from 'umi';
import styles from './index.less';

const defaultAvatar = require('@/assets/default_avatar.png');

interface IAvatarDropdownProps {
  dispatch: Dispatch;
  global: IGlobalModelState;
}

const { confirm } = Modal;

const AvatarDropdown: React.FC<IAvatarDropdownProps> = ({ dispatch, global }) => {


  return <>
        <span className={styles.action}>
          <Avatar className={styles.avatar} size="small" src={defaultAvatar} alt="avatar" />
          <span>3442</span>
        </span>
    </>
};

export default connect(({ global }: { global: IGlobalModelState }) => ({ global }))(AvatarDropdown);
