import React , { Component } from 'react' ;
import { Menu ,Icon } from 'antd' ;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class Menus extends Component{

  state = {
   current: 'Home',
 }

 handleClick = (e) => {
   console.log('click ', e);
   this.setState({
     current: e.key,
   });
 }

  render(){
    return(
        <Menu
          onClick = {this.handleClick}
          selectedKeys = {[this.state.current]}
          mode = "horizontal"
          style = {{display : 'flex' , justifyContent : 'space-between',width:'100%'}}
          >
            <Menu.Item key = "Home">
                <Icon type = "home"/>Home
            </Menu.Item>
            <Menu.Item key="Aminities">
                <Icon type="profile" />Aminities
            </Menu.Item>
            <Menu.Item key="Find">
              <Icon type="search" />Find
            </Menu.Item>
        </Menu>
    )
  }
}
