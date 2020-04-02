import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import { Switch, Route, Redirect } from "react-router-dom";
import "./style.less";
// 引入各模块组件
import HomeFirst from "../HomeFirst";
import HomeMall from "../HomeMall";
import HomeCart from "../HomeCart";
import HomeCenter from "../HomeCenter";
// import mallDetail from "../HomeMall/mallDetail";
// import CartDetail from "./CartDetail"

class BottomBar extends Component {
  state = {
    curItem: this.props.location.pathname.substr(1)
  };
  TableItems = [
    { title: "首页", id: "first", content: "首页" },
    { title: "商城", id: "mall", content: "商城" },
    { title: "购物车", id: "cart", content: "购物车" },
    { title: "我的", id: "center", content: "我的" }
  ];
  static getDerivedStateFromProps(props, state) {
    return {
      curItem: props.location.pathname.substr(1)
    };
  }
  render() {
    return (
      <div className='page-home'>
        <Switch>
          <Route path='/first' component={HomeFirst}></Route>
          <Route path='/mall' component={HomeMall}></Route>
          <Route path='/cart' component={HomeCart}></Route>
          <Route path='/center' component={HomeCenter}></Route>
          <Redirect to='./first'></Redirect>
        </Switch>
        <TabBar
          unselectedTintColor='#949494'
          tintColor='coral'
          barTintColor='#E8E8E8'
        >
          {this.TableItems.map(item => {
            return (
              <TabBar.Item
                title={item.title}
                key={item.id}
                icon={<i className={`iconfont icon-${item.id}`}></i>}
                selectedIcon={<i className={`iconfont icon-${item.id}`}></i>}
                selected={this.state.curItem === item.id}
                onPress={() => {
                  this.setState({
                    curItem: item.id
                  });
                  // 路由的跳转
                  this.props.history.push(`/${item.id}`);
                }}
              >
                {/* {item.content} */}
              </TabBar.Item>
            );
          })}
        </TabBar>
      </div>
    );
  }
}

export default BottomBar;
