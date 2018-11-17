import {productServices} from "../../services/product.services";

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

const fetchProducts = (params) => {
  const request = () => ({type: FETCH_PRODUCTS_REQUEST});
  const success = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    products,
  });
  const failure = (error) => ({type: FETCH_PRODUCTS_FAILURE, error});

  return (dispatch) => {
    dispatch(request());

    productServices.fetchProducts(params)
      .then(
        products => {
          dispatch(success(products));
        },
        error => {
          dispatch(failure(error));
        }
      )
      .catch(error => {
        dispatch(failure(error));
      })
  };
};

export const productActions = {
  fetchProducts,
};
