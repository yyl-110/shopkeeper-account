const CreatorPlanRoutes = {
  path: '/plan',
  name: '成长指南',
  icon: 'EuroCircleOutlined',
  component: '@/layouts/BasicLayout',
  routes: [
    {
      path: '/plan/creation',
      name: '创作权益',
      component: '@/pages/CreatorPlan/Creation',
    },
    {
      path: '/plan/ca',
      name: '掌柜认证',
      hideChildrenInMenu: true,
      routes: [
        {
          path: '/plan/ca',
          name: '掌柜认证',
          component: '@/pages/CreatorPlan/Certification',
        },
        {
          name: '职业认证',
          path: '/plan/ca/work',
          component: '@/pages/CreatorPlan/WorkCa',
        },
      ],
    },
    {
      redirect: '/404',
    },
  ],
};

module.exports = CreatorPlanRoutes;
