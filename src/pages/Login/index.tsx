import { DownOutlined, LeftOutlined, QuestionCircleOutlined, RedoOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import { Form, Button, Input, Select } from 'antd';

const { Option } = Select;

const qrcode = require('@/assets/qrcode.png');
const question = require('@/assets/question.png');
const dy = require('@/assets/dy.png');
const qq = require('@/assets/qq.png');
const wx = require('@/assets/wx.png');
const pwd = require('@/assets/pwd.png');
const error = require('@/assets/error.png');
const down = require('@/assets/down.png');

interface IProps {
  dispatch: Dispatch;
  loading: Boolean | undefined;
}
const Login: React.FC<IProps> = props => {
  const methodList = [
    { text: '抖音登录', url: dy },
    { text: 'QQ登录', url: qq },
    { text: '微信登录', url: wx },
    { text: '密码登录', url: pwd },
  ];
  const [scanCodeState, setScanCodeState] = useState<boolean>(true);
  const [questionModal, setShowQuestionModal] = useState<boolean>(false);
  const [areaCode, setAreaCode] = useState<string>('+86');
  const [showAreaChoose, setShowAreaChoose] = useState<boolean>(false);
  const [countdownNum, setCountdownNum] = useState<number>(0);

  const [form] = Form.useForm();

  /**
   * 验证码倒计时
   * @param {*} number 倒计时
   */
  const countDown: (num: number) => void = (num = 60) => {
    if (countdownNum !== 0) return;
    num -= 1;
    setTimeout(() => {
      if (num > 0) {
        countDown(num);
      } else {
        setCountdownNum(0);
      }
    }, 1000);
    setCountdownNum(num);
  };

  useEffect(() => {
    // setTimeout(() => {
    setScanCodeState(false);
    // }, 3000);
  }, []);
  return (
    <div className={styles.loginContainer}>
      <div className={styles.firstScreen}>
        <div className={styles.videoWrapper}>
          <video
            autoPlay
            preload="preload"
            muted
            loop
            src="https://sf3-cdn-tos.toutiaostatic.com/obj/mp/welcome-video.mp4"
            poster="https://sf3-cdn-tos.toutiaostatic.com/obj/mp/welcome-video-poster-v2.png"
            className={styles.video}
          ></video>
        </div>
        {/* logo */}
        <div className={styles.firstScreenLogo}>
          <img src={require('../../assets/zgh_w.png')} alt="" />
        </div>
        {/* login */}
        <div className={styles.loginWrap}>
          <div className={styles.webLoginContainer}>
            <article className={styles.webLogin}>
              <article className={styles.webLoginUnion}>
                <div className={styles.webLoginUnionLogin}>
                  <div className={styles.loginForm}>
                    <div className={styles.loginFormTitle}>验证码登录</div>
                    <div className={styles.loginFormContent}>
                      <Form
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        autoComplete="off"
                        form={form}
                        initialValues={{ username: '', code: '' }}
                      >
                        <div className={styles.userWrap}>
                          <div
                            className={styles.loginAreaWrap}
                            onClick={() => {
                              setShowAreaChoose(!showAreaChoose);
                            }}
                          >
                            <input type="text" value={areaCode} disabled />
                            <img
                              src={down}
                              alt=""
                              style={{ transform: showAreaChoose ? 'rotate(180deg)' : 'rotate(0)' }}
                            />
                          </div>
                          <Form.Item name="username" rules={[{ required: true, message: '请输入正确的手机号码！' }]}>
                            <Input
                              placeholder="手机号"
                              maxLength={11}
                              className={styles.tel}
                              style={{ paddingLeft: '73px' }}
                            />
                          </Form.Item>
                        </div>

                        <div className={styles.codeWrap}>
                          <div
                            className={styles.codeBtn}
                            onClick={() => {
                              countDown(60);
                            }}
                          >
                            {countdownNum > 0 && countdownNum < 60 ? `${countdownNum}s后重新发送` : '获取验证码'}
                          </div>
                          <Form.Item
                            name="code"
                            rules={[{ required: true, message: '验证码长度不正确' }]}
                            style={{ marginTop: '12px' }}
                          >
                            <Input placeholder="验证码" style={{ paddingRight: '100px' }} maxLength={6}></Input>
                          </Form.Item>
                        </div>
                        <div className={styles.confirmInfo} aria-label="登录即同意《用户协议》和《隐私政策》">
                          <span className={styles.beforeText}>登录即同意</span>
                          <a
                            target="_blank"
                            href="https://mp.toutiao.com/profile_v3_public/public/protocol/agreement"
                            aria-label="《用户协议》"
                          >
                            《用户协议》
                          </a>
                          <span className={styles.connectText}>和</span>
                          <a
                            target="_blank"
                            href="https://mp.toutiao.com/profile_v3_public/public/protocol/privacy"
                            aria-label="《隐私政策》"
                          >
                            《隐私政策》
                          </a>
                        </div>
                        <div className={styles.btnWrap}>
                          <Button
                            type="primary"
                            size="middle"
                            htmlType="submit"
                            className={styles.submitBtn}
                            onClick={() => {
                              form.validateFields().then(res => {
                                console.log('res:', res);
                                localStorage.setItem('userPhone', res.username);
                                history.push('/home');
                              });
                            }}
                          >
                            登录
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                  <div className={styles.loginScanCode}>
                    <div className={styles.loginScanTitle}>扫码登录</div>
                    <div className={styles.webScanCode}>
                      <div className={styles.scanCodeContent}>
                        <div className={styles.codeContent}>
                          <img src={qrcode} className={styles.codeImg} alt="" />
                          {!scanCodeState && (
                            <div className={styles.codeMask}>
                              <div className={styles.qrCodeMask}>
                                <div
                                  className={styles.iconWrap}
                                  onClick={() => {
                                    setScanCodeState(true);
                                    setTimeout(() => {
                                      setScanCodeState(false);
                                    }, 3000);
                                  }}
                                >
                                  <RedoOutlined />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className={styles.scanDesc}>
                          {scanCodeState ? (
                            <>
                              “今日头条App - 我的” <br></br>左上角“扫一扫”
                              <span className={styles.question}>
                                <QuestionCircleOutlined />
                              </span>
                            </>
                          ) : (
                            <>
                              二维码已失效
                              <span
                                className={styles.scanCodeBtn}
                                onClick={() => {
                                  setScanCodeState(true);
                                  setTimeout(() => {
                                    setScanCodeState(false);
                                  }, 3000);
                                }}
                              >
                                点击刷新
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.webLoginUnionFooter}>
                  <div className={styles.webLoginOtherLoginMethod}>
                    <ul className={styles.methodList}>
                      {methodList.map(i => {
                        return (
                          <li className={styles.methodListItem} aria-label="抖音登录" role="button">
                            <img src={i.url} alt="" />
                            <span>{i.text}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <ul className={styles.webLoginLinkList}>
                    <li className={styles.item} aria-label="立即注册" role="button">
                      <div className={styles.itemText}>立即注册</div>
                    </li>
                    <li className={styles.item} aria-label="登录遇到问题" role="button">
                      <div
                        className={styles.itemText}
                        onClick={() => {
                          setShowQuestionModal(true);
                        }}
                      >
                        登录遇到问题
                      </div>
                      {questionModal && (
                        <div className={styles.loginModal}>
                          <div
                            className={styles.close}
                            onClick={() => {
                              setShowQuestionModal(false);
                            }}
                          >
                            <LeftOutlined />
                            返回登录
                          </div>
                          <div className={styles.loginFaq}>
                            <div className={styles.title}>登录遇到问题</div>
                            <div className={styles.desc}>请打开今日头条App “我的 - 登录 - 遇到问题” 查看</div>
                            <img src={error} alt="" />
                          </div>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              </article>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
