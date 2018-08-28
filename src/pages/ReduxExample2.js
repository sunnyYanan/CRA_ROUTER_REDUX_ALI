import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';
import ChildRedux from '../components/ChildRedux';

import * as countActions from '../actions/countAction';

class Count extends Component {
  constructor(props) {
    super(props);
    console.log('ddd-countprops', props);
  }

  render() {
    return (
      <div className="Cart">
        <h2>count</h2>
        <Button onClick={() => this.props.actions.addCount()}>增加</Button>
        <Button onClick={() => this.props.actions.minus()}>减少</Button>
        <ol>{this.props.num}</ol>

        <h2 style={{ marginTop: '20px' }}>子组件的用法例子</h2>
        <ChildRedux actions={this.props.actions} num={this.props.num} />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  console.log('ddd-mapStateToProps', state, props);
  return {
    num: state.count.num
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(countActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);
