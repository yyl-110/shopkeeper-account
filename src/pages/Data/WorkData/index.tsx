import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';

interface IProps {
  dispatch: Dispatch;
  loading: Boolean | undefined;
}
const WorkData: React.FC<IProps> = props => {
  return <div>作品数据</div>;
};

export default WorkData;
