import { Card, Space, Button, Input } from 'antd';
import { SyncOutlined, MessageOutlined, SearchOutlined } from '@ant-design/icons';
import { useSelector, useDispatch, useIntl, Helmet, Link, history } from 'umi';

import classNames from 'classnames';
import Header from '@/components/Header';
import { Article, Dynamic, Question, Video } from '@/components/Content';
import { HotArticle, HotVideo } from '@/components/Hot';
import { ScrollList } from '@/components/List';
import styles from './index.less';
import { useEffect, useRef, useState, useCallback } from 'react';
import Navigation from '@/components/Header/Navigation';

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
              <HotArticle />
              <HotVideo />
            </Space>
          </div>
        </div>
      </div>
    </>
  );
};

ShopkeeperHome.getInitialProps = async ({ isServer, store, params }) => {
  const { dispatch, getState } = store;

  return getState();
};

export default ShopkeeperHome;
