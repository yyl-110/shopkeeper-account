import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import { useRef } from 'react';
import { Chart } from '@antv/g2';

interface IProps {}
const PhoneLineChart: React.FC<IProps> = props => {
  const chatDom2 = useRef(null);
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
  useEffect(() => {
    const chart = new Chart({
      container: 'container2',
      forceFit: true,
      height: 300, // 指定图表高度
      padding: [50, 50, 50, 50],
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
  }, [chatDom2]);

  return (
    <div>
      <div id="container2" ref={chatDom2}></div>
    </div>
  );
};

export default PhoneLineChart;
