export const OPEN_CART = 'OPEN_CART';
export const CLOSE_CART = 'CLOSE_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHECKOUT_FROM_CART = 'CHECKOUT_FROM_CART';

const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload
});

const openCart = () => ({
  type: OPEN_CART,
  payload: true
});

const closeCart = () => ({
  type: CLOSE_CART,
  payload: false
});

const removeItemFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id
});

const checkoutFromCart = () => ({
  type: CHECKOUT_FROM_CART,
});

export const cartActions = {
  addToCart,
  openCart,
  closeCart,
  removeItemFromCart,
  checkoutFromCart
};
