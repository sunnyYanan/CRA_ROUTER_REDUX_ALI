import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

export default class ChildRedux extends Component {
  render() {
    const { num, actions } = this.props;
    return (
      <div className="Cart">
        <h2>count</h2>
        <Button onClick={() => actions.addCount()}>增加</Button>
        <Button onClick={() => actions.minus()}>减少</Button>
        <ol>{num}</ol>
      </div>
    );
  }
}
ChildRedux.propTypes = {
  num: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};
