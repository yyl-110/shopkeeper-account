const path = require('path');
import { MenuDataItem } from '@umijs/route-utils';
const fs = require('fs');

/**
 * 读取pages目录下各页面模块的路由配置
 * @param dir 目录
 * @param useSubDir 是否读取子目录
 */
const generateRoutes = (dir: string, useSubDir: boolean) => {
  const routeFileList: any = [];
  // 递归读取路由配置文件
  const readRouteFileList = (dir: string, useSubDir: boolean) => {
    const files = fs.readdirSync(dir);
    files.forEach((item: any) => {
      // 生成
      const filePath = path.join(dir, item);
      const stat = fs.statSync(filePath);
      // 判断是否为目录
      if (stat.isDirectory() && useSubDir) {
        readRouteFileList(path.join(dir, item), useSubDir);
      } else {
        const reg = RegExp(/route.ts|js/);
        if (reg.test(filePath)) {
          routeFileList.push(filePath);
        }
      }
    });
  };
  readRouteFileList(dir, useSubDir);
  // 生成需要的对象
  // eslint-disable-next-line
  const routes = routeFileList.map((item: string) => require(item));
  return routes;
};

/**
 * 读取pages目录下路由文件，自动生成路由表
 */
const routes = generateRoutes(path.join(__dirname, '../src/pages'), true);

export default [
  {
    path: '/login',
    component: '@/pages/Login',
    layout: false,
  },
  {
    path: '/404',
    component: '@/pages/404Page',
  },
  {
    path: '/',
    redirect: '/shopkeeperhome',
  },
  { path: '/about', component: '@/pages/Common/About', layout: false },
  { path: '/notice', component: '@/pages/Common/NoticeCenter', layout: false },
  { path: '/verify', component: '@/pages/Common/Verify' },
  { path: '/shopkeeperhome', component: '@/pages/ShopkeeperHome', layout: false },
  { path: '/news', component: '@/pages/Article', layout: false }, // 新闻
  { path: '/home', name: '主页', icon: 'HomeOutlined', component: '@/pages/Home' },
  {
    path: '/create',
    name: '创作',
    icon: 'EditOutlined',
    component: '@/layouts/BasicLayout',
    layout: false,
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
  },
  {
    path: '/manage',
    name: '管理',
    icon: 'BuildOutlined',
    component: '@/layouts/BasicLayout',
    menu: {
      defaultOpenAll: true,
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
  },
  ...routes,
  { path: '/withdrawal', name: '提现', icon: 'PayCircleOutlined', component: '@/pages/Withdrawal' },
  {
    path: '/plan',
    name: '成长指南',
    icon: 'EuroCircleOutlined',
    component: '@/layouts/BasicLayout',
    defaultCollapsed: true,
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
  },
  {
    path: '/images',
    name: '工具',
    icon: 'ShoppingOutlined',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/images',
        name: '图片素材',
        component: '@/pages/Tool',
      },
    ],
  },
  {
    path: '/setting',
    name: '设置',
    icon: 'SettingOutlined',
    component: '@/layouts/BasicLayout',
    defaultCollapsed: false,
    breakpoint: true,
    collapsed: false,
    routes: [
      {
        path: '/setting',
        name: '设置',
        component: '@/pages/Setting',
      },
    ],
  },
  {
    redirect: '/404',
  },
];
