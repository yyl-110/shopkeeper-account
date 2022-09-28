import { defineConfig } from 'umi';
import routes from './route.config';
import theme from './theme.config';

const logo = '../src/assets/logo.png';
export default defineConfig({
  title: '今日头条',
  favicon: 'https://sf1-cdn-tos.toutiaostatic.com/obj/ttfe/pgcfe/sz/mp_logo.png',
  theme,
  routes,
  locale: {
    default: 'zh-CN',
    antd: false,
  },
  dva: {
    immer: true,
    hmr: true,
  },
  hash: true,
  antd: {},
  layout: {
    name: '',
    defaultOpenAll: true,
    navTheme: 'light',
    logo:
      'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI3N3B4Ig0KCSBoZWlnaHQ9IjI3cHgiIHZpZXdCb3g9IjAgMCA3NyAyNyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNzcgMjciIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IuWbvuWxgl8yIj4NCgk8ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3ICAgICI+DQoJCTxwYXRoIGZpbGw9IiNGRjM3M0MiIGQ9Ik0wLjg0NywyMC4xMDVoMTAuOTF2LTEuMTQ2SDIuNTQxdi0yLjAxOGg5LjIxNlYxNS44MmwtOS41NCwwLjA3NGMtMC4xMTYtMC42MTMtMC4yNzQtMS4zMjgtMC40NzMtMi4xNDENCgkJCWM4LjM2OSwwLDE1LjQ3Ni0wLjEwMSwyMS4zMjEtMC4zbDAuNDc0LDIuMjE2bC04LjU5NCwwLjEyNXYxLjE0Nmg4LjE3djIuMDE4aC04LjE3djEuMTQ2aDEwLjAxM3YyLjA2NkgxNC45NDV2MC41OTgNCgkJCWMwLDAuOTYzLTAuMjI2LDEuNjk3LTAuNjc5LDIuMjA1Yy0wLjQ1MywwLjUwNi0xLjA2MywwLjc4OS0xLjgzMSwwLjg0NmMtMC43NjgsMC4wNTktMi4yODEsMC4wOTYtNC41NCwwLjExMw0KCQkJYy0wLjE0OS0wLjgxNC0wLjM1Ny0xLjcwMy0wLjYyMy0yLjY2NmMwLjk1NSwwLjA4NCwxLjkwOSwwLjEyNSwyLjg2NCwwLjEyNWMxLjA3OSwwLDEuNjE5LTAuNDA2LDEuNjE5LTEuMjIxSDAuODQ3VjIwLjEwNXoNCgkJCSBNMTEuMTA5LDEuNDQ4aDMuMjg4djIuNzRoMi41NjVjMC42NzMtMC45NzIsMS4yNzktMS44ODUsMS44MTgtMi43NGwyLjYxNiwxLjIyMWwtMS4wNzEsMS41Mmg0LjIzNHY1LjE1NmgtMy4wMzlWNi42MjlINC4wMzUNCgkJCXYyLjcxNUgwLjk5NlY0LjE4OGg0LjE2Yy0wLjI5MS0wLjQ4MS0wLjU5OC0wLjk3Mi0wLjkyMi0xLjQ3bDIuNDQxLTEuMjcxQzcuMjksMi4zMiw3LjkwNCwzLjIzNCw4LjUxOSw0LjE4OGgyLjU5MVYxLjQ0OHoNCgkJCSBNNC45NTcsMTIuODU2VjcuNzI1aDE1LjU5M3Y1LjEzMUg0Ljk1N3ogTTcuOTk2LDEwLjk2M2g5LjUxNVY5LjYxOEg3Ljk5NlYxMC45NjN6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGRjM3M0MiIGQ9Ik0yNS44MDUsMTUuOTcxYzEuMzctMi4yOTIsMi40Mi00LjU3NiwzLjE1MS02Ljg1MWgtMi43NTJWNi4wMDZoMy4wNjRWMS42MjNoMy4zMzh2NC4zODRoMi40NjZWOS4xMg0KCQkJaC0yLjQ2NnYxLjk2OGMxLjEyMSwwLjU4MiwyLjE1OCwxLjE1OCwzLjExMywxLjczMVYzLjAxN2gxNC4zNDh2My4wODloLTEwLjk2djIuODRoMTAuMTEydjEwLjExM0gzOS4xMDZ2Mi44NGgxMS4zMDh2My4wODgNCgkJCUgzNS43MTlWMTMuMjNsLTEuMzQ1LDIuODRjLTAuNTU2LTAuNTA4LTEuMTQ2LTEuMDE0LTEuNzY4LTEuNTJ2MTEuNTMxaC0zLjMzOFYxNS4zNTljLTAuNzA2LDEuNzE5LTEuNTg2LDMuNDM0LTIuNjQsNS4xNDUNCgkJCUMyNi40NjEsMTkuMzc1LDI2LjE4NywxNy44NjMsMjUuODA1LDE1Ljk3MXogTTQ1LjgzMiwxNi4wMnYtNC4wMzVoLTYuNzI2djQuMDM1SDQ1LjgzMnoiLz4NCgkJPHBhdGggZmlsbD0iI0ZGMzczQyIgZD0iTTUxLjQxLDEyLjA4NGgyNC43MzR2My4wMzlINTguOTk1bC0wLjIzNiwxLjU2OGgxNC40MjJsLTAuNDk4LDUuNDA2Yy0wLjEyNCwxLjI3LTAuNTkyLDIuMjAxLTEuNDAxLDIuNzk1DQoJCQlzLTEuODU1LDAuODk4LTMuMTM5LDAuOTE2Yy0xLjI4MiwwLjAxNi0zLjY1NCwwLjAyNS03LjExNywwLjAyNWMtMC4yMzItMS4wOTYtMC41NC0yLjI3NS0wLjkyMi0zLjUzNw0KCQkJYzIuNDE2LDAuMTkxLDQuMjk3LDAuMjg1LDUuNjQzLDAuMjg1YzEuMDcsMCwxLjgyNi0wLjA1NSwyLjI2Ni0wLjE2OGMwLjQ0LTAuMTExLDAuNzQ4LTAuMzA3LDAuOTIyLTAuNTg0DQoJCQljMC4xNzUtMC4yNzksMC4zMDMtMC45OTQsMC4zODctMi4xNDhINTQuNjk5bDAuNzM0LTQuNTU5SDUxLjQxVjEyLjA4NHogTTczLjA4MSwyLjM3djguMjk1SDU0LjU3NFYyLjM3SDczLjA4MXogTTY5LjQ5NCw3LjcwMQ0KCQkJVjUuMzMzSDU4LjE2MXYyLjM2N0g2OS40OTR6Ii8+DQoJPC9nPg0KPC9nPg0KPGcgaWQ9IuWbvuWxgl8zIj4NCjwvZz4NCjwvc3ZnPg0K',
  },
  define: {
    APP_ENV: 'local',
    API_BASE: '',
  },
  nodeModulesTransform: {
    type: 'none',
  },
});
