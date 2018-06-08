import React, { Component } from 'react';
import './Header.css'
import a from './user-silhouette.svg'
import b from './download.png'
import { Button } from 'antd'

export default class Header extends Component{
  render(){
    return(
      <div className="maindiv">
            <img className="homeIcon" src={b}/>
            <div className="contents">
                  <div className="indDiv">OUR BRANDS</div>
                  <div className="indDiv">PRODUCTS</div>
                  <div className="indDiv">GALLERY</div>
                  <div className="indDiv">CONTACTS</div>
            </div>
            <img className="divForIcon" src={a} />
      </div>
    )
  }
}


