import { SyncOutlined, MessageOutlined, StepBackwardOutlined, StarFilled } from '@ant-design/icons';
import { Card, Space, Button, Divider } from 'antd';
import { useSelector, useIntl, Helmet } from 'umi';
import classnames from 'classnames';
import Header from '@/components/Header';
import { HotArticle, HotVideo } from '@/components/Hot';
import Navigation from '@/components/Header/Navigation';
import { CommentButton, EditButton, HistoryButton, RewardButton, ShareButton } from '@/components/Button';
import styles from './index.less';
import React, { useEffect, useState } from 'react';
import FooterBar from '@/components/FooterBar';
import RightBar from '@/components/RightBar';

const Article = function({ ...props }) {
  const settings = useSelector(state => state.settings);
  const intl = useIntl();
  const { location } = props;
  const [shadow, setShadow] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState({});

  const commont = () => {
    return (
      <div className="ttp-comment-wrapper">
        <div className="title">
          评论 <span>2</span>
        </div>
        <div className="main-input">
          <div className="ttp-avatar auth-none">
            <img
              src="https://sf6-cdn-tos.toutiaostatic.com/img/user-avatar/e2750fe963f76b6ea4b17504abe81415~300x300.image"
              alt=""
            />
          </div>
          <div className="ttp-comment-input">
            <textarea className="comment-textarea" placeholder="说点什么吧..."></textarea>
            <div className="action">
              <button type="button" className="submit-btn">
                评论
              </button>
            </div>
          </div>
        </div>
        <div className="CommentList">
          <div className="li">
            <div className="ttp-comment-item">
              <a aria-hidden="true">
                <div className="ttp-avatar auth-none">
                  <img
                    src="https://p1-dy.bytexservice.com/img/user-avatar/3f5bad96f6b1383f2c2df9f12048fb7e~300x300.image"
                    alt=""
                  />
                </div>
              </a>
              <div className="comment-info">
                <div className="header">
                  <div className="user-info">
                    <a href="/c/user/3931486351538141/?source=tuwen_detail" rel="nofollow" target="_blank">
                      <div className="user-name">
                        <span className="name">乐观的小红花4</span>
                      </div>
                    </a>
                  </div>
                  <div className="right-action">
                    <div role="button" aria-label="点赞0" aria-pressed="false" className="ttp-comment-like">
                      <div className="inner">
                        <span className="text">赞</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.6547 9.01851L13.0678 8.94922C13.048 9.11689 13.1008 9.28501 13.213 9.41119C13.3251 9.53738 13.4859 9.60957 13.6547 9.60957V9.01851ZM14.0618 5.57064L14.6487 5.63993L14.0618 5.57064ZM9.04306 8.57151L8.52223 8.29208L9.04306 8.57151ZM5.9138 18.7304L5.64546 19.2571L5.9138 18.7304ZM5.03097 17.8476L5.55761 17.5793L5.03097 17.8476ZM18.4092 18.0512L18.901 18.3791L18.4092 18.0512ZM17.5543 18.7741L17.796 19.3135L17.5543 18.7741ZM19.6188 11.9347L19.036 11.8365L19.6188 11.9347ZM19.7277 10.0391L19.1733 10.2442L19.7277 10.0391ZM19.0402 9.22612L18.7459 9.73867L19.0402 9.22612ZM4.81177 10.9756L4.221 10.9572L4.81177 10.9756ZM6.7679 9.0195L6.74946 8.42872L6.7679 9.0195ZM19.036 11.8365L18.308 16.1572L19.4737 16.3536L20.2017 12.0329L19.036 11.8365ZM15.7035 18.3596H8.043V19.5417H15.7035V18.3596ZM5.40185 15.7184V11.1189H4.21973V15.7184H5.40185ZM13.6547 9.60957H17.1529V8.42745H13.6547V9.60957ZM9.5639 8.85094L11.582 5.08933L10.5403 4.53047L8.52223 8.29208L9.5639 8.85094ZM13.4748 5.50135L13.0678 8.94922L14.2417 9.0878L14.6487 5.63993L13.4748 5.50135ZM6.91118 9.60957H8.29598V8.42745H6.91118V9.60957ZM13.0901 4.69329C13.3631 4.86625 13.5126 5.18044 13.4748 5.50135L14.6487 5.63993C14.7399 4.86742 14.3799 4.11109 13.7228 3.69475L13.0901 4.69329ZM8.52223 8.29208C8.47751 8.37544 8.39058 8.42745 8.29598 8.42745V9.60957C8.82611 9.60957 9.31329 9.31808 9.5639 8.85094L8.52223 8.29208ZM8.043 18.3596C7.46756 18.3596 7.07152 18.3591 6.76431 18.334C6.464 18.3095 6.30099 18.2644 6.18214 18.2038L5.64546 19.2571C5.95874 19.4167 6.29464 19.4817 6.66805 19.5122C7.03456 19.5421 7.48706 19.5417 8.043 19.5417V18.3596ZM4.21973 15.7184C4.21973 16.2743 4.21927 16.7268 4.24921 17.0934C4.27972 17.4668 4.34471 17.8027 4.50433 18.1159L5.55761 17.5793C5.49705 17.4604 5.45195 17.2974 5.42741 16.9971C5.40231 16.6899 5.40185 16.2939 5.40185 15.7184H4.21973ZM6.18214 18.2038C5.91324 18.0668 5.69462 17.8482 5.55761 17.5793L4.50433 18.1159C4.75468 18.6073 5.15414 19.0067 5.64546 19.2571L6.18214 18.2038ZM18.308 16.1572C18.2258 16.6448 18.1692 16.9782 18.1056 17.2359C18.0437 17.4863 17.9844 17.6228 17.9175 17.7233L18.901 18.3791C19.0736 18.1203 19.1745 17.8378 19.2531 17.5196C19.33 17.2085 19.3945 16.8237 19.4737 16.3536L18.308 16.1572ZM15.7035 19.5417C16.1802 19.5417 16.5704 19.5421 16.8899 19.5179C17.2167 19.4932 17.5121 19.4407 17.796 19.3135L17.3127 18.2347C17.2025 18.284 17.058 18.3197 16.8008 18.3392C16.5362 18.3592 16.198 18.3596 15.7035 18.3596V19.5417ZM17.9175 17.7233C17.7681 17.9473 17.5584 18.1246 17.3127 18.2347L17.796 19.3135C18.245 19.1124 18.628 18.7884 18.901 18.3791L17.9175 17.7233ZM20.2017 12.0329C20.2844 11.5417 20.3533 11.136 20.38 10.8048C20.4072 10.4682 20.3975 10.146 20.282 9.83395L19.1733 10.2442C19.2025 10.3231 19.2229 10.4471 19.2017 10.7098C19.1801 10.978 19.1222 11.3245 19.036 11.8365L20.2017 12.0329ZM17.1529 9.60957C17.6721 9.60957 18.0234 9.61009 18.2915 9.63332C18.554 9.65607 18.6729 9.69676 18.7459 9.73867L19.3346 8.71357C19.0461 8.54788 18.73 8.48476 18.3935 8.45561C18.0625 8.42693 17.651 8.42745 17.1529 8.42745V9.60957ZM20.282 9.83395C20.1071 9.36113 19.7718 8.96465 19.3346 8.71357L18.7459 9.73867C18.9431 9.85196 19.0944 10.0308 19.1733 10.2442L20.282 9.83395ZM11.582 5.08933C11.8743 4.54443 12.5678 4.36233 13.0901 4.69329L13.7228 3.69475C12.6206 2.99633 11.1572 3.3806 10.5403 4.53047L11.582 5.08933ZM5.40185 11.1189C5.40185 11.0399 5.40193 11.014 5.40255 10.9941L4.221 10.9572C4.21966 11.0002 4.21973 11.0488 4.21973 11.1189H5.40185ZM6.91118 8.42745C6.84112 8.42745 6.7925 8.42738 6.74946 8.42872L6.78634 9.61027C6.8063 9.60965 6.8322 9.60957 6.91118 9.60957V8.42745ZM5.40255 10.9941C5.42609 10.2398 6.03206 9.63381 6.78634 9.61027L6.74946 8.42872C5.37124 8.47174 4.26402 9.57896 4.221 10.9572L5.40255 10.9941Z"
                            fill="#222222"
                          ></path>
                          <path d="M8.37335 9.26562V19.518" stroke="#222222" stroke-width="1.29874"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="body">
                  <p className="content">点赞、哈哈哈哈哈</p>
                </div>
                <div className="footer">
                  <div className="left-action">
                    <button className="reply-btn">回复</button>
                    <span className="dot">·</span>
                    <span className="time">3分钟前</span>
                  </div>
                  <div className="right-action">
                    <div role="button" aria-label="举报" className="ttp-comment-report">
                      <i></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="li">
            <div className="ttp-comment-item">
              <a aria-hidden="true">
                <div className="ttp-avatar auth-none">
                  <img
                    src="https://p1-dy.bytexservice.com/img/user-avatar/3f5bad96f6b1383f2c2df9f12048fb7e~300x300.image"
                    alt=""
                  />
                </div>
              </a>
              <div className="comment-info">
                <div className="header">
                  <div className="user-info">
                    <a href="/c/user/3931486351538141/?source=tuwen_detail" rel="nofollow" target="_blank">
                      <div className="user-name">
                        <span className="name">乐观的小红花4</span>
                      </div>
                    </a>
                  </div>
                  <div className="right-action">
                    <div role="button" aria-label="点赞0" aria-pressed="false" className="ttp-comment-like">
                      <div className="inner">
                        <span className="text">赞</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.6547 9.01851L13.0678 8.94922C13.048 9.11689 13.1008 9.28501 13.213 9.41119C13.3251 9.53738 13.4859 9.60957 13.6547 9.60957V9.01851ZM14.0618 5.57064L14.6487 5.63993L14.0618 5.57064ZM9.04306 8.57151L8.52223 8.29208L9.04306 8.57151ZM5.9138 18.7304L5.64546 19.2571L5.9138 18.7304ZM5.03097 17.8476L5.55761 17.5793L5.03097 17.8476ZM18.4092 18.0512L18.901 18.3791L18.4092 18.0512ZM17.5543 18.7741L17.796 19.3135L17.5543 18.7741ZM19.6188 11.9347L19.036 11.8365L19.6188 11.9347ZM19.7277 10.0391L19.1733 10.2442L19.7277 10.0391ZM19.0402 9.22612L18.7459 9.73867L19.0402 9.22612ZM4.81177 10.9756L4.221 10.9572L4.81177 10.9756ZM6.7679 9.0195L6.74946 8.42872L6.7679 9.0195ZM19.036 11.8365L18.308 16.1572L19.4737 16.3536L20.2017 12.0329L19.036 11.8365ZM15.7035 18.3596H8.043V19.5417H15.7035V18.3596ZM5.40185 15.7184V11.1189H4.21973V15.7184H5.40185ZM13.6547 9.60957H17.1529V8.42745H13.6547V9.60957ZM9.5639 8.85094L11.582 5.08933L10.5403 4.53047L8.52223 8.29208L9.5639 8.85094ZM13.4748 5.50135L13.0678 8.94922L14.2417 9.0878L14.6487 5.63993L13.4748 5.50135ZM6.91118 9.60957H8.29598V8.42745H6.91118V9.60957ZM13.0901 4.69329C13.3631 4.86625 13.5126 5.18044 13.4748 5.50135L14.6487 5.63993C14.7399 4.86742 14.3799 4.11109 13.7228 3.69475L13.0901 4.69329ZM8.52223 8.29208C8.47751 8.37544 8.39058 8.42745 8.29598 8.42745V9.60957C8.82611 9.60957 9.31329 9.31808 9.5639 8.85094L8.52223 8.29208ZM8.043 18.3596C7.46756 18.3596 7.07152 18.3591 6.76431 18.334C6.464 18.3095 6.30099 18.2644 6.18214 18.2038L5.64546 19.2571C5.95874 19.4167 6.29464 19.4817 6.66805 19.5122C7.03456 19.5421 7.48706 19.5417 8.043 19.5417V18.3596ZM4.21973 15.7184C4.21973 16.2743 4.21927 16.7268 4.24921 17.0934C4.27972 17.4668 4.34471 17.8027 4.50433 18.1159L5.55761 17.5793C5.49705 17.4604 5.45195 17.2974 5.42741 16.9971C5.40231 16.6899 5.40185 16.2939 5.40185 15.7184H4.21973ZM6.18214 18.2038C5.91324 18.0668 5.69462 17.8482 5.55761 17.5793L4.50433 18.1159C4.75468 18.6073 5.15414 19.0067 5.64546 19.2571L6.18214 18.2038ZM18.308 16.1572C18.2258 16.6448 18.1692 16.9782 18.1056 17.2359C18.0437 17.4863 17.9844 17.6228 17.9175 17.7233L18.901 18.3791C19.0736 18.1203 19.1745 17.8378 19.2531 17.5196C19.33 17.2085 19.3945 16.8237 19.4737 16.3536L18.308 16.1572ZM15.7035 19.5417C16.1802 19.5417 16.5704 19.5421 16.8899 19.5179C17.2167 19.4932 17.5121 19.4407 17.796 19.3135L17.3127 18.2347C17.2025 18.284 17.058 18.3197 16.8008 18.3392C16.5362 18.3592 16.198 18.3596 15.7035 18.3596V19.5417ZM17.9175 17.7233C17.7681 17.9473 17.5584 18.1246 17.3127 18.2347L17.796 19.3135C18.245 19.1124 18.628 18.7884 18.901 18.3791L17.9175 17.7233ZM20.2017 12.0329C20.2844 11.5417 20.3533 11.136 20.38 10.8048C20.4072 10.4682 20.3975 10.146 20.282 9.83395L19.1733 10.2442C19.2025 10.3231 19.2229 10.4471 19.2017 10.7098C19.1801 10.978 19.1222 11.3245 19.036 11.8365L20.2017 12.0329ZM17.1529 9.60957C17.6721 9.60957 18.0234 9.61009 18.2915 9.63332C18.554 9.65607 18.6729 9.69676 18.7459 9.73867L19.3346 8.71357C19.0461 8.54788 18.73 8.48476 18.3935 8.45561C18.0625 8.42693 17.651 8.42745 17.1529 8.42745V9.60957ZM20.282 9.83395C20.1071 9.36113 19.7718 8.96465 19.3346 8.71357L18.7459 9.73867C18.9431 9.85196 19.0944 10.0308 19.1733 10.2442L20.282 9.83395ZM11.582 5.08933C11.8743 4.54443 12.5678 4.36233 13.0901 4.69329L13.7228 3.69475C12.6206 2.99633 11.1572 3.3806 10.5403 4.53047L11.582 5.08933ZM5.40185 11.1189C5.40185 11.0399 5.40193 11.014 5.40255 10.9941L4.221 10.9572C4.21966 11.0002 4.21973 11.0488 4.21973 11.1189H5.40185ZM6.91118 8.42745C6.84112 8.42745 6.7925 8.42738 6.74946 8.42872L6.78634 9.61027C6.8063 9.60965 6.8322 9.60957 6.91118 9.60957V8.42745ZM5.40255 10.9941C5.42609 10.2398 6.03206 9.63381 6.78634 9.61027L6.74946 8.42872C5.37124 8.47174 4.26402 9.57896 4.221 10.9572L5.40255 10.9941Z"
                            fill="#222222"
                          ></path>
                          <path d="M8.37335 9.26562V19.518" stroke="#222222" stroke-width="1.29874"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="body">
                  <p className="content">点赞、哈哈哈哈哈</p>
                </div>
                <div className="footer">
                  <div className="left-action">
                    <button className="reply-btn">回复</button>
                    <span className="dot">·</span>
                    <span className="time">3分钟前</span>
                  </div>
                  <div className="right-action">
                    <div role="button" aria-label="举报" className="ttp-comment-report">
                      <i></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const content =
    '<p data-track="1"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">提到生活中的不良习惯，抽烟、喝酒必然是榜上有名的。长期抽烟、喝酒的人，往往也会面临着比他人更高的疾病风险，但很多烟民、酒民却表示，自己虽然爱喝酒、爱抽烟，但平时也很爱喝茶。都说坚持喝茶对健康长寿有好处，说不定就能抵消烟酒的危害。</span></p><div class="pgc-img"><img src="https://p26.toutiaoimg.com/origin/tos-cn-i-qvj2lq49k0/c4318539cf474b5e93ec7bec5e54524c?from=pc" img_width="600" img_height="400" alt="抽烟、喝酒的人，平时也爱喝茶会怎么样？茶叶能消除烟酒危害吗？" inline="0" class="syl-page-img" style="height: auto;"><p class="pgc-img-caption"></p></div><p data-track="2"><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">茶叶能消除烟、酒的危害吗？</span></strong></p><p data-track="3"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">茶叶中的茶多酚、儿茶素等物质被看做对抗人体氧化、清除自由基的一种帮手。在世界范围内有非常多的研究表明，喜欢喝茶也能因为其中的这些营养物质，给健康带来很大的帮助，有助于降低发生心血管疾病的风险，保护健康。</span></p><p data-track="4"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">因此很多爱抽烟、爱喝酒的人，在无法戒掉这些坏习惯的时候选择通过喝茶来养生。但结果真的能满足人们的需求吗？</span></p><p data-track="5"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">北京大学公共卫生学院的一项研究调查了近50万人，随访了10多年，结果发现，喝茶和多种癌症之间都存在一定的联系。在参试人群中，有大约42.1%的男性和16.1%的女性坚持每天喝茶，但是</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">喝茶多的人，和喝茶比较少的人相比，发生癌症的风险反而更高了</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">。</span></p><p data-track="6"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">研究者表示，这和中国人烟酒茶不分家的饮食习惯有很大的关系，认为喝茶能够预防癌症，消除烟酒的伤害，导致在喝酒、抽烟的时候更加肆无忌惮，可能也会在无形中增加癌症风险，让健康面临威胁。</span></p><p data-track="7"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">其次喝茶这件事本身也可能给健康带来一定的威胁。</span></p><div class="pgc-img"><img src="https://p26.toutiaoimg.com/origin/tos-cn-i-qvj2lq49k0/bc8704697dc94310b3a82f60804b765f?from=pc" img_width="600" img_height="400" alt="抽烟、喝酒的人，平时也爱喝茶会怎么样？茶叶能消除烟酒危害吗？" inline="0" class="syl-page-img" style="height: auto;"><p class="pgc-img-caption"></p></div><p data-track="8"><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">喝茶不当，不仅不防癌，还可能致癌</span></strong></p><p data-track="9"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">在我国的潮汕等地，都有喝功夫茶的习惯。当地的人认为滚烫的茶水才能激发茶叶中的香气，得到更好的滋味。但事实表明，</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">长期饮用热茶（温度超过65℃）</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">，可能会增加发生食管癌的风险。</span></p><p data-track="10"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">在喝茶、进食的时候，口腔黏膜和食管黏膜都可能受到刺激。它们能够接受的温度大约在50℃左右。当你长期进食超过65℃的食物时，就会给口腔、食管黏膜造成烫伤。黏膜需要自身的修复功能，不断地完善黏膜细胞。</span></p><p data-track="11"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">但随着黏膜不断地受到损伤，身体大量复制和修复细胞的过程中就可能出现一些</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">“异型性”细胞</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">，也就开始诱发了</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">食管溃疡</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">。如果在这之后你仍然没有意识到食管黏膜受损的事实，并且及时纠正错误的饮茶习惯，就可能一步一步地诱发黏膜发生癌变，最终诱发</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">食管癌</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">，给健康造成很大的威胁。</span></p><p data-track="12"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">所以，喝茶这件事并不见得就一定是养生的事情，如果你选择了错误的喝茶方法，也可能给健康带来更高的患癌风险。</span></p><div class="pgc-img"><img src="https://p26.toutiaoimg.com/origin/tos-cn-i-qvj2lq49k0/0d5efe7ae6fa4a6a9fca6d73459dd313?from=pc" img_width="600" img_height="400" alt="抽烟、喝酒的人，平时也爱喝茶会怎么样？茶叶能消除烟酒危害吗？" inline="0" class="syl-page-img" style="height: auto;"><p class="pgc-img-caption"></p></div><p data-track="13"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">不仅如此，喝茶这件事也根本没办法消除香烟和酒精的危害。香烟和酒精在进入人体后，会迅速地对人体内的</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">心脏</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">、</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">大脑</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">、</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">血管</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">、</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">肺部</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">、</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">肝脏</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">等器官造成损伤，并且在细胞的DNA内造成很大的伤害，从而诱发更高的患癌风险。</span></p><p data-track="14"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">当你默认“喝茶能抵消烟酒危害”的时候，也会在无形中受到影响，尽管内心知道抽烟、喝酒会损伤健康，但仍然无法控制的会出现这些行为，并且心里抱着侥幸的想法，通过多喝茶来消除这些危害。事实上喝茶摄入的那些茶多酚、儿茶素根本无法消除烟酒危害。</span></p><div class="pgc-img"><img src="https://p26.toutiaoimg.com/origin/tos-cn-i-qvj2lq49k0/11efeae6f7d9471688735c6dca679389?from=pc" img_width="600" img_height="400" alt="抽烟、喝酒的人，平时也爱喝茶会怎么样？茶叶能消除烟酒危害吗？" inline="0" class="syl-page-img" style="height: auto;"><p class="pgc-img-caption"></p></div><p data-track="15"><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">如果你符合以下4种情况，喝茶还可能给你带来更大的伤害。</span></strong></p><p data-track="16"><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">第一种正在服用降压药等控制血压</span></strong></p><p data-track="17"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">在服用降压药期间，人体内的血压会出现一定的下降。而喝茶这件事对血管也会带来一定的影响。但</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">用茶配降压药</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">，很可能会影响药物的疗效，特别是喜欢喝浓茶的人，也可能让高血压患者一直保持兴奋，</span><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">影响血压</span></strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">。</span></p><p data-track="18"><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">第二种刚喝完酒，想喝茶解酒</span></strong></p><p data-track="19"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">酒精会让大脑神经高度兴奋，但是茶叶中的茶碱、咖啡碱也可能让神经兴奋，从而加重心脏的负担，不仅不能帮助解酒，还可能给心脏带来较大的伤害。</span></p><div class="pgc-img"><img src="https://p26.toutiaoimg.com/origin/tos-cn-i-qvj2lq49k0/eabdb925d3cb468490dc9957a2d3a9bd?from=pc" img_width="600" img_height="400" alt="抽烟、喝酒的人，平时也爱喝茶会怎么样？茶叶能消除烟酒危害吗？" inline="0" class="syl-page-img" style="height: auto;"><p class="pgc-img-caption"></p></div><p data-track="20"><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">第三种，存在肝功能代谢异常的人群</span></strong></p><p data-track="21"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">相比之下，喝茶后肝脏需要尽快地代谢其中的茶碱等物质，如果你本身就存在肝功能异常的问题，喝酒、抽烟和喝茶都是可能影响肝脏负担过重的因素，为了健康着想，还是少接触为好。</span></p><p data-track="22"><strong><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">第四种就是有失眠、睡眠障碍问题的人</span></strong></p><p data-track="23"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">喝茶对很多人来说是提神的，在困倦的时候能够借助其中的茶碱来刺激神经兴奋。但是对本身就有失眠、睡眠障碍的人来说，喝茶只会让人入睡更加困难。</span></p><p data-track="24"><span style="color: #000000; --tt-darkmode-color: #A3A3A3;">喜欢抽烟、喝酒的人平时也爱喝茶，并不能因此抵消香烟和酒精带来的危害。反而可能因为有了“喝茶抵消烟酒伤害”的想法，而更加肆无忌惮的饮酒，甚至可能因为错误的饮茶习惯而增加患癌风险，如果你也存在这种情况，谨慎考虑什么时候戒酒、戒烟。</span></p><blockquote class="pgc-blockquote-abstract"><p>参考资料：</p><p data-track="30">1、抽烟、喝酒和喝茶，三样都占的人一定要看看·健康时报·2021-12-15</p><p data-track="31">2、对50万人调查10余年发现：不戒烟酒，喝茶防不了癌·环球网·2019-10-2</p><p data-track="32">3、一天、一年、一生中分别喝什么茶？茶叶院士总结了一个规律·生命时报·2021-10-30</p><p data-track="33" class="syl-page-br"><br></p></blockquote>';
  return (
    <>
      <Helmet encodeSpecialCharacters={false}>
        <title>{`${settings && settings.site ? settings.site.name : 'ITELLYOU , 我告诉你'}`}</title>
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
        className={classnames(styles['fix-header'], {
          [styles['shadow']]: shadow,
        })}
      >
        <Header {...props} navigation={<Navigation overlayStyle={overlayStyle} />} />
      </div>
      <div className={styles['article-detail-container']}>
        <div className="left-sidebar">
          <div style={{ position: 'fixed', top: '164px', display: 'flex' }}>
            <Space key="side" size="large" direction="vertical">
              <div className={classnames('btn1', 'btn')}>
                <div className="zanWrap">
                  <img src="https://lf3-cdn2-tos.bytescm.com/toutiao/toutiao_web_pc/svgs/like.0caed57a.svg" alt="" />
                </div>
                123
              </div>
              <Divider style={{ margin: '0 auto', width: '24px', minWidth: '24px' }}></Divider>
              <div className={classnames('btn2', 'btn')}>
                <img
                  src="https://lf3-cdn2-tos.bytescm.com/toutiao/toutiao_web_pc/svgs/icon_comment.d319bd6b.svg"
                  alt=""
                />
                321
              </div>
              <div className={classnames('btn3', 'btn')}>
                <StarFilled />
                <span>收藏</span>
              </div>
              <div className={classnames('btn4', 'btn')}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAKlBMVEVHcEwhISEhISEgICAgICAhISEiIiIiIiIiIiIiIiIhISEhISEgICAiIiLvaEYqAAAADXRSTlMApN8gEMF/73CQQFkw2xS+1QAAAWdJREFUSMftlTFLw0AYhi+0Rq2OgoN0qmMDRXDv6OLqFhAcnJwcHKTgIDgJHVyFDDo4FBxdCv4BhwZiq/D+Fw80ua+57/J9OPfdkjy5e7hc3jNmlf/l6ExmWsn8VYRi4FOEIgBjDVQMFBB6Gmh+o4Ak918IDxooHyigZvcSanBvv+3+QWH3lwQuO/ww56Bh3WsM0GegO9Tjux96jO/eGfmQ537BMHX3GGz68kA198BAy+7TEETcWwnkodaCDArFbJgpZnObL26YbVhCB2ForFBauFUKKs2zitmWrY3ZlK0blpJW0LFsbcxEtLa5F61tHumjK87apuuQk6eIs7ZJq5dvXWEsDA8VmWuVZWv3VfKMVI9XTyltwIizrqBrWmJ+3Xfpzxpx1uU69Ugd5u8+NKV/fRQo1Q97/5Lsm9mQgdYtVJ1xHeA00Mpf7up5jy3UDWBfPAfbI8gnqkkLxQE++VZAW4rZVpHzA/2Awy7eroqsAAAAAElFTkSuQmCC"
                  alt=""
                />
                <span>分享</span>
              </div>
            </Space>
          </div>
        </div>
        <div className="main">
          <div className="show-monitor">
            <div className="article-content">
              <h1>抽烟、喝酒的人，平时也爱喝茶会怎么样？茶叶能消除烟酒危害吗？</h1>
              <article dangerouslySetInnerHTML={{ __html: content }} />
              {commont()}
            </div>
          </div>
        </div>
        <div className="right-sidebar">
          <Space direction="vertical" size="large">
            <div className="user-info">
              <a aria-label="作者头像" className="user-avatar" target="_blank" rel="noopener nofollow">
                <img src="https://p3.toutiaoimg.com/large/e580012c63017a4cdd3" alt="菱镜头 头像" />
              </a>
              <a
                className="user-name"
                target="_blank"
                rel="noopener nofollow"
                href="/c/user/token/MS4wLjABAAAArPaXmdC2DXe-415-h2nrseKYQwGwZkTh3xhKX7_g_d0/?source=tuwen_detail"
              >
                菱镜头
              </a>
              <p className="user-auth">头条签约作者 资深体育媒体人</p>
              <button aria-pressed="false" type="button" className="user-subscribe-wrapper">
                <i className="bui-icon icon-add_small"></i>
                <span>关注</span>
              </button>
            </div>
            <HotArticle />
            <HotVideo />
          </Space>
        </div>
      </div>
      <FooterBar />
      <RightBar home={true} />
    </>
  );
};

export default Article;
