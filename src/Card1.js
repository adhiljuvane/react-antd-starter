import React, { Component } from 'react';
import './Card1.css'
import { Card } from 'antd';
import a from './fourth.png'

export default class Card1 extends Component{
  render(){
    return(
      <div className="divForCard1">
          <Card title="WSPV India Pvt Ltd" bordered={false} className="card1">
            <div className="divForTotalContent">
              <div className="divForContent">Incorporated in 2003 as a clothing company with an intention to touch and change the lives of people around the world, WSPV was the vision of young entrepreneurs With countless years of marketing, manufacturing and exporting experience between us, but we were dissatisfied with other companies and job opportunities we had encountered. Finally, we realized that the only way to find a company we wanted to be a part of was to create that company.</div>
              <div className="divForImage"><img src={a}/></div>
            </div>
          </Card>
      </div>
    )
  }
}
