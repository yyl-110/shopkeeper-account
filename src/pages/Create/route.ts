const CreateRoutes = {
  path: '/create',
  name: '创作',
  icon: 'EditOutlined',
  component: '@/layouts/BasicLayout',
  layout:false,
  routes: [
    {
      path: '/create/article',
      name: '文章',
      component: '@/pages/Create/CreateArticle',
    },
    {
      path: '/create/recommended',
      name: '问答',
      component: '@/pages/Create/Recommended',
    },
    {
      redirect: '/404',
    },
  ],
};

module.exports = CreateRoutes;
