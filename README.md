# pc-react-template

PC项目模版，基于umi3 + react + antd + ts + less开发

## 项目结构

```bash
├── README.md                    # 说明文档
├── config
│   ├── config.dev.ts            # 测试环境配置
│   ├── config.local.ts          # 本地环境配置（git忽略）
│   ├── config.prod.ts           # 生产环境配置
│   ├── config.staging.ts        # 预发布环境配置
│   ├── config.ts                # 通用项目配置
│   ├── route.config.ts          # 路由配置文件
│   └── theme.config.ts          # 主题配置文件
├── mock                         # 数据模拟
│   ├── demo.ts
│   └── util.ts
├── package.json
├── src
│   ├── assets                   # 资源文件目录
│   ├── components               # 通用组件目录
│   ├── models                   # 公共model
│   ├── pages                    # 路由页面
│   └── services                 # 公共service
├── tsconfig.json                # typesctipt配置文件
├── typings.d.ts                 # 声明文件
└── yarn.lock
```

## 快速开始

安装依赖

```bash
yarn
```

运行项目，默认开发环境

```bash
yarn start
```

格式化代码

```bash
yarn preitter
```

校验代码规范

```bash
yarn lint
```

提交代码

```bash
yarn commit
```

生成项目更新日志

```bash
yarn changelog
```
