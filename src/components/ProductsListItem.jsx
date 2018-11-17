import React, {Component} from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import NumberInput from 'material-ui-number-input';
import RaisedButton from 'material-ui/RaisedButton';

import {cartActions} from '../state/actions/cart.actions';

import '../styles/ProductListItem.css';

class Product extends Component {

  state = {
    count: "1",
    errorText: "Invialid Count Number"
  };

  handleAddToCartClick = (event) => {

    this.props.addToCart({
      id: this.props.id,
      name: this.props.name,
      price: this.props.price,
      image: this.props.image,
      count: +this.state.count
    });
  }

  handleCountKeyDown = (event) => {

  };

  handleCountChange = (event, value) => {

    this.setState({
      count: value
    })
  };

  handleCountError = (error) => {
    let errorText;

    switch (error) {
      case 'required':
        errorText = 'This field is required';
        break;
      case 'invalidSymbol':
        errorText = 'Invalid number';
        break;
      case 'incompleteNumber':
        errorText = 'Number is incomplete';
        break;
      case 'singleMinus':
        errorText = 'Invalid count';
        break;
      case 'singleFloatingPoint':
        errorText = 'Invaoid count';
        break;
      case 'min':
        errorText = 'Minimum items is 1';
        break;
      case 'max':
        errorText = 'Maximum items is 50';
        break;
      case 'none':
        this.setState({
          isCountValid: +this.state.count >= 1 && +this.state.count <= 50
        });
        break;
      default:
        break;
    }

    this.setState({
      errorText,
      isCountValid: false
    });
  };

  handleCountValid = (value) => {

    this.setState({
      isCountValid: true
    })
  };

  handleCountRequestValue = (value) => {

    this.setState({value: value})
  }

  handleIncrementClick = (event) => {
    //
    this.setState((prevState, props) => {
      return {count: Math.min(50, +prevState.count + 1).toString()}
    })
  }

  handleDecrementClick = (event) => {
    //
    this.setState((prevState, props) => {
      return {count: Math.max(1, +prevState.count - 1).toString()}
    })
  }


  render() {
    const {state, handleAddToCartClick, handleCountChange, handleCountError, handleCountKeyDown, handleCountValid, handleCountRequestValue, handleIncrementClick, handleDecrementClick} = this;
    const {name, price, image} = this.props;
    return (
      <MuiThemeProvider>
        <Paper zDepth={1} className="shadow">
          <Card className="item">
            <CardMedia className="media">
              <img src={image} alt=""
                   className="item-image"/>
            </CardMedia>
            <CardTitle title={name} subtitle={`EGP ${price}`} className="item-title"/>
            <CardActions className="item-actions">
              <NumberInput
                className="item-count"
                id="num"
                value={state.count}
                required
                min={1}
                max={50}
                strategy="warn"
                errorText={state.errorText}
                onValid={handleCountValid}
                onChange={handleCountChange}
                onError={handleCountError}
                onRequestValue={handleCountRequestValue}
                onKeyDown={handleCountKeyDown}/>
              <div className="action-buttons">
                <FlatButton label="+" onClick={handleIncrementClick}/>
                <FlatButton label="–" onClick={handleDecrementClick}/>
              </div>
              <div className="add-item">
                <RaisedButton
                  label="Add to Cart"
                  className="add-btn"
                  onClick={handleAddToCartClick}
                  disabled={!state.isCountValid}
                />
              </div>
            </CardActions>
          </Card>
        </Paper>
      </MuiThemeProvider>
    )
      ;
  }
};

const mapStateToProps = (state) => ({
  cart: state.cart
});


const mapDispatchToProps = dispatch => ({
  addToCart: (items) => dispatch(cartActions.addToCart(items))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
