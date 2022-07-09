const DEFAULT_STATE = {
  selectedSeat: {},
};

export const bookingReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case "SELECTED_SEAT": {
      console.log(payload);
      return { ...state };
    }
    default:
      return state;
  }
};
