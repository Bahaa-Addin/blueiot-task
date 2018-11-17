import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/CartListItem.css'
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {lightBlack} from 'material-ui/styles/colors';

import {cartActions} from '../state/actions/cart.actions';

class CartItem extends Component {

    render() {
        const {id, name, image, price, count, handleRemoveCartItem} = this.props;
        return (
            <div className="cart-item">
                <ListItem
                    className="cart-item-cont"
                    leftAvatar={<Avatar
                                    src={image}
                                    className="cart-item-pic"
                                />}
                    primaryText={
                        <p>
                            {name}&nbsp;&nbsp;
                            <span style={{color: lightBlack}}>x{count}
                            </span>
                        </p>
                    }
                    secondaryText={
                        <p>
                            {/*<span style={{color: darkBlack}}>to me, Scott,Jennifer</span>*/}
                            {count} x EGP {price}
                        </p>
                    }
                    secondaryTextLines={2}
                    rightIcon={<IconButton
                                    className="remove-cart-item"
                                    onClick={() => handleRemoveCartItem(id)}
                                >
                                    <NavigationClose/>
                                </IconButton>
                             }
                />
                <Divider inset={true}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
        handleRemoveCartItem: (id) => dispatch(cartActions.removeItemFromCart(id))
});

export default connect(null, mapDispatchToProps)(CartItem);
