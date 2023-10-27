import axios from "axios";
import { actionTypes } from "./actionTypes";

//snkron action
export const addToBasket = (product) => {
  return {
    type: actionTypes.ADD_TO_BASKET,
    payload: product,
  };
};

// thunk sayesinde aksiuon dispatch
//edilmeden önce API çağrısı yapar
//gelen veriye teeeeeeetikleme işlmei yapar

export const getProduct = () => (dispatch) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) =>
      dispatch({ type: actionTypes.SET_PRODUCTS, payload: res.data })
    )
    .catch((error) =>
      dispatch({
        type: actionTypes.SET_ERROR,
      })
    );
};
