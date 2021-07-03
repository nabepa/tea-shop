export function cartReducer(state = [], action) {
  switch (action.type) {
    case 'AddToCart': {
      const { id, name } = action.payload;
      const newState = [...state];

      const targetIndex = state.findIndex((s) => {
        return s.id === id;
      });
      if (targetIndex === -1) {
        newState.push({ id: id, name: name, amount: 1 });
      } else {
        newState[targetIndex].amount++;
      }
      return newState;
    }

    case 'IncreaseAmount': {
      const targetId = action.payload;
      const newState = [...state];
      newState[targetId].amount++;
      return newState;
    }

    case 'DecreaseAmount': {
      const targetId = action.payload;
      const newState = [...state];
      newState[targetId].amount && newState[targetId].amount--;
      return newState;
    }

    default:
      return state;
  }
}
