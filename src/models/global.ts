export interface IGlobalModelState {}
import { Subscription } from 'dva';
import { history } from 'umi';

export interface IGlobalModel {
  namespace: 'global';
  state: IGlobalModelState;
  effects: {};
  reducers: {};
  subscriptions: {
    setup: Subscription;
  };
}

const GlobalModel: IGlobalModel = {
  namespace: 'global',

  state: {},
  effects: {},
  reducers: {},
  subscriptions: {
    setup({ history }) {
      history.listen(({ pathname }) => {
        if (pathname !== '/login' && !localStorage.getItem('userPhone')) {
          history.push('/login')
        }
      });
    },
  },
};

export default GlobalModel;
