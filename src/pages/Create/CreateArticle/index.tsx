import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';

interface IProps {
  dispatch: Dispatch;
  loading: Boolean | undefined;
}
const CreateArticle: React.FC<IProps> = props => {
  return <div>文章</div>;
};

export default CreateArticle;
