import React, { Component } from "react";
import "./style.less";

class Header extends Component {
  render() {
    return (
      <>
        <div className='navHeader'>
          <i className='iconfont icon-caidan'></i>
          <div>
            <button>登录</button>
            <button>注册</button>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
