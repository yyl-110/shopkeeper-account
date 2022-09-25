import React from 'react';
import { Modal } from 'antd';
import { LogoutOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { connect, Dispatch, IGlobalModelState } from 'umi';
import styles from './index.less';

interface ILogoutProps {
  dispatch: Dispatch;
  global: IGlobalModelState;
}

const { confirm } = Modal;

const Logout: React.FC<ILogoutProps> = ({ dispatch }) => {
  const logout = () => {
    confirm({
      centered: true,
      icon: <ExclamationCircleOutlined />,
      content: '确定要注销登录吗？',
      onOk() {
        if (dispatch) {
          dispatch({
            type: 'global/logout',
          });
        }
      },
      onCancel() {
        console.log('cancel');
      },
    });
  };

  return (
    <div className={styles.action} onClick={logout}>
      <LogoutOutlined className={styles.logout} />
    </div>
  );
};

export default connect(({ global }: { global: IGlobalModelState }) => ({ global }))(Logout);
