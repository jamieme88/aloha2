import React, { Component } from 'react';
import './Menu.css'; 
import ListItem from './ListItem';

const list = [
  [
    {k: 1, v: 'registerPage'},
    {k: 2, v: 'userlistPage'},
    {k: 3, v: 'signinPage'}
  ],
  [
    {k: 4, v: 'queryshopPage'},
    {k: 5, v: 'editshopPage'},
  ]
]

class Menu extends Component {
  constructor() {
    super();
    this.state = { value: '' };
  }

  render() {
    return(
      <nav className="menu-nav">
        <ul className="menu-ul">
          <span style={{ color: 'red', fontSize: '12px' }} >FIRST</span>
          {
            list[0].map(item => <ListItem key={ item.k } data={ item } />)
          }
          <span style={{ color: 'red', fontSize: '12px' }} >SECOND</span>
          {
            list[1].map(item => <ListItem key={ item.k } data={ item } />)
          }
        </ul>
      </nav>
    );
  }
}

export default Menu;