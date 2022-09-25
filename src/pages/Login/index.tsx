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
            loop
            src="https://sf3-cdn-tos.toutiaostatic.com/obj/mp/welcome-video.mp4"
            poster="https://sf3-cdn-tos.toutiaostatic.com/obj/mp/welcome-video-poster-v2.png"
            className={styles.video}
          ></video>
        </div>
        {/* logo */}
        <div className={styles.firstScreenLogo}>
          <svg width="79" height="27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.848 12.644v3.133H61.736l-.576 2.014h16.76v1.828l-1.669 7.233H59.375V23.45h13.581l.522-2.259H56.594v-1.7l1.063-3.715h-3.845v-3.133h25.036zM41.42 13.843v1.934h10.507v3.401H41.42v7.674h-4.08v-7.674H26.891v-3.401H37.34v-1.934h4.08zM18.104.85c-.101 7.245-.24 11.578-1.329 14.927h8.26v3.401h-9.898c-1.58 2.383-4.039 4.58-7.89 7.674H.968l.791-.625c3.87-3.053 6.53-5.151 8.334-7.049H0v-3.401h12.509c1.397-3.018 1.505-7.325 1.609-14.927h3.987zm3.06 20.029l3.867 5.973h-4.81l-3.867-5.973h4.81zm26.895 0l3.867 5.973h-4.811l-3.867-5.973h4.811zm-12.492 0l-3.866 5.973H26.89l3.866-5.973h4.811zM31.374 0l3.771 1.7h15.391v3.958c-1.14.987-2.862 2.413-5.857 3.91a89.124 89.124 0 007.248 1.468v3.63c-5.362-.847-9.447-1.862-12.608-2.907-3.2 1.074-7.255 2.09-12.428 2.904v-3.628a90.857 90.857 0 007.106-1.425c-2.22-1.1-3.65-2.124-4.73-2.898-.165-.118-1.678-1.256-1.678-1.256L31.374 0zM2.314 8.125l8.869 1.226v3.797L2.315 11.92V8.125zM77.365 1.7v8.93H55.295V1.7h22.07zm-31.91 3.4h-12.12c1.39.874 3.292 1.886 6.1 2.896 2.814-1.01 4.692-2.023 6.02-2.895zm27.83 0H59.375V7.23h13.91V5.102zm-70.97-3.4l8.869 1.226v3.797L2.315 5.497V1.7z"
              fill="#fff"
            ></path>
          </svg>
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
                              countDown(10);
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
