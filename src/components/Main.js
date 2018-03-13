import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
  constructor() {
    super();
    this.state = { value: '' };
    this.changeInput = this.changeInput.bind(this);
  }
  changeInput(e) {
    this.setState({ value: e.target.value });
    setTimeout(function(){
      console.log('this.state', this.state);
    }, 1000); 
  }

  render() {
    return (
    <form className="form" onSubmit={this.props.onSubmit(this.state.value)}> 
        <label>
          中文姓名:
          <input type="text" value={this.state.value} onChange={ this.changeInput } />
        </label>
        <input className="button" type="submit" value="send" />
      </form>
    );
  }
}