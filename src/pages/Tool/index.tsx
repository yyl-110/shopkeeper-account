import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';

interface IProps {
  dispatch: Dispatch;
  loading: Boolean | undefined;
}
const Img: React.FC<IProps> = props => {
  return <div>图片素材</div>;
};

export default Img;
