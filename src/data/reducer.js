export function cartReducer(state = {}, action) {
  switch (action.type) {
    case 'AddToCart': {
      const { id, name, price } = action.payload;
      const newState = { ...state };

      if (newState.hasOwnProperty(id)) {
        newState[id].amount++;
        newState[id].pay += price;
      } else {
        newState[id] = {
          id: id,
          name: name,
          amount: 1,
          price: price,
          pay: price,
        };
      }

      return newState;
    }

    case 'IncreaseAmount': {
      const targetId = action.payload;
      const newState = { ...state };
      newState[targetId].amount++;
      newState[targetId].pay += newState[targetId].price;
      return newState;
    }

    case 'DecreaseAmount': {
      const targetId = action.payload;
      const newState = { ...state };
      if (newState[targetId].amount) {
        newState[targetId].amount--;
        newState[targetId].pay -= newState[targetId].price;
      }
      return newState;
    }

    default:
      return state;
  }
}
