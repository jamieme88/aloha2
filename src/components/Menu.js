import React, { Component } from 'react';
import './Menu.css'; 
import ListItem from './ListItem';

const list = [
  [
    {k: 1, pageName: 'registerPage'},
    {k: 2, pageName: 'userlistPage'},
    {k: 3, pageName: 'signinPage'}
  ],
  [
    {k: 4, pageName: 'queryshopPage'},
    {k: 5, pageName: 'editshopPage'},
  ]
]

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      active: 0,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(fromChild) {
    this.setState({
      active: fromChild
    });
  }

  render() {
    const { active } = this.state;
    return(
      <nav className="menu-nav">
        <ul className="menu-ul">
          <span style={{ color: 'red', fontSize: '12px' }} >FIRST</span>
          {
            list[0].map(item => <ListItem key={ item.k } data={ item } onSelect = {this.handleSelect} active={ item.k === this.state.active }/>)
          }
          <span style={{ color: 'red', fontSize: '12px' }} >SECOND</span>
          {
            list[1].map(item => <ListItem key={ item.k } data={ item } onSelect = {this.handleSelect}  active={ item.k === this.state.active }/>)
          }
        </ul>
      </nav>
    );
  }
}

export default Menu;