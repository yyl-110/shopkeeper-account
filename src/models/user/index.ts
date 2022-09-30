import {
    queryName,
    fetchMe,
    find,
    update,
    profile,
    logout,
    fetchAccount,
} from '@/services/user/index';
import { getPageQuery } from '@/utils';

export default {
    namespace: 'user',

    state: {
        me: null,
        detail: {},
    },

    effects: {
        *queryName({ payload }, { call }) {
            const response = yield call(queryName, payload);
            return response;
        },
        *fetchMe({ payload }, { call, put }) {
            const response = yield call(fetchMe, payload);
            if (response && response.result) {
                yield put({
                    type: 'setMe',
                    payload: response.data,
                });
            }
            return response;
        },
        *fetchAccount({ payload }, { call, put }) {
            const response = yield call(fetchAccount, payload);
            if (response && response.result) {
                yield put({
                    type: 'setMe',
                    payload: response.data,
                });
            }
            return response;
        },
        *find({ payload }, { call, put }) {
            const response = yield call(find, payload);
            if (response && response.result) {
                yield put({
                    type: 'setDetail',
                    payload: response.data,
                });
            }
            return response;
        },
        *update({ payload }, { call, put }) {
            const response = yield call(update, payload);
            if (response && response.result) {
                yield put({
                    type: 'setMe',
                    payload: response.data,
                });
            }
            return response;
        },
        *profile({ payload }, { call, put }) {
            const response = yield call(profile, payload);
            if (response && response.result) {
                yield put({
                    type: 'setMe',
                    payload: response.data,
                });
            }
            return response;
        },
        *logout(_, { call, put }) {
            const response = yield call(logout);
            yield put({
                type: 'setMe',
                payload: null,
            });
            const { redirect } = getPageQuery();
            if (window.location.pathname !== '/login' && !redirect) {
                window.location.href = `/login?redirect=${encodeURIComponent(
                    window.location.href,
                )}`;
            }
            return response;
        },
    },

    reducers: {
        setMe(state, { payload }) {
            return {
                ...state,
                me: payload ? { ...state.me, ...payload } : null,
            };
        },
        setDetail(state, { payload }) {
            return {
                ...state,
                detail: {
                    ...state.detail,
                    [payload.id]: { ...state.detail[payload.id], ...payload },
                },
            };
        },
        setBank(state, { payload: { append, ...payload } }) {
            const { me } = state;
            const bank = {};
            if (append) {
                for (const p in me.bank) {
                    bank[p] = payload[p] ? me.bank[p] + payload[p] : me.bank[p];
                }
            } else {
                bank = { ...me.bank, ...payload };
            }
            return {
                ...state,
                me: { ...me, bank },
            };
        },
    },
};
