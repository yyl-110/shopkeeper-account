const getNoun = (type, who) => {
  who = who || '';
  switch (type) {
    case 'user':
      return '你';
    case 'column':
      return `${who}专栏`;
    case 'question':
      return `${who}问题`;
    case 'answer':
      return `${who}回答`;
    case 'article':
      return `${who}文章`;
    case 'software':
      return `${who}软件`;
    case 'tag':
      return `标签`;
    case 'question_comment':
      return `问题下${who}评论`;
    case 'answer_comment':
      return `回答下${who}评论`;
    case 'article_comment':
      return `文章下${who}评论`;
    case 'software_comment':
      return `软件下${who}评论`;
  }
};

export default (action, type, who) => {
  switch (action) {
    case 'publish':
      return type === 'answer' ? '回答了问题' : '发表了' + getNoun(type);
    case 'comment':
      if (type.indexOf('comment') > -1) return '回复了' + getNoun(type, who);
      return '评论了' + getNoun(type, who);
    case 'follow':
      let verb = '关注了';
      if (type === 'answer' || type === 'article') verb = '收藏了';
      return verb + getNoun(type, type !== 'user' ? who : '');
    case 'like':
      return '赞了' + getNoun(type, who);
    case 'adopt':
      return '采纳了' + getNoun(type, who);
    case 'reward':
      return '打赏了' + getNoun(type, who);
    case 'payment':
      if (type === 'payment') verb = '充值了';
      return '购买了' + getNoun(type, who);
  }
};

export { getNoun };
