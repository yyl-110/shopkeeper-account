const path = require('path');
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
    redirect: '/home',
  },
  { path: '/home', name: '主页', icon: 'HomeOutlined', component: '@/pages/Home' },
  ...routes,
  { path: '/withdrawal', name: '提现', icon: 'PayCircleOutlined', component: '@/pages/Withdrawal' },
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
