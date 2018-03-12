import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  constructor() {
    super();
    this.state = { value: '' };
  }

  render() {
    // const { generate, changetext } = this.props; 
    const { onSubmit,  } = this.props;
    return (
    <form className = "form" onSubmit={onSubmit(this.state.value)}> 
        <label>
          <input type="text" value={this.state.value} onChange={e => {
            this.setState({ value: e.target.value });
          }} />
        </label>
        {/* <label>
          密碼：
          <input type="text" value={this.state.value} onChange={e => {
            this.setState({ value: e.target.value }); 
          }} />
        </label> */}
        <input className="button" type="submit" value="send" />
      </form>
    );
  }
}