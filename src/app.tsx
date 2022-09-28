import React from 'react';
import { RightContent } from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';

let backendRoutes: any[];

export const layout = {
  rightRender: () => <RightContent />,
  footerRender: () => <GlobalFooter />,
  siderWidth: 256,
  menu: {
    defaultOpenAll: true,
    ignoreFlatMenu: false,
    locale: false,
  },
  pageTitleRender: () => <div>标题</div>,
  onError: (error: Error, info: any) => {
    console.error(error);
    console.info(info);
  },
};
