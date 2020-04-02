import React, { Component } from "react";
import "./style.less";
import { SearchBar, Carousel } from "antd-mobile";
import Header from "../../commonHeader";

class Head extends Component {
  state = {
    data: [
      "18_youflower_m.jpg?830",
      "19_day1111_m.jpg",
      "17_banner_tx_m.jpg",
      "18_birthday_m.jpg?830"
    ]
  };
  componentDidMount() {
    this.autoFocusInst.focus();
  }
  render() {
    const { data } = this.state;
    return (
      <>
        <Header></Header>
        <div className='navSearch'>
          <SearchBar
            placeholder='自动获取光标'
            ref={ref => (this.autoFocusInst = ref)}
          />
        </div>
        <div className='banner'>
          <Carousel className='banner' autoplay infinite>
            {data.map((item, index) => (
              <a href='#' key={index}>
                <img
                  src={`https://img02.hua.com/slider/${item}`}
                  alt='设计师鲜花'
                />
              </a>
            ))}
          </Carousel>
        </div>
      </>
    );
  }
}

export default Head;
