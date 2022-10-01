import React from 'react';
import { RightContent } from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';

let backendRoutes: any[];

export const layout = {
  rightRender: () => <RightContent />,
  footerRender: () => <GlobalFooter />,
  siderWidth: 256,
  menu: {
    defaultOpenAll: false, // 是否展开侧边tab
    ignoreFlatMenu: false,
    locale: false,
  },
  onError: (error: Error, info: any) => {
    console.error(error);
    console.info(info);
  },
};
