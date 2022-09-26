const ManageRoutes = {
  path: '/manage',
  name: '管理',
  icon: 'BuildOutlined',
  component: '@/layouts/BasicLayout',
  menu:{
    defaultOpenAll:true,
  },
  routes: [
    {
      path: '/manage/content',
      name: '作品管理',
      component: '@/pages/Manage/Content',
    },
    {
      path: '/manage/comment',
      name: '评论管理',
      component: '@/pages/Manage/Comments',
    },
    {
      redirect: '/404',
    },
  ],
};

module.exports = ManageRoutes;
