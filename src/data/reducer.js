export function cartReducer(state = {}, action) {
  switch (action.type) {
    case 'AddToCart': {
      const { id, name } = action.payload;
      const newState = { ...state };

      if (newState.hasOwnProperty(id)) {
        newState[id].amount++;
      } else {
        newState[id] = { id: id, name: name, amount: 1 };
      }

      return newState;
    }

    case 'IncreaseAmount': {
      const targetId = action.payload;
      const newState = { ...state };
      newState[targetId].amount++;
      return newState;
    }

    case 'DecreaseAmount': {
      const targetId = action.payload;
      const newState = { ...state };
      newState[targetId].amount && newState[targetId].amount--;
      return newState;
    }

    default:
      return state;
  }
}
