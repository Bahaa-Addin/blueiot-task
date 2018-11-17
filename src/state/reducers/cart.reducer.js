import {
  ADD_TO_CART,
  CLOSE_CART,
  OPEN_CART,
  REMOVE_FROM_CART,
  CHECKOUT_FROM_CART
} from '../actions/cart.actions';

const initialState = {
  items: [],
  isOpen: false
};

const cartReducer = (state = initialState, action) => {


  switch (action.type) {
    case ADD_TO_CART:

      let duplicate = state.items
        .find(item => action.payload.id === item.id);

      let new_item = duplicate
        ? {
          ...action.payload,
          count: action.payload.count + duplicate.count
        }
        : action.payload;

      /** Remove the duplicate in immutable fashion */
      let unique_cart = duplicate
        ? state.items.filter(item => item.id !== duplicate.id)
        : [...state.items];

      return {
        ...state,
        items: [...unique_cart, new_item]
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: [...state.items.filter(item => item.id !== action.payload)]
      };

    case CHECKOUT_FROM_CART:
      return {
        ...state,
        subtotal: state.items.reduce((sub, item) => (sub + item.price * item.count) , 0),
        isOpen: false
      };

    case OPEN_CART:

      return {
        ...state,
        isOpen: action.payload
      };

    case CLOSE_CART:

      return {
        ...state,
        isOpen: action.payload
      };
    default:
      return state;
  }

};

export default cartReducer;