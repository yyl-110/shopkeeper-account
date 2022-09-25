import React from 'react';
import { RightContent } from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';

let backendRoutes: any[];

export const layout = {
  rightRender: () => <RightContent />,
  footerRender: () => <GlobalFooter />,
  onError: (error: Error, info: any) => {
    console.error(error);
    console.info(info);
  },
}