import React, { useEffect } from 'react';
import { Dispatch, connect, IGlobalModelState } from 'umi';

interface IProps {
  dispatch: Dispatch;
  global: IGlobalModelState;
}

const BasicLayout: React.FC<IProps> = ({ children, dispatch }) => {

  return <>{children}</>;
};

export default connect(({ global }: { global: IGlobalModelState }) => ({
  global,
}))(BasicLayout);
