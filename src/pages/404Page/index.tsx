import React from 'react';
import { Empty } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

export default () => {
  return (
    <PageContainer breadcrumb={undefined} onBack={() => window.history.back()}>
      <Empty description="404" />
    </PageContainer>
  );
};
