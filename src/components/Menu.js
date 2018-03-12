import React, { Component } from 'react';
import './Menu.css'; 

const list = [
  [{k: 1, v: 'registerPage'},
  {k: 2, v: 'userlistPage'},
  {k: 3, v: 'signinPage'}],
  [{k: 1, v: 'queryshopPage'},
  {k: 2, v: 'editshopPage'},]
]

export default class Form extends Component {
  constructor() {
    super();
    this.state = { value: '' };
  }
  getCurrentValue = (event) => {
    const currentValue = event.target.value;
    console.log('currentValue', currentValue);
    return currentValue;
  }

  render() {
    return(
      // <ul className={styles.box}>Item
      <nav className="menu-nav">
        <ul className="menu-ul">
          <span className={'bold'} style={{ color: 'red', fontSize: '12px' }} >FIRST</span>
          {list[0].map((ele, index) => {
            console.log(ele, index);
            return <li onClick={()=>console.log(`跳到第${ele.v}項`)}>{ele.v}</li>
          })}
          <h2>SECOND</h2>
          {list[1].map((ele, index) => {
            console.log(ele, index);
            return <li onClick={()=>console.log(`跳到第${ele.v}項`)}>{ele.v}</li>
          })}
        </ul>
      </nav>
    );
  }
}

