const DEFAULT_STATE = {
  cartTicket: [],
};

export const bookingReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case "SELECT_SEAT": {
      const dataCart = [...state.cartTicket];

      const index = dataCart.findIndex((ghe) => ghe.soGhe === payload.soGhe);

      if (index !== -1) {
        dataCart.splice(index, 1);
      } else {
        dataCart.push(payload);
      }

      state.cartTicket = dataCart;

      return { ...state };
    }

    case "DELETE_TICKET": {
      const dataCart = [...state.cartTicket];

      const index = dataCart.findIndex((ele) => ele.soGhe === payload);
      if (index !== -1) {
        dataCart.splice(index, 1);
      }

      state.cartTicket = dataCart;

      return { ...state };
    }

    default:
      return state;
  }
};
