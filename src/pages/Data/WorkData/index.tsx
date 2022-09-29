import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import { Chart } from '@antv/g2';
import styles from './index.less';
import classnames from 'classnames';
import { Tabs, Row, Col, Tooltip, Radio, Table, DatePicker } from 'antd';
import { useRef } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import LineChart from '../compoents/LineChart';
import PieChart from '../compoents/PieChart';
import PhoneLineChart from '../compoents/PhoneLineChart';
import Map from '../compoents/Map/index';
import ProvinceData from '../city';

const { RangePicker } = DatePicker;
interface IProps {
  dispatch: Dispatch;
  loading: Boolean | undefined;
}
const WorkData: React.FC<IProps> = props => {
  const Wrapper = useRef(null);
  const [select, setSelect] = useState(1);
  const [selecDate, setSelectDate] = useState(1);
  const [size, setSize] = useState('small');
  const date = ['7天', '30天'];
  const data = [
    { id: 1, text: '全部' },
    { id: 2, text: '文章' },
    { id: 3, text: '视频' },
    { id: 4, text: '微头条' },
    { id: 5, text: '问答' },
    { id: 6, text: '小视频' },
  ];
  const list = [1, 2, 3, 4];
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
    <div className={classnames(styles.workData, 'garrContainer')} ref={Wrapper}>
      <div className={styles.tabWrap}>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="整体" key="1" />
          <Tabs.TabPane tab="单篇" key="2" />
        </Tabs>
        <div className={styles.miniTab}>
          <div className={styles.list}>
            {data.map(i => {
              return (
                <div
                  className={classnames(styles.item, select === i.id && styles.select)}
                  key={i.id}
                  onClick={() => {
                    setSelect(i.id);
                  }}
                >
                  {i.text}
                </div>
              );
            })}
          </div>
          <div className="c2">每日 14:00 前更新前一日数据</div>
        </div>
      </div>
      <div className={styles.workContent}>
        <div className={styles.hxData}>
          <div className={styles.title}>
            <span>核心数据</span>
            <span className={styles.hint}>当前为前日数据， 14:00 前更新昨日数据</span>
          </div>
          <div className={styles.boardContainer}>
            <Row style={{ width: '100%' }}>
              {list.map(i => {
                return (
                  <Col xs={8} sm={6}>
                    <div className={styles.colItem} key={i}>
                      <div className={styles.itemTitle}>
                        <span className={styles.title}>
                          <span className={styles.text}>
                            前日展现量
                            <Tooltip color="#fff" title={<div style={{ color: '#999' }}>内容被用户看到的次数</div>}>
                              <QuestionCircleOutlined />
                            </Tooltip>
                          </span>
                        </span>
                      </div>
                      <div className={styles.primary}>
                        <a href="/profile_v4/analysis/works-overall/all">{i}</a>
                      </div>
                      <div className={styles.secondary}>
                        <p className="c2">
                          粉丝展现量 <span className="c0">0</span>
                        </p>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
        <div className={styles.lsfx}>
          <div className={styles.title}>
            <span>流量分析</span>
            <div className={styles.time}>
              <div className={styles.list}>
                <span className={styles.timeText}>时间</span>
                {date.map((i, inx) => {
                  return (
                    <span
                      className={classnames(styles.date, selecDate === inx && styles.select)}
                      key={inx.toString()}
                      onClick={() => {
                        setSelectDate(inx);
                      }}
                    >
                      {i}
                    </span>
                  );
                })}
              </div>
              <RangePicker style={{ width: '230px' }} />
            </div>
          </div>
          <div className={styles.qushi}>
            <div className={styles.header}>
              <span>数据趋势</span>
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
          <Row>
            <Col xs={24} sm={12} style={{ paddingRight: '12px' }}>
              <div className={styles.sexDis}>
                <div className={styles.header}>
                  <span>性别分布</span>
                </div>
                <div className={styles.chart}>
                  <PieChart />
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} style={{ paddingLeft: '12px' }}>
              <div className={styles.sexDis}>
                <div className={styles.header}>
                  <span>年龄分布</span>
                </div>
                <div className={styles.chart}>
                  <LineChart />
                </div>
              </div>
            </Col>
          </Row>

          <div className={classnames(styles.mapContainer, styles.sexDis)}>
            <div className={styles.header}>
              <span>地域分布</span>
            </div>
            <div className={styles.chart}>
              <Row style={{ height: '100%' }}>
                <Col xs={24} sm={14} md={14} lg={14}>
                  <Map />
                </Col>
                <Col xs={24} sm={10} md={10} lg={10} style={{ height: '100%' }}>
                  <div className={styles.cityList}>
                    {ProvinceData.map(i => {
                      return (
                        <div key={i.code} className={styles.cityItem}>
                          <span className={styles.cityName}>{i.name}</span>
                          <span className={styles.num}>0</span>
                        </div>
                      );
                    })}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className={styles.sexDis}>
            <div className={styles.header}>
              <span>机型价格分布</span>
            </div>
            <div className={styles.chart}>
              <PhoneLineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkData;
