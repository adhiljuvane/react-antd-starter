import React, { Component } from 'react';
import './Card3.css'
import { Card } from 'antd';

export default class Card3 extends Component{
  render(){
    return(
      <div className="divForCard3">
            <Card title="Our Products" bordered="false" className="card3">
                <div className="allimages">
                    <div className="div1in3">
                        <div className="textOndiv1">JEANS</div>
                    </div>
                    <div className="div2in3">
                        <div className="textOndiv1">T-SHIRTS</div>
                    </div>
                    <div className="div3in3">
                        <div className="textOndiv1">SHIRTS</div>
                    </div>
                    <div className="div4in3">
                        <div className="textOndiv1">SAREES</div>
                    </div>
                </div>
            </Card>
      </div>
    )
  }
}
