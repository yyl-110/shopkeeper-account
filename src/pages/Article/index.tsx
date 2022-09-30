import { SyncOutlined, MessageOutlined } from '@ant-design/icons';
import { Card, Space, Button } from 'antd';
import { useSelector, useIntl, Helmet } from 'umi';
import classNames from 'classnames';
import Header from '@/components/Header';
import { HotArticle, HotVideo } from '@/components/Hot';
import Navigation from '@/components/Header/Navigation';
import {
  CommentButton,
  EditButton,
  HistoryButton,
  RewardButton,
  ShareButton,
} from '@/components/Button';
import styles from './index.less';
import { useEffect, useState } from 'react';

const Article = function ({ ...props }) {
  const settings = useSelector((state) => state.settings);
  const intl = useIntl();
  const { location } = props;
  const [shadow, setShadow] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState({});

  const content =
    '<p data-track="1"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">提到生活中的不良习惯，抽烟、喝酒必然是榜上有名的。长期抽烟、喝酒的人，往往也会面临着比他人更高的疾病风险，但很多烟民、酒民却表示，自己虽然爱喝酒、爱抽烟，但平时也很爱喝茶。都说坚持喝茶对健康长寿有好处，说不定就能抵消烟酒的危害。</span></p><div class="pgc-img"><img src="https://p26.toutiaoimg.com/origin/tos-cn-i-qvj2lq49k0/c4318539cf474b5e93ec7bec5e54524c?from=pc" img_width="600" img_height="400" alt="抽烟、喝酒的人，平时也爱喝茶会怎么样？茶叶能消除烟酒危害吗？" inline="0" class="syl-page-img" style="height: auto;"><p class="pgc-img-caption"></p></div><p data-track="2"><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">茶叶能消除烟、酒的危害吗？</span></strong></p><p data-track="3"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">茶叶中的茶多酚、儿茶素等物质被看做对抗人体氧化、清除自由基的一种帮手。在世界范围内有非常多的研究表明，喜欢喝茶也能因为其中的这些营养物质，给健康带来很大的帮助，有助于降低发生心血管疾病的风险，保护健康。</span></p><p data-track="4"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">因此很多爱抽烟、爱喝酒的人，在无法戒掉这些坏习惯的时候选择通过喝茶来养生。但结果真的能满足人们的需求吗？</span></p><p data-track="5"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">北京大学公共卫生学院的一项研究调查了近50万人，随访了10多年，结果发现，喝茶和多种癌症之间都存在一定的联系。在参试人群中，有大约42.1%的男性和16.1%的女性坚持每天喝茶，但是</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">喝茶多的人，和喝茶比较少的人相比，发生癌症的风险反而更高了</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">。</span></p><p data-track="6"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">研究者表示，这和中国人烟酒茶不分家的饮食习惯有很大的关系，认为喝茶能够预防癌症，消除烟酒的伤害，导致在喝酒、抽烟的时候更加肆无忌惮，可能也会在无形中增加癌症风险，让健康面临威胁。</span></p><p data-track="7"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">其次喝茶这件事本身也可能给健康带来一定的威胁。</span></p><div class="pgc-img"><img src="https://p26.toutiaoimg.com/origin/tos-cn-i-qvj2lq49k0/bc8704697dc94310b3a82f60804b765f?from=pc" img_width="600" img_height="400" alt="抽烟、喝酒的人，平时也爱喝茶会怎么样？茶叶能消除烟酒危害吗？" inline="0" class="syl-page-img" style="height: auto;"><p class="pgc-img-caption"></p></div><p data-track="8"><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">喝茶不当，不仅不防癌，还可能致癌</span></strong></p><p data-track="9"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">在我国的潮汕等地，都有喝功夫茶的习惯。当地的人认为滚烫的茶水才能激发茶叶中的香气，得到更好的滋味。但事实表明，</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">长期饮用热茶（温度超过65℃）</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">，可能会增加发生食管癌的风险。</span></p><p data-track="10"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">在喝茶、进食的时候，口腔黏膜和食管黏膜都可能受到刺激。它们能够接受的温度大约在50℃左右。当你长期进食超过65℃的食物时，就会给口腔、食管黏膜造成烫伤。黏膜需要自身的修复功能，不断地完善黏膜细胞。</span></p><p data-track="11"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">但随着黏膜不断地受到损伤，身体大量复制和修复细胞的过程中就可能出现一些</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">“异型性”细胞</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">，也就开始诱发了</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">食管溃疡</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">。如果在这之后你仍然没有意识到食管黏膜受损的事实，并且及时纠正错误的饮茶习惯，就可能一步一步地诱发黏膜发生癌变，最终诱发</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">食管癌</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">，给健康造成很大的威胁。</span></p><p data-track="12"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">所以，喝茶这件事并不见得就一定是养生的事情，如果你选择了错误的喝茶方法，也可能给健康带来更高的患癌风险。</span></p><div class="pgc-img"><img src="https://p26.toutiaoimg.com/origin/tos-cn-i-qvj2lq49k0/0d5efe7ae6fa4a6a9fca6d73459dd313?from=pc" img_width="600" img_height="400" alt="抽烟、喝酒的人，平时也爱喝茶会怎么样？茶叶能消除烟酒危害吗？" inline="0" class="syl-page-img" style="height: auto;"><p class="pgc-img-caption"></p></div><p data-track="13"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">不仅如此，喝茶这件事也根本没办法消除香烟和酒精的危害。香烟和酒精在进入人体后，会迅速地对人体内的</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">心脏</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">、</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">大脑</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">、</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">血管</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">、</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">肺部</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">、</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">肝脏</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">等器官造成损伤，并且在细胞的DNA内造成很大的伤害，从而诱发更高的患癌风险。</span></p><p data-track="14"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">当你默认“喝茶能抵消烟酒危害”的时候，也会在无形中受到影响，尽管内心知道抽烟、喝酒会损伤健康，但仍然无法控制的会出现这些行为，并且心里抱着侥幸的想法，通过多喝茶来消除这些危害。事实上喝茶摄入的那些茶多酚、儿茶素根本无法消除烟酒危害。</span></p><div class="pgc-img"><img src="https://p26.toutiaoimg.com/origin/tos-cn-i-qvj2lq49k0/11efeae6f7d9471688735c6dca679389?from=pc" img_width="600" img_height="400" alt="抽烟、喝酒的人，平时也爱喝茶会怎么样？茶叶能消除烟酒危害吗？" inline="0" class="syl-page-img" style="height: auto;"><p class="pgc-img-caption"></p></div><p data-track="15"><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">如果你符合以下4种情况，喝茶还可能给你带来更大的伤害。</span></strong></p><p data-track="16"><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">第一种正在服用降压药等控制血压</span></strong></p><p data-track="17"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">在服用降压药期间，人体内的血压会出现一定的下降。而喝茶这件事对血管也会带来一定的影响。但</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">用茶配降压药</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">，很可能会影响药物的疗效，特别是喜欢喝浓茶的人，也可能让高血压患者一直保持兴奋，</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">影响血压</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">。</span></p><p data-track="18"><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">第二种刚喝完酒，想喝茶解酒</span></strong></p><p data-track="19"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">酒精会让大脑神经高度兴奋，但是茶叶中的茶碱、咖啡碱也可能让神经兴奋，从而加重心脏的负担，不仅不能帮助解酒，还可能给心脏带来较大的伤害。</span></p><div class="pgc-img"><img src="https://p26.toutiaoimg.com/origin/tos-cn-i-qvj2lq49k0/eabdb925d3cb468490dc9957a2d3a9bd?from=pc" img_width="600" img_height="400" alt="抽烟、喝酒的人，平时也爱喝茶会怎么样？茶叶能消除烟酒危害吗？" inline="0" class="syl-page-img" style="height: auto;"><p class="pgc-img-caption"></p></div><p data-track="20"><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">第三种，存在肝功能代谢异常的人群</span></strong></p><p data-track="21"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">相比之下，喝茶后肝脏需要尽快地代谢其中的茶碱等物质，如果你本身就存在肝功能异常的问题，喝酒、抽烟和喝茶都是可能影响肝脏负担过重的因素，为了健康着想，还是少接触为好。</span></p><p data-track="22"><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">第四种就是有失眠、睡眠障碍问题的人</span></strong></p><p data-track="23"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">喝茶对很多人来说是提神的，在困倦的时候能够借助其中的茶碱来刺激神经兴奋。但是对本身就有失眠、睡眠障碍的人来说，喝茶只会让人入睡更加困难。</span></p><p data-track="24"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">喜欢抽烟、喝酒的人平时也爱喝茶，并不能因此抵消香烟和酒精带来的危害。反而可能因为有了“喝茶抵消烟酒伤害”的想法，而更加肆无忌惮的饮酒，甚至可能因为错误的饮茶习惯而增加患癌风险，如果你也存在这种情况，谨慎考虑什么时候戒酒、戒烟。</span></p><blockquote class="pgc-blockquote-abstract"><p>参考资料：</p><p data-track="30">1、抽烟、喝酒和喝茶，三样都占的人一定要看看·健康时报·2021-12-15</p><p data-track="31">2、对50万人调查10余年发现：不戒烟酒，喝茶防不了癌·环球网·2019-10-2</p><p data-track="32">3、一天、一年、一生中分别喝什么茶？茶叶院士总结了一个规律·生命时报·2021-10-30</p><p data-track="33" class="syl-page-br"><br></p></blockquote>';
  return (
    <>
      <Helmet encodeSpecialCharacters={false}>
        <title>{`${
          settings && settings.site ? settings.site.name : 'ITELLYOU , 我告诉你'
        }`}</title>
        {/* <meta
          name="keywords"
          content={intl.formatMessage({ id: 'keywords' })}
        />
        <meta
          name="description"
          content={intl.formatMessage({ id: 'description' })}
        /> */}
      </Helmet>
      <div
        className={classNames(styles['fix-header'], {
          [styles['shadow']]: shadow,
        })}
      >
        <Header
          {...props}
          navigation={<Navigation overlayStyle={overlayStyle} />}
        />
      </div>
      <div className={styles['article-detail-container']}>
        <div className="left-sidebar">
          <div style={{ position: 'fixed', top: '164px', display: 'flex' }}>
            <Space key="side" size="large" direction="vertical">
              <RewardButton block simple author="1">
                打赏
              </RewardButton>
              <CommentButton
                onClick={() => scrollToElement(commentViewRef.current)}
                block
                size="small"
              >
                评论
              </CommentButton>
              <ShareButton block>分享</ShareButton>
            </Space>
          </div>
        </div>
        <div className="main">
          <div className="show-monitor">
            <div className="article-content">
              <h1>
                抽烟、喝酒的人，平时也爱喝茶会怎么样？茶叶能消除烟酒危害吗？
              </h1>
              <article dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </div>
        <div className="right-sidebar">
          <Space direction="vertical" size="large">
            <HotArticle />
            <HotVideo />
          </Space>
        </div>
      </div>
    </>
  );
};

export default Article;
