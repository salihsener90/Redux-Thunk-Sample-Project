import { actionTypes } from "../actions/actionTypes";

const initialState = {
  products: [],
  isLoading: true,
  isError: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      console.log(action);
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        isError: ture,
      };
    default:
      return state;
  }
};

export default productReducer;
