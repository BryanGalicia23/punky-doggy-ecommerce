export const initialState = {
  basket: [],
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  DELETE_ONE_FROM_BASKET: "DELETE_ONE_FROM_BASKET",
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
    default:
      return state;
  }
}

export default reducer;
