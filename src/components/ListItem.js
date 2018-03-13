import React, { Component } from 'react';
import './ListItem.css';

class listItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorStyle: '',
      key: '', 
    }
    this.changeStyle = this.changeStyle.bind(this);
  }

  changeStyle() {
    const { colorStyle, text, key } = this.state;
    const { k } = this.props.data;
    this.setState({
      colorStyle: colorStyle ? '' : 'redColor',
      key: this.props.data.k,
    });
  }
  render() {
    const { selected } = this.props;
    const { colorStyle, text } = this.state;
    const { k , v } = this.props.data;

    return (
      <li key={ k } className={ colorStyle } onClick={ this.changeStyle } >
        { v }
      </li>
    );
  }
}

export default listItem;