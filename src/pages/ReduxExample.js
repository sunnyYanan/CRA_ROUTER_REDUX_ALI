import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';

import * as cartActions from '../actions/cart';

import Shelf from '../components/shelf';

class Cart extends Component {
  constructor(props) {
    super(props);
    console.log('dddd-redux-1-props', props);
    this.state = {};
  }

  render() {
    const cartList = this.props.cart.map((item, idx) => {
      return <li key={idx}>{item}</li>;
    });
    return (
      <div className="Cart">
        <Shelf addItem={this.props.actions.addToCart} />
        <h2>Shopping Bag</h2>
        <Button onClick={() => this.props.actions.emptyCart()}>
          清空购物车
        </Button>
        <ol>{cartList}</ol>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  console.log('ddd-redux-1-mapStateToProps', state, props);
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
