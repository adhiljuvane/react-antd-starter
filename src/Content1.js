import React, { Component } from 'react';
import './Content1.css'
import i from "./first.jpg"
import j from "./second.jpg"
import k from "./third.jpg"
import { Carousel } from 'antd';


export default class Content1 extends Component{
  render(){
    return(
      <div className="main">
          <Carousel autoplay="true" className="main" interval="200">
            <div className="div1">
              <img src={i}/>
            </div>
            <div className="div2">
              <img src={j}/>
            </div>
            <div className="div3">
              <img src={k}/>
            </div>
          </Carousel>
      </div>
    )
  }
}
