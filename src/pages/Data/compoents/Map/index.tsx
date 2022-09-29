import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import L7, { Mapbox, Scene } from '@antv/l7';
import { CountryLayer } from '@antv/l7-district';
import ProvinceData from '../../city';

interface IProps {}
const Map: React.FC<IProps> = props => {
  const colors = ['rgb(229,236,251)'];
  const init = () => {
    const scene = new Scene({
      id: 'mapContainer',
      logoVisible: false,
      map: new Mapbox({
        autoFit: true,
        center: [116.2825, 39.9],
        pitch: 0,
        style: 'blank', //blank 样式以为无底图样式，这种样式下就不需要使用mapbox服务，也不需要使用mapbox的token了
        zoom: 1,
        minZoom: 0,
        maxZoom: 5,
      }),
    });
    scene.setMapStatus({
      dragEnable: false,
      keyboardEnable: false, // 是否允许形键盘事件
      doubleClickZoom: false, // 双击放大
      zoomEnable: false, // 滚动缩放
      rotateEnable: false, // 旋转
    });
    scene.on('loaded', () => {
      new CountryLayer(scene, {
        data: ProvinceData,
        joinBy: ['NAME_CHN', 'name'],
        depth: 1,
        provinceStroke: '#fff',
        cityStroke: '#fff',
        cityStrokeWidth: 1,
        chinaNationalStroke: '#fff',
        chinaNationalWidth: 1,
        fill: {
          color: {
            field: 'NAME_CHN',
            values: colors,
          },
        },
        label: {
          color: 'rgb(80,97,132)',
          size: 10,
        },
        popup: {
          enable: true,
          Html: props => {
            return `<span>${props.NAME_CHN}</span>`;
          },
        },
      });

      fetch('/js/geoinfo-all.json')
        .then(d => d.json())
        .then(v => {
          console.log(v);
        });
    });
  };
  useEffect(() => {
    init();
  }, []);

  return <div id="mapContainer" style={{ height: '400px', position: 'relative' }}></div>;
};

export default Map;
