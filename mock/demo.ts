import Mock from 'mockjs';
import { commonSuccessResponse } from './util';

const { Random } = Mock;

/**
 * 生成列表
 * @param req
 * @param res
 */
const fakeDemoList = (req: any, res: any) => {
  const response = Mock.mock({
    ...commonSuccessResponse,
    'data|5-10': [
      {
        'id|+1': 1,
        avatar: '',
        username: () => Random.cname(),
        address: () => `${Random.city()}天府大道北段966号4号楼8层`,
      },
    ],
  });
  // 模拟请求延迟
  setTimeout(() => {
    return res.status(200).send(response);
  }, 500);
};

export default {
  'POST /api/demoList': fakeDemoList,
};
