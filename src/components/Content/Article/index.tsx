import styles from '../index.less';
import classNames from 'classnames';
export default ({ data: { id, title } }) => {
  const href = `/news`;
  const covers = [
    'https://p3-sign.toutiaoimg.com/tos-cn-i-qvj2lq49k0/ada003f3ee6d4297a255f505bc280b7b~tplv-tt-cs0:640:360.jpg?_iz=31826&from=feed&x-expires=1656751375&x-signature=YYQfrE299RrW%2FXZcCGuBTWGTvDc%3D',
    'https://p3-sign.toutiaoimg.com/tos-cn-i-qvj2lq49k0/9c8224f9ff48492faef56303f6e45d8b~tplv-tt-cs0:1200:685.jpg?_iz=31826&from=feed&x-expires=1656751375&x-signature=J8rSgMwg6BstCgTiUQIUgw%2Bgkr8%3D',
    'https://p3-sign.toutiaoimg.com/tos-cn-i-qvj2lq49k0/836aea771af945ff95e0f8d902401ae3~tplv-tt-cs0:1200:800.jpg?_iz=31826&from=feed&x-expires=1656751375&x-signature=G%2BRFdMTf4KBDsi9yVKEC1NCgefo%3D',
    'https://p3-sign.toutiaoimg.com/tos-cn-i-qvj2lq49k0/ae183f67727c46f38e3c0d35e0231076~tplv-tt-cs0:1200:666.jpg?_iz=31826&from=feed&x-expires=1656751375&x-signature=k8JF4egZg0TaBEW5nw78OoeL2Mc%3D',
  ];
  const types = ['none', 'single', 'list'];
  const image_type = types[id % 3];

  return (
    <div className={styles['feed-card-wrapper']}>
      <div
        className={classNames('feed-card-article', {
          'no-cover': image_type === 'none',
          'single-cover': image_type === 'single',
          'multi-cover': image_type === 'list',
        })}
      >
        <div className="feed-card-article-l">
          <a href={href} target="_blank" rel="noopener" className="title">
            {title}
          </a>
          {image_type === 'list' && (
            <ul className="cover-list">
              {covers.map((img, key) => {
                return (
                  <li key={key}>
                    <div className="feed-card-cover">
                      <a href={href} target="_blank" rel="noopener">
                        <img src={img} alt={title} />
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <div className="feed-card-footer-cmp">
            <div className="left-tools">
              <div className="feed-card-footer-cmp-author">
                <a
                  href="/c/user/token/MS4wLjABAAAAeHqVsTegZ0A1OdSMWlhicOHkMPB3sucVywH_wxPA4Pw/?source=feed"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  上观新闻
                </a>
              </div>
              <div className="feed-card-footer-comment-cmp">
                <a
                  href="https://www.toutiao.com/article/7110037148060877325/"
                  target="_blank"
                  rel="noopener nofollow"
                  aria-label="评论数22"
                >
                  22评论
                </a>
              </div>
              <div className="feed-card-footer-time-cmp">3小时前</div>
            </div>
            <div className="right-tools">
              <div className="feed-card-footer-dislike-cmp">
                <div
                  className="dislike-wrapper dislike-button-7110037148060877325"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="dislike-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {image_type === 'single' && (
          <div className="feed-card-article-r">
            <div className="feed-card-cover">
              <a href={href} target="_blank" rel="noopener" title={title}>
                <img
                  src="//p3-sign.toutiaoimg.com/tos-cn-i-tjoges91tu/T8zCgSICmUJRCK~tplv-tt-cs0:640:360.jpg?_iz=31826&amp;from=feed&amp;x-expires=1656751375&amp;x-signature=rAVPQhdknTLhdkTD9TH9FekhV%2BE%3D"
                  alt={title}
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
