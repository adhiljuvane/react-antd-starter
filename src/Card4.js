import React , { Component } from 'react' ;
import './Card4.css' ;
import { Card } from 'antd' ;

export default class Card4 extends Component{
  render(){
    return(
      <Card title="Contact Us" className="card4">
            <div className="divFortextInC4">WSPV India Pvt.Ltd <br/>297/7, Chandra Reddy, Building <br/>Opp. KEB (Opp.ANR Kalyanamamtapa) <br/>Anekal Road,Krishna Reddy Layout<br/><br/>Email:info@wspvindia.com<br/>Web:www.wspvindia.com</div>
      </Card>
    )
  }
}
