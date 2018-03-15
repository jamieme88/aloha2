import React, { Component } from 'react';
import './ListItem.css';

class listItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active,
    }
  }

  render() {
    const { k , pageName } = this.props.data;
    console.log('this.props.data', this.props.data);
    return (
      <li key={ k } className={ this.props.active === true ? 'redColor' : '' } onClick= {()=>this.props.onSelect(k)} >
        { pageName }
      </li>
    );
  }
}

export default listItem;