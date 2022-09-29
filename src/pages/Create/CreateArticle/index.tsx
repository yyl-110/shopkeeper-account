import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import classnames from 'classnames';
import { RightContent } from '@/components/GlobalHeader';
import BraftEditor from 'braft-editor';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import { Input, Button, BackTop, Tooltip, Radio, Card, Upload } from 'antd';
import { CheckCircleOutlined, UpOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
interface IProps {
  dispatch: Dispatch;
  loading: Boolean | undefined;
}
const CreateArticle: React.FC<IProps> = props => {
  const [editorValue, setEditorValue] = useState('');
  let [inputNum, setInputNum] = useState<number[]>([1]);
  const controls = [
    'undo',
    'redo',
    'remove-styles',
    'separator',
    'font-size',
    {
      key: 'bold',
      text: <b>加粗</b>,
    },
    'headings',
    'blockquote',
    'text-align',
    'text-indent',
    'separator',
    'underline',
    'link',
    'separator',
    'media',
  ];
  useEffect(() => {
    // document.getElementById(root)
    // document.getElementById(root)?.onscroll = function() {
    //   alert(2);
    // };
    const handle = function(e) {
      if (!document.getElementsByClassName('bf-controlbar')[0]) {
        alert(1);
      }
      if (e.target.scrollTop > 63) {
        try {
          document.getElementsByClassName('bf-controlbar')[0].style.position = 'fixed';
          document.getElementsByClassName('bf-controlbar')[0].style.top = '0';
        } catch (error) {
          console.log('error:', error);
        }
      } else {
        try {
          document.getElementsByClassName('bf-controlbar')[0].style.position = 'absolute';
          document.getElementsByClassName('bf-controlbar')[0].style.top = '63px';
        } catch (error) {
          console.log('error:', error);
        }
      }
    };
    document.body.firstElementChild?.addEventListener('scroll', handle);
    return () => {
      document.body.firstElementChild?.removeEventListener('scroll', handle);
    };
  }, [document.body.firstElementChild]);
  return (
    <div className={classnames(styles.createArticle)}>
      <RightContent showText={false} backText="发布文章" />
      <div className={styles.content}>
        <div className={styles.inputWrap}>
          <div className={styles.border}>
            <Input placeholder="请输入文章标题（2～30个字）"></Input>
          </div>
        </div>
        <div className={styles.editorWrap}>
          <BraftEditor
            value={editorValue}
            style={{ height: '500px' }}
            controls={controls}
            onChange={() => {}}
            placeholder="请输入正文"
          />
        </div>
        <div className={styles.form}>
          <div className={styles.titleSet}>
            <div className={styles.lable}>标题设置</div>
            <div className={styles.inputContent}>
              <div className={styles.radioWrap}>
                <Radio defaultChecked={false}>单标题</Radio>
                <Radio defaultChecked>多标题</Radio>
              </div>
              <Card
                title="不同标题会推荐给不同用户，获得更多推荐流量"
                extra={<a href="#">实例</a>}
                style={{ width: 568, borderRadius: '4px', marginTop: '12px' }}
              >
                {inputNum.map((i, inx) => {
                  return (
                    <>
                      <Input placeholder="请输入标题" key={i} style={{ width: '480px', marginBottom: '16px' }} />
                      <DeleteOutlined
                        style={{ color: '#999', marginLeft: '12px' }}
                        onClick={() => {
                          if (inputNum.length === 1) return;
                          inputNum.splice(inx, 1);
                          setInputNum([...inputNum]);
                        }}
                      />
                    </>
                  );
                })}

                <div className="btn">
                  <Button
                    onClick={() => {
                      if (inputNum.length === 4) return;
                      inputNum.push(inputNum[inputNum.length - 1] + 1);
                      setInputNum([...inputNum]);
                    }}
                  >
                    <PlusOutlined />
                    添加按钮
                  </Button>
                  &nbsp;
                  <span className="c2"> 还能添加 4 个</span>
                </div>
              </Card>
            </div>
          </div>
          <div className={styles.faceShow}>
            <div className={styles.lable}>封面展示</div>
            <div className={styles.faceContent}>
              <div className={styles.radioWrap}>
                <Radio defaultChecked={false}>单图</Radio>
                <Radio defaultChecked>三图</Radio>
                <Radio defaultChecked>无封面</Radio>
              </div>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={[]}
                onChange={() => {}}
                style={{ marginTop: '10px' }}
              >
                <PlusOutlined />
              </Upload>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <CheckCircleOutlined className="c2" />
            <span className={styles.tip}>共 0 字</span>

            <div
              className={styles.goTop}
              onClick={() => {
                document.getElementById('root').scrollTo(0, 0);
              }}
            >
              <div>回到顶部</div>
              <UpOutlined />
            </div>
          </div>
          <div className={styles.btnList}>
            <Button>预览</Button>
            <Button>定时发布</Button>
            <Button type="primary">预览发布</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;
