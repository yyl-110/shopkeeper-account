import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';

interface IProps {
dispatch: Dispatch;
loading: Boolean | undefined;
}
const Content: React.FC<IProps> = (props) => {
    return <div>作品管理</div>;
};

export default Content;
