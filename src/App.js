import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Header2 from './Header2.js'
import Content1 from './Content1.js'
import Card1 from './Card1.js'
import Card2 from './Card2.js'
import Card3 from './Card3.js'
import Card4 from './Card4.js'
import Card5 from './Card5.js'
import Content2 from './Content2'
import Content3 from './Content3'
import Content4 from './Content4'
import Content5 from './Content5'

class App extends Component {
componentDidMount(){


}


  render() {

   

    return (
      <div className="parentDiv">
          <Header/>
          <Content1/>
          <Card1/>
          <Card2/>
          <Card3/>
          <Card4/>
          <Card5/>
          <Content2/>
          <Content3/>
          <Content4/>
          <Content5/>
      </div>
    );
  }
}

export default App;
