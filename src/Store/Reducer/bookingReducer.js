const DEFAULT_STATE = {
  selectedSeat: {},
  stateStatus: false,
};

export const bookingReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case "SELECTED_SEAT": {
      console.log(payload.daDat);

      if (payload.daDat === false) {
        state.stateStatus = true;
      } else if (payload.daDat === true) {
        state.stateStatus = false;
      }

      console.log(state.stateStatus);
      return { ...state };
    }
    default:
      return state;
  }
};
