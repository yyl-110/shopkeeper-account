import React, { useEffect, useState, useRef } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import G2, { Chart } from '@antv/g2';

interface IProps {}
const PieChart: React.FC<IProps> = props => {
  const chatDomPie = useRef(null);

  const pieData = [
    {
      type: '男',
      value: 1,
    },
    {
      type: '女',
      value: 2,
    },
  ];

  useEffect(() => {
    // 可以通过调整这个数值控制分割空白处的间距，0-1 之间的数值
    const sliceNumber = 0.01;
    // 自定义 other 的图形，增加两条线
    G2.Shape.registerShape('interval', 'sliceShape', {
      draw: function draw(cfg, container) {
        var points = cfg.points;
        var path = [];
        path.push(['M', points[0].x, points[0].y]);
        path.push(['L', points[1].x, points[1].y - sliceNumber]);
        path.push(['L', points[2].x, points[2].y - sliceNumber]);
        path.push(['L', points[3].x, points[3].y]);
        path.push('Z');
        path = this.parsePath(path);
        return container.addShape('path', {
          attrs: {
            fill: cfg.color,
            path: path,
          },
        });
      },
    });
    const chart = new Chart({
      container: 'containerPie',
      forceFit: true,
      padding: [70, 70, 70, 70],
      height: 300, // 指定图表高度
    });
    chart.source(pieData);
    chart.coord('theta', {
      innerRadius: 0.75,
    });
    chart.tooltip({
      showTitle: false,
    });
    chart
      .intervalStack()
      .position('value')
      .color('type')
      .shape('sliceShape');

    chart.render();
  }, [chatDomPie]);
  return <div id="containerPie" ref={chatDomPie}></div>;
};

export default PieChart;
