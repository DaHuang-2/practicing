import React from "react";
import "./style.less";

const Content = () => {
  return (
    <>
      <div className='player'>
        <i className='iconfont icon-guangbo'></i>
        <div className='scroll'>
          <marquee
            direction='down'
            scrollamount='5'
            height='20'
            scrolldelay='100'
          >
            <p>你个糟老头子，</p>
            <p>我信你个鬼啊！</p>
            <p>你别落在我手里~</p>
          </marquee>
        </div>
      </div>
    </>
  );
};

export default Content;
