const DataRoutes = {
  path: '/data',
  name: '数据',
  icon: 'BarChartOutlined',
  component: '@/layouts/BasicLayout',
  routes: [
    {
      path: '/data/earnings',
      name: '收益数据',
      component: '@/pages/Data/EarningsData',
    },
    {
      path: '/data/work',
      name: '作品数据',
      component: '@/pages/Data/WorkData',
    },
    {
      path: '/data/fans',
      name: '粉丝数据',
      component: '@/pages/Data/FansData',
    },
    {
      redirect: '/404',
    },
  ],
};

module.exports = DataRoutes;
