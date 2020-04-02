import React, { Component } from "react";
import Popular from "./mallPopular";
import Virtual from "./VirtualGoods";
import { Link } from "react-router-dom";
import "./style.less";

class Exchange extends Component {
  constructor(props) {
    super(props);
  }
  // getToDetail = props => {
  //   console.log(props);
  //   this.props.history.push("/malldetail");
  // };
  render() {
    return (
      <>
        <div className='shopping'>
          <div className='popularTitle'>
            <span></span>
            <div>热门兑换</div>
          </div>
          <Popular />
          <div className='VirtualTitle'>
            <div>
              <span></span>
              <div>虚拟商品兑换</div>
            </div>
            <Link to='/malldetail'>更多+</Link>
          </div>
          <Virtual />
          <div className='VirtualTitle'>
            <div>
              <span></span>
              <div>实物商品兑换</div>
            </div>
            <Link to='/malldetail'>更多+</Link>
          </div>
          <Virtual />
        </div>
      </>
    );
  }
}

export default Exchange;
