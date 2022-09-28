import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import { Tabs } from 'antd';
interface IProps {
  dispatch: Dispatch;
  loading: Boolean | undefined;
}
const About: React.FC<IProps> = props => {
  return (
    <div className={styles.about}>
      <header>
        <img src={require('../../../assets/zgh.png')} alt="" />
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="关于掌柜" key="1"></Tabs.TabPane>
          <Tabs.TabPane tab="加入" key="2"></Tabs.TabPane>
          <Tabs.TabPane tab="媒体报道" key="3"></Tabs.TabPane>
          <Tabs.TabPane tab="广告合作" key="4"></Tabs.TabPane>
          <Tabs.TabPane tab="产品合作" key="5"></Tabs.TabPane>
        </Tabs>
      </header>
      <div className={styles.aboutContent}>
        <p>今日头条是一个通用信息平台，致力于连接人与信息，让优质丰富的信息得到高效精准的分发，促使信息创造价值。</p>
        <p>
          今日头条目前拥有推荐引擎、搜索引擎、关注订阅和内容运营等多种分发方式，囊括图文、视频、问答、微头条、专栏、小说、直播、音频和小程序等多种内容体裁，并涵盖科技、体育、健康、美食、教育、三农、国风等超过100个内容领域。
        </p>
        <p>
          头条搜索是今日头条推出的搜索引擎服务，支持海量优质内容和全网公开内容的检索，为用户提供精准、专业、快捷的搜索结果。用户可以在今日头条客户端内体验，除了默认的综合搜索频道外，还有视频、资讯、小视频、图片、音乐、影视等多个垂直搜索，全方位满足搜索需求。
        </p>
        <p>
          头条号是今日头条旗下开放的内容创作与分发平台，
          实现政府部门、媒体、企业、个人等内容创作者与用户之间的智能连接。截至2019年12月，头条号帐号总数已超过 180
          万，平均每天发布 60 万条内容。
        </p>
        <p>
          微头条是今日头条旗下的社交产品，用户可通过发布图文、短视频、直播等多形式的动态与人互动，逐渐与人建立起社交关系。在微头条，用户每天产生的互动数量超过2000万，发布量近1000万，活跃的大咖超过1万位。
        </p>
      </div>
    </div>
  );
};

export default About;
