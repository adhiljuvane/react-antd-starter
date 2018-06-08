import React , { Component } from 'react' ;
import './Content4.css'
import { Button } from 'antd';

export default class Content4 extends Component{
  render(){
    return(
      <div className="divForbuttons">
            <Button shape="circle" icon="facebook"  className="button234"/>
            <Button shape="circle" icon="twitter" className="button234"/>
            <Button shape="circle" icon="instagram" className="button234"/>
      </div>
    )
  }
}
