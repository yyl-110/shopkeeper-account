import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';

// import { Scene, PointLayer } from '@antv/l7';
// import { GaodeMap } from '@antv/l7-maps';
// import ProvinceData from '../../city';

interface IProps {}
const Map: React.FC<IProps> = props => {
  // const init = () => {
  //   // console.log(L7, 9090);
  //   const scene = new Scene({
  //     id: 'map',
  //     map: new GaodeMap({
  //       center: [116.2825, 39.9],
  //       pitch: 0,
  //       style: 'blank', //blank 样式以为无底图样式，这种样式下就不需要使用mapbox服务，也不需要使用mapbox的token了
  //       zoom: 3,
  //       minZoom: 0,
  //       maxZoom: 10,
  //     }),
  //   });
  // };
  useEffect(() => {
    // init();
  }, []);

  return <div id="map" style={{ height: '460px', width: '500px' }}></div>;
};

export default Map;
