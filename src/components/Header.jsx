import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../styles/Header.css'
import Cart from './CartList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import IconButton from 'material-ui/IconButton';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Badge from 'material-ui/Badge';

import {cartActions} from '../state/actions/cart.actions';

const Intro = () => (
  <div className="container">
    <h1 className="hp-title">Breadfast delivers fresh bakery to your doorstep, every morning.</h1>
    <div className="woocommerce-normal">We are currently delivering to <b> New Cairo, Al Rehab City, Madinaty, El
      Shorouk City, Maadi, Mokattam, Nasr City (8-11 only), Heliopolis (8-11 only)</b>.
    </div>
  </div>
);

class MainMenu extends Component {
  /*    componentDidMount = () => {
          window.addEventListener('scroll', this.handleScroll);
      };

      componentWillUnmount = () => {
          window.removeEventListener('scroll', this.handleScroll);
      };

      lastScrollOffset = 0;
      x = 1;

      handleScroll = (event) => {
          if (this.logo) {
              if (window.scrollY > this.lastScrollOffset) {
                  let translateXOffset = Math.min(40, window.scrollY / 3);
                  let translateYOffset = Math.min(10, window.scrollY / 10);
                  if (this.x > .7) this.x -= 0.01;
                  let scaleSize = Math.max(.7, this.x);
                  //
                  //
                  this.logo.style.transform =
                      `translate(-${translateXOffset}px, -${translateYOffset}px) scale(${scaleSize})`;

                  // this.lastScrollOffset = window.scrollY;
              } else {
                  //
                  let translateXOffset = Math.min(0, window.scrollY / 3);
                  let translateYOffset = Math.min(0, window.scrollY / 3);
                  if (this.x < 1) this.x += 0.01;
                  //
                  let scaleSize = Math.min(1, this.x);
                  //
                  this.logo.style.transform =
                      `translate(${translateXOffset}px, ${translateYOffset}px) scale(${scaleSize})`;

                  // this.lastScrollOffset = window.scrollY;
              }
          }
      }*/

  handleToggleCart = (event) => {
    this.props.handleOpenCart();
  };

  render() {
    let {items} = this.props;

    let cart_count = items ? items.reduce((accum, item) => (accum + item.count), 0) : 0;
    return (
      <div className="sticky-nav-container">
        <div data-spy="affix" data-offset-top="0" data-offset-bottom="200" className="affix affix-top">
          <div className="container">
            <nav className="nav">
              <div
                className="navbar-header"
                ref={(ref) => this.logo = ref}
              >
                <h1 className="nav-logo">
                  <Link to={`/store`}>
                    <img
                      src="https://www.breadfast.com/wp-content/themes/breadfast/assets/img/logo.png"
                      alt="Breadfast" style={{height: 60}}
                    />
                  </Link>
                </h1>
              </div>
              <ul className="list-inline navbar-right">
                <li><a href="#">Have an event?</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#" className="btn-breadfast">Register</a></li>
                <li><a href="#" className="btn-breadfast">Contact</a></li>
                <li><a href="#">About</a></li>
                <li>
                  <a className="menu-cart" href="#" onClick={this.handleToggleCart}
                     title="View your shopping cart">
                    <MuiThemeProvider>
                      <Badge
                        badgeContent={items ? cart_count : 0}
                        secondary={!!(items && cart_count)}
                        badgeStyle={{top: 18, right: 18}}
                      >
                        <IconButton>
                          <ShoppingCart/>
                        </IconButton>
                      </Badge>
                    </MuiThemeProvider>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

const Header = ({cart, handleOpenCart}) => (
  <header>
    <MainMenu
      items={cart.items}
      handleOpenCart={handleOpenCart}>
    </MainMenu>
    <Intro></Intro>
    <Cart></Cart>
  </header>
);

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  handleOpenCart: () => dispatch(cartActions.openCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
