import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from "../actions/category.actions";

const INITIAL_STATE = {
  data: [],
  error: null,
  isLoading: false,
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        data: action.categories,
        isLoading: false,
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:

      return state;
  }
};

export default categoryReducer;
