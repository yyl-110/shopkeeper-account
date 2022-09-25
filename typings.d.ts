declare module '*.css';
declare module '*.less';
declare module '*.png';

declare module 'mockjs';

declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}

/** 应用环境变量 */
declare const APP_ENV: string;
/** 基础接口地址 */
declare const API_BASE: string;
