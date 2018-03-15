import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';

class Side extends Component {
  render() {
    return (
      <Menu onClick={this.props.selectMenuItem} />
    );
  }
}

const mapStateToProps = () => {
  // state
  return {
    // key: state.selectReducer.key
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // selectMenuItem: (key) => dispatch(Actions.generateAction(key))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Side);