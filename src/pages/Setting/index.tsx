import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';

interface IProps {
  dispatch: Dispatch;
  loading: Boolean | undefined;
}
const Setting: React.FC<IProps> = props => {
  return <div>设置</div>;
};

export default Setting;
