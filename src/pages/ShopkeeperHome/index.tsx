import { Card, Space, Button, Input } from 'antd';
import { SyncOutlined, MessageOutlined, SearchOutlined, RightOutlined } from '@ant-design/icons';
import { useSelector, useDispatch, useIntl, Helmet, Link, history } from 'umi';

import classNames from 'classnames';
import Header from '@/components/Header';
import { Article, Dynamic, Question, Video } from '@/components/Content';
import { HotArticle, HotVideo } from '@/components/Hot';
import { ScrollList } from '@/components/List';
import styles from './index.less';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Navigation from '@/components/Header/Navigation';
import FooterBar from '@/components/FooterBar';
import RightBar from '../../components/RightBar/index';

const ShopkeeperHome = function({ ...props }) {
  const settings = useSelector(state => state.settings);
  const dispatch = useDispatch();
  const dataSource = useSelector(state => state.explore.recommends);
  const intl = useIntl();
  const { location } = props;
  const [headerTranslateY, setHeaderTranslateY] = useState(0);
  const [bannerTranslateY, setBannerTranslateY] = useState(0);
  const [overlayStyle, setOverlayStyle] = useState({});
  const videoRef = useRef();

  const handleScroll = useCallback(e => {
    const height = document.getElementById('banner').clientHeight;
    try {
      const top = window.pageYOffset || document.documentElement.scrollTop || e.target.scrollTop || 0;
      if (top < height) setBannerTranslateY(top);
      if (top > height) {
        const hy = top - height;
        if (hy < 64) {
          setHeaderTranslateY(hy);
          setOverlayStyle({ display: 'none' });
        } else {
          if (headerTranslateY < 64) setHeaderTranslateY(64);
          setOverlayStyle({ top: `${top + 45}px` });
        }
      } else {
        setHeaderTranslateY(0);
      }
    } catch (error) {
      console.log('error:', error);
    }
  });

  useEffect(() => {
    dispatch({
      type: 'explore/recommends',
      payload: {
        offset: 0,
        limit: 20,
        ...{},
      },
    });
    document.body.firstElementChild?.addEventListener('scroll', handleScroll);
    return () => {
      document.body.firstElementChild?.removeEventListener('scroll', handleScroll);
    };
  });

  const renderItem = ({ type, object }) => {
    return (
      <ScrollList.Item>
        {type === 'article' && <Article data={object} desc={true} authorSize="small" />}
        {type === 'question' && <Question data={object} desc={true} authorSize="small" />}
      </ScrollList.Item>
    );
  };

  return (
    <>
      <Helmet encodeSpecialCharacters={false}>
        <title>{`${settings && settings.site ? settings.site.name : '房掌柜'}`}</title>
        {/* <meta name="keywords" content={intl.formatMessage({ id: 'keywords' })} /> */}
        {/* <meta name="description" content={intl.formatMessage({ id: 'description' })} /> */}
      </Helmet>
      <div className={styles['home-container']}>
        <div id="banner" className="home-banner-wrapper">
          <div
            className="home-banner"
            style={{
              transform: `translateY(${bannerTranslateY}px)`,
            }}
          >
            <div
              className="video-poster"
              style={{
                backgroundImage: `url(https://lf3-static.bytednsdoc.com/obj/eden-cn/upqlnvhj/pc_background_bird.jpg)`,
              }}
            ></div>
            <video
              ref={videoRef}
              autoPlay
              src="https://lf3-static.bytednsdoc.com/obj/eden-cn/upqlnvhj/pc_background_bird.mp4"
              muted
              loop
              preload="auto"
            ></video>
          </div>
          <div className="logHeader">
            <svg
              version="1.1"
              id="图层_2"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="77px"
              height="27px"
              viewBox="0 0 77 27"
              enable-background="new 0 0 77 27"
            >
              <g enable-background="new    ">
                <path
                  fill="#ff5e5e"
                  d="M0.847,20.105h10.91v-1.146H2.541v-2.018h9.216V15.82l-9.54,0.074c-0.116-0.613-0.274-1.328-0.473-2.141
		c8.369,0,15.476-0.101,21.321-0.3l0.474,2.216l-8.594,0.125v1.146h8.17v2.018h-8.17v1.146h10.013v2.066H14.945v0.598
		c0,0.963-0.226,1.697-0.679,2.205c-0.453,0.506-1.063,0.789-1.831,0.846c-0.768,0.059-2.281,0.096-4.54,0.113
		c-0.149-0.814-0.357-1.703-0.623-2.666c0.955,0.084,1.909,0.125,2.864,0.125c1.079,0,1.619-0.406,1.619-1.221H0.847V20.105z
		 M11.109,1.448h3.288v2.74h2.565c0.673-0.972,1.279-1.885,1.818-2.74l2.616,1.221l-1.071,1.52h4.234v5.156h-3.039V6.629H4.035
		v2.715H0.996V4.188h4.16c-0.291-0.481-0.598-0.972-0.922-1.47l2.441-1.271C7.29,2.32,7.904,3.234,8.519,4.188h2.591V1.448z
		 M4.957,12.856V7.725h15.593v5.131H4.957z M7.996,10.963h9.515V9.618H7.996V10.963z"
                />
                <path
                  fill="#ff5e5e"
                  d="M25.805,15.971c1.37-2.292,2.42-4.576,3.151-6.851h-2.752V6.006h3.064V1.623h3.338v4.384h2.466V9.12h-2.466
		v1.968c1.121,0.582,2.158,1.158,3.113,1.731V3.017h14.348v3.089h-10.96v2.84h10.112v10.113H39.106v2.84h11.308v3.088H35.719V13.23
		l-1.345,2.84c-0.556-0.508-1.146-1.014-1.768-1.52v11.531h-3.338V15.359c-0.706,1.719-1.586,3.434-2.64,5.145
		C26.461,19.375,26.187,17.863,25.805,15.971z M45.832,16.02v-4.035h-6.726v4.035H45.832z"
                />
                <path
                  fill="#ff5e5e"
                  d="M51.41,12.084h24.734v3.039H58.995l-0.236,1.568h14.422l-0.498,5.406c-0.124,1.27-0.592,2.201-1.401,2.795
		s-1.855,0.898-3.139,0.916c-1.282,0.016-3.654,0.025-7.117,0.025c-0.232-1.096-0.54-2.275-0.922-3.537
		c2.416,0.191,4.297,0.285,5.643,0.285c1.07,0,1.826-0.055,2.266-0.168c0.44-0.111,0.748-0.307,0.922-0.584
		c0.175-0.279,0.303-0.994,0.387-2.148H54.699l0.734-4.559H51.41V12.084z M73.081,2.37v8.295H54.574V2.37H73.081z M69.494,7.701
		V5.333H58.161v2.367H69.494z"
                />
              </g>
            </svg>
            <div className="rightContent">
              <div
                className="fb"
                onClick={() => {
                  history.push('/create/article');
                }}
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2BAMAAAB+a3fuAAAAMFBMVEVHcEz////////////////////////////////////////////////wQULxTU73mpuw3LHGAAAADHRSTlMA799wQJ8agLpfoM+GoKk6AAABPklEQVQ4y5WUrU4DQRDHp1DaFNWEgKrgASpKgqxoUosADQIUtgrFA1Sc6ANg8Fgc5rZtOMIEnmDhBfh4AWjoHd3bmb2dIfzd5JfMzs7HH6DU8LiLZrwPVdWP8FfbgxCdd9DJTDha9yiEjQSpzClhe8i15VETQ41KdlJhc4c2sKrDFbuMsPtV/RhTr2BnUbZTsG6UZTlqIYpJ1wSWJ73y4fPHF6+UPPdtX32QLudG0rzbFxINYJNE1lrWmprI2nAgshn0RTaFRGRzhT2W31tYp0+3NeBaYr1ccxx7IuztHyyaU6vlTvxDBjcK03qm9VqbkTZbbSegI+yS4ZfCdvBBPAfEXfGMEAtDSKLI/Hlj2m1qN81aE3oBm1PgIar3aJ4FDe4HGfU6aFGY9riBEpheVDz5WvTk3MvHSy+/JV7+A8tEjs/vnGz4AAAAAElFTkSuQmCC"
                  alt=""
                />
                发布作品
              </div>
              <Button
                type="primary"
                onClick={() => {
                  history.push('/login');
                }}
              >
                登录
              </Button>
            </div>
          </div>
        </div>
        <div className="toutiao-header"></div>
        <div className="search-container">
          <div className="main-search">
            <Link className="logo" to="/">
              掌柜头条
            </Link>
            <div className="search">
              <Input />
              <Button icon={<i></i>} />
            </div>
            <div className="hot-word">
              <img src={require('@/assets/hotArticle.png')} />
              <span className="hot">热搜：</span>
              <Link to="/" className="words">
                河南取款难村镇银行公告
              </Link>
              <Link to="/" className="words">
                小米手环7出货超百万只
              </Link>
              <Link to="/" className="words">
                周杰伦新专辑将发布
              </Link>
            </div>
          </div>
        </div>
        <div
          className={styles['fix-header']}
          style={{
            display: headerTranslateY === 0 ? 'none' : 'block',
            transform: `translateY(${headerTranslateY}px)`,
          }}
        >
          <Header {...props} navigation={<Navigation overlayStyle={overlayStyle} />} />
        </div>
        <div className="main-content">
          <div className="left-container">
            <div className="main-nav-wrapper">
              <Navigation />
            </div>
            <ScrollList dataSource={dataSource} renderItem={renderItem} split={false} />
          </div>
          <div className="right-container">
            <Space direction="vertical" size="large">
              {localStorage.getItem('userPhone') ? (
                <div className="loginCard">
                  <div className="show-monitor">
                    <a className="user-info">
                      <img className="picture" src={require('../../assets/default_avatar.png')} alt="" />
                      <div>
                        <span className="name">12312</span>
                        <RightOutlined />
                      </div>
                    </a>
                  </div>
                  <div className="relate-num">
                    <a target="_blank" rel="noopener nofollow">
                      <p className="num">
                        <span>0</span>
                      </p>
                      <p className="word">获赞</p>
                    </a>
                    <a target="_blank" rel="noopener nofollow">
                      <p className="num">
                        <span>0</span>
                      </p>
                      <p className="word">粉丝</p>
                    </a>
                    <a target="_blank" rel="noopener nofollow">
                      <p className="num">
                        <span>2</span>
                      </p>
                      <p className="word">关注</p>
                    </a>
                  </div>
                  <div className="publisher">
                    <a className="publish-item" target="_blank" rel="noopener nofollow">
                      <img
                        src="//lf3-cdn2-tos.bytescm.com/toutiao/toutiao_web_pc/svgs/article_icon.c91fb7e0.svg"
                        alt=""
                      />
                      <p>写文章</p>
                    </a>
                    <a className="publish-item" target="_blank" rel="noopener nofollow">
                      <img src="//lf3-cdn2-tos.bytescm.com/toutiao/toutiao_web_pc/svgs/wtt_icon.0c5bb1de.svg" alt="" />
                      <p>发微头条</p>
                    </a>
                    <a className="publish-item" target="_blank" rel="noopener nofollow">
                      <img
                        src="//lf3-cdn2-tos.bytescm.com/toutiao/toutiao_web_pc/svgs/wenda_icon.0d6d1616.svg"
                        alt=""
                      />
                      <p>写回答</p>
                    </a>
                    <a className="publish-item" target="_blank" rel="noopener nofollow">
                      <img
                        src="//lf3-cdn2-tos.bytescm.com/toutiao/toutiao_web_pc/svgs/video_icon.a243e80b.svg"
                        alt=""
                      />
                      <p>发视频</p>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="user-card login">
                  <p className="login-info">
                    登录后，头条更懂你
                    <br />
                    内容更有趣
                  </p>
                  <Link to="/login" className="login-button">
                    立即登录
                  </Link>
                </div>
              )}

              <HotArticle />
              <HotVideo />
            </Space>
          </div>
        </div>
      </div>
      <FooterBar />
      <RightBar />
    </>
  );
};

ShopkeeperHome.getInitialProps = async ({ isServer, store, params }) => {
  const { dispatch, getState } = store;

  return getState();
};

export default ShopkeeperHome;
