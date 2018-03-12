import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import * as Actions from '../actions';

class Content extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit} />
    );
  }
}

const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {    
    handleSubmit: v => (event) => {
      event.preventDefault();
      dispatch(Actions.generateAction(v));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);