export const addToCart = (data, count) => {
  return {
    type: "ADD_TO_CARD",
    data,
    count,
  };
};

export const cartIncrementCounter = (data, count) => {
  console.log(" ----- > ", data, count);
  return {
    type: "INCREMENT",
    data,
    count,
  };
};

export const cartDecrementCounter = (data, count) => {
  return {
    type: "DECREMENT",
    data,
    count,
  };
};

export const deleteFromCart = (data) => {
  return {
    type: "DELETE_FROM_CART",
    data,
  };
};


export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
