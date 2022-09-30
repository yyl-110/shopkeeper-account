const { NODE_ENV } = process.env;
export default {
  primaryColor: '#F04142',
  title: '房掌柜',
  defaultAvatar: 'https://cdn-object.aomao.com/avatar/default.png',
  ws:
    NODE_ENV === 'production'
      ? 'wss://www.aomao.com/api/websocket'
      : 'ws://localhost:8082/websocket',
};
