import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../styles/CartList.css'
import CartItem from './CartListItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
// import {grey400} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
// import IconMenu from 'material-ui/IconMenu';
// import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import {cartActions} from '../state/actions/cart.actions';

// const iconButtonElement = (
//         <IconButton
//             touch={true}
//             tooltip="more"
//             tooltipPosition="bottom-left"
//         >
//             <MoreVertIcon color={grey400}/>
//         </IconButton>
//     );
//
// const rightIconMenu = (
//     <IconMenu iconButtonElement={iconButtonElement}>
//         <MenuItem>Reply</MenuItem>
//         <MenuItem>Forward</MenuItem>
//         <MenuItem>Delete</MenuItem>
//     </IconMenu>
// );

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    render() {
        const {cart, handleCloseCart} = this.props;

        return (
            <MuiThemeProvider>
                <Drawer width={350}
                        openSecondary={true}
                        open={cart.isOpen}
                        overlayClassName="App"
                        docked={false}
                        className="cart-drawer-cont">
                    <AppBar title="Your Cart"
                            className="cart-drawer-head"
                            iconElementLeft={<IconButton className="close-cart" onClick={handleCloseCart}
                            >
                                <NavigationClose/>
                            </IconButton>}
                    />
                    <div>
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
                            <span className="cart-subtotal"><strong>Subtotal: </strong>
                                EGP {cart.items.reduce((accum, item) => (accum + item.price * item.count) , 0) }
                            </span>
                            <div className="action-buttons">
                              <Link to={`/checkout`} >
                                <FlatButton
                                    className="view-cart"
                                    backgroundColor="#EBE9EB"
                                    hoverColor="#DAD8DA"
                                    label="View Cart"
                                    onClick={this.props.checkoutFromCart}
                                />
                              </Link>
                              <Link to={`/checkout`} >
                                <FlatButton
                                    className="checkout"
                                    backgroundColor="#EA554F"
                                    hoverColor="#CF4740"
                                    label="Checkout"
                                    onClick={this.props.checkoutFromCart}
                                />
                              </Link>
                            </div>
                        </List>
                    </div>
                </Drawer>
            </MuiThemeProvider>
        );
    }
}

Cart.propTypes = {
  cart: PropTypes.object
};

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  handleCloseCart: () => dispatch(cartActions.closeCart()),
  checkoutFromCart: () => dispatch(cartActions.checkoutFromCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
