import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import { Row, Col, Tooltip, Button } from 'antd';
import { QuestionCircleOutlined, RightOutlined } from '@ant-design/icons';
import classnames from 'classnames';

interface IProps {
  dispatch: Dispatch;
  loading: Boolean | undefined;
}
const Creation: React.FC<IProps> = props => {
  const [showModale, setShowModal] = useState<boolean>(true);
  const data = [1, 2, 3, 4, 5];
  const info = [
    {
      title: '百粉权益',
      id: 1,
      content: [
        { minTitle: '微头条创作收益', text: '发布非转发抽奖类微头条，可获得创作收益，收益全部归作者...' },
        { minTitle: '问答创作收益', text: '发布原创优质的回答，可获得创作收益，收益全部归作者所有' },
        { minTitle: '问答创作收益', text: '发布原创优质的回答，可获得创作收益，收益全部归作者所有' },
      ],
    },
    {
      id: 2,
      title: '千粉权益',
      content: [{ minTitle: '图文赞赏', text: '发布非转发抽奖类微头条，可获得创作收益，收益全部归作者...' }],
    },
    {
      id: 3,
      title: '万粉权益',
      content: [
        { minTitle: '付费专栏', text: '发布非转发抽奖类微头条，可获得创作收益，收益全部归作者...' },
        { minTitle: '头条抽奖', text: '发布非转发抽奖类微头条，可获得创作收益，收益全部归作者...' },
        { minTitle: '头条抽奖', text: '发布非转发抽奖类微头条，可获得创作收益，收益全部归作者...' },
      ],
    },
    {
      id: 4,
      title: '五万粉权益',
      content: [
        { minTitle: '付费专栏', text: '发布非转发抽奖类微头条，可获得创作收益，收益全部归作者...' },
        { minTitle: '头条抽奖', text: '发布非转发抽奖类微头条，可获得创作收益，收益全部归作者...' },
      ],
    },
    {
      id: 5,
      title: '十万粉成就',
      content: [{ minTitle: '成就表彰', text: '发布非转发抽奖类微头条，可获得创作收益，收益全部归作者...' }],
    },
  ];
  return (
    <div className={styles.creation}>
      <header className={styles.header}>
        <span className={styles.title}>创作权益</span>
      </header>
      <div className={styles.content}>
        <Row>
          <Col xs={24} sm={8}>
            <div className={styles.item}>
              <span className="c1">
                总金额
                <Tooltip
                  title={
                    <div style={{ color: '#222' }}>
                      创作权益面向今日头条和西瓜视频用户,粉丝数仅包含今日头条和西瓜视频粉丝
                    </div>
                  }
                  color="#fff"
                >
                  <QuestionCircleOutlined style={{ marginLeft: '4px' }} />
                </Tooltip>
              </span>
              <p className={styles.primary}>
                0<span>元</span>
              </p>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div className={styles.item}>
              <span className="c1">信用分</span>
              <p className={styles.primary}>
                <>0</>
              </p>
              {/* 查看 */}
              <div className={classnames(styles.toView, 'c1', 'hover')}>
                查看详情 <RightOutlined style={{ fontSize: '12px' }} />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div className={styles.item}>
              <span className="c1">已开通权益</span>
              <p className={styles.primary}>
                <>0</>
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.header}>
        <span className={styles.title}>基础权益</span>
      </div>
      <div className={styles.baseData}>
        <Row>
          {data.map(i => {
            return (
              <Col span={8} key={i} style={{ padding: '0 12px' }}>
                <div className={styles.item}>
                  <div className={styles.top}>
                    <span className={styles.prefix}>
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjUwNDc2IDIxLjM1OTlDMi41MDQ3NiAyMi4wMjI3IDMuMDQyMDIgMjIuNTU5OSAzLjcwNDc2IDIyLjU1OTlIMjAuNTA0OEMyMS4xNjc1IDIyLjU1OTkgMjEuNzA0OCAyMi4wMjI3IDIxLjcwNDggMjEuMzU5OVYyLjYzOTk0QzIxLjcwNDggMS45NzcyIDIxLjE2NzUgMS40Mzk5NCAyMC41MDQ4IDEuNDM5OTRIMy43MDQ3NkMzLjA0MjAyIDEuNDM5OTQgMi41MDQ3NiAxLjk3NzIgMi41MDQ3NiAyLjYzOTk0TDIuNTA0NzYgMjEuMzU5OVpNOS45MDY3NSA2LjUyMTE4QzkuNTMxODUgNi4xNDYyNyA4LjkyNDAxIDYuMTQ2MjcgOC41NDkxMSA2LjUyMTE4QzguMTc0MiA2Ljg5NjA4IDguMTc0MiA3LjUwMzkyIDguNTQ5MTEgNy44Nzg4MkwxMC4zNjM1IDkuNjkzMTdIOC4yNjQ1QzcuNzM0MyA5LjY5MzE3IDcuMzA0NSAxMC4xMjMgNy4zMDQ1IDEwLjY1MzJDNy4zMDQ1IDExLjE4MzQgNy43MzQzIDExLjYxMzIgOC4yNjQ1IDExLjYxMzJMMTEuMTQ0NSAxMS42MTMyVjEzLjUzMzJMOC4yNjQ1IDEzLjUzMzJDNy43MzQzIDEzLjUzMzIgNy4zMDQ1IDEzLjk2MyA3LjMwNDUgMTQuNDkzMkM3LjMwNDUgMTUuMDIzNCA3LjczNDMgMTUuNDUzMiA4LjI2NDUgMTUuNDUzMkgxMS4xNDQ1VjE3LjM3MzJDMTEuMTQ0NSAxNy45MDM0IDExLjU3NDMgMTguMzMzMiAxMi4xMDQ1IDE4LjMzMzJDMTIuNjM0NyAxOC4zMzMyIDEzLjA2NDUgMTcuOTAzNCAxMy4wNjQ1IDE3LjM3MzJWMTUuNDUzMkgxNS45NDQ1QzE2LjQ3NDcgMTUuNDUzMiAxNi45MDQ1IDE1LjAyMzQgMTYuOTA0NSAxNC40OTMyQzE2LjkwNDUgMTMuOTYzIDE2LjQ3NDcgMTMuNTMzMiAxNS45NDQ1IDEzLjUzMzJIMTMuMDY0NVYxMS42MTMySDE1Ljk0NDVDMTYuNDc0NyAxMS42MTMyIDE2LjkwNDUgMTEuMTgzNCAxNi45MDQ1IDEwLjY1MzJDMTYuOTA0NSAxMC4xMjMgMTYuNDc0NyA5LjY5MzE3IDE1Ljk0NDUgOS42OTMxN0gxMy44NzFMMTUuNjU5OSA3LjkwNDIzQzE2LjAzNDggNy41MjkzMyAxNi4wMzQ4IDYuOTIxNDkgMTUuNjU5OSA2LjU0NjU5QzE1LjI4NSA2LjE3MTY4IDE0LjY3NzIgNi4xNzE2OCAxNC4zMDIzIDYuNTQ2NThMMTIuMTE3MiA4LjczMTY0TDkuOTA2NzUgNi41MjExOFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9Ii03LjMyMTIyIiB5MT0iMTYuNTA2NSIgeDI9IjE4LjUzNzEiIHkyPSIzMy41ODIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM3MjcyODIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMkUyRTNFIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="
                        alt=""
                      />
                      <span className={styles.name}>文章创作收益</span>
                      <span className={styles.alreadyStatus}>已开通</span>
                    </span>
                  </div>
                  <div className={styles.description}>
                    <span className={styles.text}>发布文章并选择投放广告，可获得创作收益，收益全部归创作</span>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      {info.map(i => {
        return (
          <>
            <div className={styles.header} key={i.id} style={{ marginTop: '22px' }}>
              <span className={styles.title}>{i.title}</span>
            </div>
            <div className={styles.infoData}>
              <Row>
                {i.content.map((item, inx) => {
                  return (
                    <Col span={8} key={inx.toString()} style={{ padding: '0 12px' }}>
                      <div className={styles.item}>
                        <div className={styles.top}>
                          <span className={styles.prefix}>
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjUwNDc2IDIxLjM1OTlDMi41MDQ3NiAyMi4wMjI3IDMuMDQyMDIgMjIuNTU5OSAzLjcwNDc2IDIyLjU1OTlIMjAuNTA0OEMyMS4xNjc1IDIyLjU1OTkgMjEuNzA0OCAyMi4wMjI3IDIxLjcwNDggMjEuMzU5OVYyLjYzOTk0QzIxLjcwNDggMS45NzcyIDIxLjE2NzUgMS40Mzk5NCAyMC41MDQ4IDEuNDM5OTRIMy43MDQ3NkMzLjA0MjAyIDEuNDM5OTQgMi41MDQ3NiAxLjk3NzIgMi41MDQ3NiAyLjYzOTk0TDIuNTA0NzYgMjEuMzU5OVpNOS45MDY3NSA2LjUyMTE4QzkuNTMxODUgNi4xNDYyNyA4LjkyNDAxIDYuMTQ2MjcgOC41NDkxMSA2LjUyMTE4QzguMTc0MiA2Ljg5NjA4IDguMTc0MiA3LjUwMzkyIDguNTQ5MTEgNy44Nzg4MkwxMC4zNjM1IDkuNjkzMTdIOC4yNjQ1QzcuNzM0MyA5LjY5MzE3IDcuMzA0NSAxMC4xMjMgNy4zMDQ1IDEwLjY1MzJDNy4zMDQ1IDExLjE4MzQgNy43MzQzIDExLjYxMzIgOC4yNjQ1IDExLjYxMzJMMTEuMTQ0NSAxMS42MTMyVjEzLjUzMzJMOC4yNjQ1IDEzLjUzMzJDNy43MzQzIDEzLjUzMzIgNy4zMDQ1IDEzLjk2MyA3LjMwNDUgMTQuNDkzMkM3LjMwNDUgMTUuMDIzNCA3LjczNDMgMTUuNDUzMiA4LjI2NDUgMTUuNDUzMkgxMS4xNDQ1VjE3LjM3MzJDMTEuMTQ0NSAxNy45MDM0IDExLjU3NDMgMTguMzMzMiAxMi4xMDQ1IDE4LjMzMzJDMTIuNjM0NyAxOC4zMzMyIDEzLjA2NDUgMTcuOTAzNCAxMy4wNjQ1IDE3LjM3MzJWMTUuNDUzMkgxNS45NDQ1QzE2LjQ3NDcgMTUuNDUzMiAxNi45MDQ1IDE1LjAyMzQgMTYuOTA0NSAxNC40OTMyQzE2LjkwNDUgMTMuOTYzIDE2LjQ3NDcgMTMuNTMzMiAxNS45NDQ1IDEzLjUzMzJIMTMuMDY0NVYxMS42MTMySDE1Ljk0NDVDMTYuNDc0NyAxMS42MTMyIDE2LjkwNDUgMTEuMTgzNCAxNi45MDQ1IDEwLjY1MzJDMTYuOTA0NSAxMC4xMjMgMTYuNDc0NyA5LjY5MzE3IDE1Ljk0NDUgOS42OTMxN0gxMy44NzFMMTUuNjU5OSA3LjkwNDIzQzE2LjAzNDggNy41MjkzMyAxNi4wMzQ4IDYuOTIxNDkgMTUuNjU5OSA2LjU0NjU5QzE1LjI4NSA2LjE3MTY4IDE0LjY3NzIgNi4xNzE2OCAxNC4zMDIzIDYuNTQ2NThMMTIuMTE3MiA4LjczMTY0TDkuOTA2NzUgNi41MjExOFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9Ii03LjMyMTIyIiB5MT0iMTYuNTA2NSIgeDI9IjE4LjUzNzEiIHkyPSIzMy41ODIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM3MjcyODIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMkUyRTNFIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="
                              alt=""
                            />
                            <span className={styles.name}>{item.minTitle}</span>
                          </span>
                        </div>
                        <div className={styles.description}>
                          <span className={styles.text}>{item.text}</span>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </>
        );
      })}

      {showModale && (
        <div
          className={styles.modalWrap}
          onClick={e => {
            setShowModal(false);
          }}
        >
          <div className={styles.modalContent}>
            <img src={require('@/assets/default_avatar.png')} alt="" />
            <div className={styles.title}>恭喜你加入创作权益</div>
            <div className={styles.intro}>随着粉丝数的增加，你将获得更多平台收益</div>
            <span className={styles.join}>我知道了</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Creation;
