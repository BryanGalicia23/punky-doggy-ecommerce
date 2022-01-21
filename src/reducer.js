export const initialState = {
  basket: [],
  user: null,
  shippingData: {},
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  DELETE_ONE_FROM_BASKET: "DELETE_ONE_FROM_BASKET",
  SET_USER: "SET_USER",
  EMPTY_BASKET: "EMPTY_BASKET",
  SET_SHIPPING_DATA: "SET_SHIPPING_DATA",
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
  //console.log(basket);
};

function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "DELETE_ONE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("No se pudo borrar el archivo");
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: action.basket,
        user: null,
      };

    case "SET_SHIPPING_DATA":
      return {
        ...state,
        shippingData: action.shippingData,
      };

    default:
      return state;
  }
}

export default reducer;
