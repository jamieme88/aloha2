import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import * as Actions from '../actions';

class Side extends Component {
  render() {
    return (
      <Menu onClick={this.props.selectMenuItem} />
    );
  }
}

const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    selectMenuItem: (v)=>(event) => {
      console.log('mapDispatchToProps v', v);
      dispatch(Actions.selectAction(v));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Side);