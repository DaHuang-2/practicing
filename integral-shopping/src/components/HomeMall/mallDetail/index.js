import React, { Component } from "react";
import "./style.less";
import Header from "../../commonHeader";
import { Tabs } from "antd-mobile";
import Common from "./commonDetail";

class Detail extends Component {
  tabs = [
    { title: "虚拟商品", sub: "1" },
    { title: "实物商品", sub: "2" }
  ];
  render() {
    return (
      <div className='integralMall'>
        <Header />
        <div className='integralTitle'>
          <i
            className='iconfont icon-fanhui'
            onClick={() => {
              this.props.history.go(-1);
            }}
          ></i>
          <div>积分商城</div>
        </div>
        {/*背景图片*/}
        <div className='integralbg'>
          <img src='' alt='' />
        </div>
        <div className='coverImg'>
          我的积分：
          <a href=''>积分明细</a>
          剩余积分：xxx
          <a href=''>积分规则</a>
        </div>
        <Tabs
          tabs={this.tabs}
          initialPage={0}
          tabBarActiveTextColor='coral'
          // onChange={(tab, index) => {
          //   console.log("onChange", index, tab);
          // }}
          // onTabClick={(tab, index) => {
          //   console.log("onTabClick", index, tab);
          // }}
        >
          <div>
            <Common />
            <Common />
          </div>
          <div>
            <Common />
            <Common />
          </div>
        </Tabs>
      </div>
    );
  }
}

export default Detail;
