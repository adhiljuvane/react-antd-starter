import React, { Component } from 'react';
import './Card2.css'
import { Card } from 'antd';

export default class Card2 extends Component{
  render(){
    return(
      <div className="divForCard2">
          <Card title="Our Brands" bordered="false" className="card2">
              <div className="allimagesIn2">
                <div className="div1in2"></div>
                <div className="div2in2"></div>
                <div className="div3in2"></div>
                <div className="div4in2"></div>
              </div>
          </Card>
      </div>
    )
  }
}
