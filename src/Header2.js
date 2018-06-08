import React , { Component } from 'react' ;
import ResponsiveMenu from 'react-responsive-navbar';
import './Header2.css'
import a from './user-silhouette.svg'
import b from './download.png'
import { Icon } from 'antd'

export default class Header2 extends Component{
  render(){
    return(
      <ResponsiveMenu
            menuOpenButton={<Icon type="menu-fold"  style={{fontSize : '20px'}}/>}
            menuCloseButton={<Icon type="menu-unfold" style={{fontSize:'20px'}}/>}
            changeMenuOn="500px"
            largeMenuClassName="large-menu-classname"
            smallMenuClassName="small-menu-classname"
            menu={
                <ul className="contentsInH2" >
                  <li><img className="homeIconInH2" src={b}/></li>
                  <li className="indDivInH2">OUR BRANDS</li>
                  <li className="indDivInH2">PRODUCTS</li>
                  <li className="indDivInH2">GALLERY</li>
                  <li className="indDivInH2">CONTACTS</li>
                  <li><img className="divForIconInH2" src={a}/></li>
                </ul>
              }
        />
    );
  }
}
