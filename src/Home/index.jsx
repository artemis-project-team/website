/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Header from './Header';
import Banner from './Banner';
import Nav2 from './Nav2';
import Banner0 from './Banner0';
import Content0 from './Content0';
import Content3 from './Content3';
import Feature4 from './Feature4';
import Feature5 from './Feature5';
import Content9 from './Content9';
import Footer0 from './Footer0';

import {
  Nav21DataSource,
  Banner00DataSource,
  Content00DataSource,
  Content30DataSource,
  Feature40DataSource,
  Feature50DataSource,
  Content90DataSource,
  Footer00DataSource,
} from './data.source';
import './less/antMotionStyle.less';
import 'react-github-button/assets/style.css';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isFirstScreen: true,
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  onEnterChange = (mode) => {
    this.setState({
      isFirstScreen: mode === 'enter',
    });
  }
  
  render() {
    const children = [
      <Header key="header" isFirstScreen={this.state.isFirstScreen} isMobile={this.state.isMobile} />,
      <Banner key="banner" onEnterChange={this.onEnterChange} />,
     
      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={Content00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content3
        id="Content3_0"
        key="Content3_0"
        dataSource={Content30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature4
        id="Feature4_0"
        key="Feature4_0"
        dataSource={Feature40DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature5
        id="Feature5_0"
        key="Feature5_0"
        dataSource={Feature50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content9
        id="Content9_0"
        key="Content9_0"
        dataSource={Content90DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer0
        id="Footer0_0"
        key="Footer0_0"
        dataSource={Footer00DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
