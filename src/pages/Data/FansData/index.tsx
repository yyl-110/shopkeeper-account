import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';

interface IProps {
  dispatch: Dispatch;
  loading: Boolean | undefined;
}
const FansData: React.FC<IProps> = props => {
  return <div>粉丝数据</div>;
};

export default FansData;
