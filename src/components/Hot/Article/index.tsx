import Board from '../board';
import List from '@/components/List';
import { Link, useDispatch, useSelector } from 'umi';
import styles from '../index.less';
import classNames from 'classnames';
import { icons } from 'antd/lib/image/PreviewGroup';
export default () => {
  const dispatch = useDispatch();
  const dataSourcex = useSelector(state => state.explore.recommends);

  const dataSource = [
    '航天员入住中国空间站一年啦',
    '赤峰：一伙唐山人曾打砸派出所属实',
    '上海石化火灾已致1死 直击现场',
    '开在麦田里的“麦客”',
    '福建舰为什么叫福建舰，热门事件',
    '福建舰为什么叫福建舰，热门事件',
    '福建舰为什么叫福建舰，热门事件',
    '福建舰为什么叫福建舰，热门事件',
    '福建舰为什么叫福建舰，热门事件',
    '福建舰为什么叫福建舰，热门事件',
    '福建舰为什么叫福建舰，热门事件',
  ];

  const refresh = async () => {
    await dispatch({
      type: 'explore/recommends',
      payload: {},
    });
  };

  const renderItem = (item, key) => {
    return (
      <Link to="/news" className={styles['article-item']}>
        {key == 0 && <i className="icon-stick"></i>}
        {key > 0 && <span className={`news-index num-${key}`}>{key}</span>}
        <div className="news-title">{item}</div>
        <i
          className={classNames('news-icon', {
            hot: !(key % 3),
            new: !(key % 5),
          })}
        ></i>
      </Link>
    );
  };

  return (
    <Board
      title={
        <>
          <img
            style={{
              width: '24px',
              height: '22px',
              marginRight: '8px',
            }}
            src={require('@/assets/hotArticle.png')}
          />
          头条热榜
        </>
      }
      onRefresh={refresh}
    >
      <List dataSource={dataSource} renderItem={renderItem} />
    </Board>
  );
};
