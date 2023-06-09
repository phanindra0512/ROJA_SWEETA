const cartInitialState = [];

export const cartCounterReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      const { data, count } = action;
      data["productCount"] = count;
      return [...state, data];

    case "INCREMENT":
      state.map((item) => {
        if (item.id == action.data.id) {
          item.productCount = action.count;
        }
      });
      return [...state];

    case "DECREMENT":
      state.map((item) => {
        if (item.id == action.data.id) {
          item.productCount = action.count;
        }
      });
      return [...state];

    case "DELETE_FROM_CART":
      const deleteItem = state.filter((item) => item.id !== action.data.id);
      return deleteItem;

    default:
      return state;
  }
};
