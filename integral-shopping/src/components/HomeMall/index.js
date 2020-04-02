import React, { Component } from "react";
import Head from "./mallHeader";
import Content from "./mallContent";
import Exchange from "./mallExchange";
import "./style.less";

class Mall extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render(props) {
    return (
      <div className='shoppingCart'>
        <Head />
        <Content />
        <Exchange {...props} />
        <div className='noMore'>没有更多了</div>
      </div>
    );
  }
}

export default Mall;
