const DEFAULT_STATE = {
  selectedSeat: {},
  isStatus: false,
  cartTicket: [
    { soGhe: "A1", gia: 75000, daDat: false },
    { soGhe: "A3", gia: 12000, daDat: false },
  ],
};

export const bookingReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case "SELECTED_SEAT": {
      console.log(payload.daDat);

      if (payload.daDat === false) {
        state.isStatus = true;
      } else if (payload.daDat === true) {
        state.isStatus = false;
      }

      console.log(state.isStatus);
      return { ...state };
    }

    case "DELETE_TICKET": {
      const data = [...state.cartTicket];

      const index = data.findIndex((ele) => ele.soGhe === payload);

      if (index !== -1) {
        data.splice(index, 1);
      }

      state.cartTicket = data;

      return { ...state };
    }

    default:
      return state;
  }
};
