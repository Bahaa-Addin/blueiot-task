import {categoryServices} from "../../services/category.services";

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

const fetchCategories = (params) => {
  const request = () => ({type: FETCH_CATEGORIES_REQUEST});
  const success = (categories) => ({
    type: FETCH_CATEGORIES_SUCCESS,
    categories,
  });
  const failure = (error) => ({type: FETCH_CATEGORIES_FAILURE, error});

  return (dispatch) => {
    dispatch(request());

    categoryServices.fetchCategories(params)
      .then(
        categories => {
          dispatch(success(categories));
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

export const categoryActions = {
  fetchCategories,
};
