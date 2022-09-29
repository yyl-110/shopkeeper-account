import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import { Row, Col, Tooltip, Button, Table, DatePicker, Radio } from 'antd';
import { QuestionCircleOutlined, RightOutlined } from '@ant-design/icons';
import styles from './index.less';
import classnames from 'classnames';
import G2, { Chart } from '@antv/g2';
import { useRef } from 'react';
const { RangePicker } = DatePicker;

interface IProps {}
const All: React.FC<IProps> = props => {
  const [size, setSize] = useState('small');
  const [select, setSelect] = useState<number>(0);
  const date = ['7天', '14天', '30天'];
  const chatDom = useRef(null);
  const chatData = [
    {
      year: '2022-09-02',
      value: 0,
    },
    {
      year: '2022-09-03',
      value: 0,
    },
    {
      year: '2022-09-04',
      value: 0,
    },
    {
      year: '2022-09-05',
      value: 5,
    },
    {
      year: '2022-09-06',
      value: 4.9,
    },
    {
      year: '2022-09-07',
      value: 6,
    },
  ];

  const tableData = [
    { time: '2022-09-10', all: 10, earnings: 100, otherearnings: 1 },
    { time: '2022-09-10', all: 10, earnings: 100, otherearnings: 1 },
    { time: '2022-09-10', all: 10, earnings: 100, otherearnings: 1 },
  ];

  useEffect(() => {
    const chart = new Chart({
      container: 'container',
      forceFit: true,
      height: 300, // 指定图表高度
      padding: 'auto',
    });
    chart.source(chatData);
    chart.scale('value', {
      min: 0,
    });
    chart.scale('year', {
      range: [0, 1],
    });
    chart.tooltip(false);
    chart
      .line()
      .position('year*value')
      .color('#ff5e5e')
      .shape('triangle');
    chart
      .point()
      .position('year*value')
      .size(2)
      .shape('circle')
      .style({
        stroke: '#ff5e5e',
        lineWidth: 3,
      });
    chart.render();
    const evt = document.createEvent('HTMLEvents');
    evt.initEvent('resize', false, false);
    window.dispatchEvent(evt);
  }, [chatDom]);
  const columns = [
    {
      title: '日期',
      dataIndex: 'time',
      key: 'time',
      width: 200,
      fixed: true,
    },
    {
      title: '总计',
      dataIndex: 'all',
      key: 'all',
      width: 200,
    },
    {
      title: '创作收益',
      dataIndex: 'earnings',
      key: 'earnings',
      width: 200,
    },
    {
      title: '其它收益',
      key: 'otherearnings',
      dataIndex: 'otherearnings',
      width: 200,
    },
  ];
  return (
    <div className={styles.all}>
      <h2 className={styles.withdrawalTitle}>数据预览</h2>
      <div className={styles.content}>
        <Row>
          <Col xs={24} sm={8}>
            <div className={styles.item}>
              <span className="c1">昨日收益</span>
              <p className={styles.primary}>
                0<span>元</span>
              </p>
              <div className={classnames(styles.toView, 'c1', 'hover')}>
                累计收益<span className="c0"> 0 </span>元
              </div>
            </div>
          </Col>

          <Col xs={24} sm={8}>
            <div className={styles.item}>
              <span className="c1">
                本月收益
                <Tooltip title={<div style={{ color: '#222' }}>自本月 1 号至昨天产生的收益总和</div>} color="#fff">
                  <QuestionCircleOutlined style={{ marginLeft: '4px' }} />
                </Tooltip>
              </span>
              <p className={styles.primary}>
                <>0</>
                <span>元</span>
              </p>
              <div className={classnames(styles.toView, 'c1', 'hover')}>
                累计收益<span className="c0">0</span>元
                <Tooltip
                  title={
                    <div style={{ color: '#222' }}>截止 2022-09-25 的可提现的税后总收益，对应的税前总收益为 0 元</div>
                  }
                  color="#fff"
                >
                  <QuestionCircleOutlined style={{ marginLeft: '4px' }} />
                </Tooltip>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div className={styles.item}>
              <span className="c1">
                可提现金额
                <Tooltip
                  title={
                    <div style={{ color: '#222' }}>截止 2022-09-25 的可提现的税后总收益，对应的税前总收益为 0 元</div>
                  }
                  color="#fff"
                >
                  <QuestionCircleOutlined style={{ marginLeft: '4px' }} />
                </Tooltip>
              </span>
              <p className={styles.primary}>
                <>0</>
                <span>元</span>
              </p>
              {/* 查看 */}
              <div className={classnames(styles.toView, 'c1', 'hover')}>
                查看明细 <RightOutlined style={{ fontSize: '12px' }} />
              </div>
            </div>
          </Col>
        </Row>
        <div className={styles.apply}>
          <Button
            onClick={() => {
              history.push('/withdrawal');
            }}
          >
            前往提现
          </Button>
        </div>

        {/* 提现明细 */}
        <div className={styles.detail}>
          <span className={styles.title}>收益趋势分析</span>
          <div className={styles.options}>
            <Row style={{ width: '100%' }}>
              <Col xs={24} lg={14}>
                <div className={styles.time}>
                  <div className={styles.list}>
                    <span className={styles.timeText}>时间</span>
                    {date.map((i, inx) => {
                      return (
                        <span
                          className={classnames(styles.date, select === inx && styles.select)}
                          key={inx.toString()}
                          onClick={() => {
                            setSelect(inx);
                          }}
                        >
                          {i}
                        </span>
                      );
                    })}
                  </div>
                  <RangePicker style={{ width: '230px' }} />
                </div>
              </Col>
              <Col xs={24} lg={10}>
                <div className={styles.change}>
                  <span className={styles.unit}>单位： 元</span>
                  <Radio.Group
                    value={size}
                    onChange={e => {
                      setSize(e.target.value);
                    }}
                  >
                    <Radio.Button value="small">趋势图</Radio.Button>
                    <Radio.Button value="middle">数据列表</Radio.Button>
                  </Radio.Group>
                </div>
              </Col>
            </Row>
          </div>
          <div className={styles.tableWrap}>
            <div id="container" ref={chatDom} style={{ display: size === 'small' ? '' : 'none' }}></div>
            <Table
              columns={columns}
              dataSource={tableData}
              scroll={{ y: 300, x: '100vw' }}
              style={{ display: size === 'middle' ? '' : 'none' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
