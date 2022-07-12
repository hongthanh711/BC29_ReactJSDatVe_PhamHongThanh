import dataGhe from "./../../Data/danhSachGhe.json";

const DEFAULT_STATE = {
  selectedSeat: dataGhe,

  cartTicket: [
    { soGhe: "A1", gia: 75000, daDat: false },
    { soGhe: "A3", gia: 12000, daDat: false },
  ],
};

export const bookingReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case "SELECTED_SEAT": {
      console.log(payload.daDat);
      const data = [...state.cartTicket];

      if (payload.daDat === false) {
        state.selectedSeat.daDat = true;

        const index = dataGhe.findIndex((ele) => {
          return ele.danhSachGhe.findIndex(
            (ele) => ele.soGhe === payload.soGhe
          );
        });

        console.log(index);
      } else if (payload.daDat === true) {
        state.selectedSeat.daDat = false;
      }

      console.log(state.selectedSeat.daDat);
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
