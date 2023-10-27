import { actionTypes } from "../actions/actionTypes";

const initialState = {
  basket: [],
  total:0
};

const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_BASKET:
      //elemanın sırarını bulma
//eğer index varsa
      const index = state.basket.findIndex((i) => i.id === payload.id);

      if (index >= 0) {
        const cloneBasket = [...state.basket];
        cloneBasket[index].amount++;
        return {
          ...state,
          basket: cloneBasket,
        };
        //eğer sepette eleman yoksa
      } else {
        const newArray = state.basket.concat({ ...payload, amount: 1 });
        return {
          ...state,
          basket: newArray,
          total:state.total+payload.price
        };
      }

    default:
      return state;
  }
};

export default basketReducer;
