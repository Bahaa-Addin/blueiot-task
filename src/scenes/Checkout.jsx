import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CartItem from '../components/CartListItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Typography from '@material-ui/core/Typography';

import '../styles/Checkout.css';

const Checkout = ({cart}) => (
  <MuiThemeProvider>
    <div className="cart__checkout-summary">
      <Typography variant="title" gutterBottom>
        Order Summary
      </Typography>
      <List className="cart-list">
        <Subheader></Subheader>
        {cart.items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            count={item.count}
          />))

        }
      </List>
      <div
        style={{
          margin: "1em"
        }}
      >
        <h4>Subtotal:</h4>
        <span>EGP {cart.subtotal}</span>
      </div>
    </div>
  </MuiThemeProvider>
);

Checkout.propTypes = {
  cart: PropTypes.object,
};

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps)(Checkout);
