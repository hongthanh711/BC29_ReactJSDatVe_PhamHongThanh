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
    case "SELECT_SEAT": {
      const data = [...state.selectedSeat];

      const hang = data.find((ele) => ele.hang === payload.hang);

      hang.danhSachGhe = hang.danhSachGhe.map((ghe) => {
        if (ghe.soGhe === payload.soGhe) {
          return { ...ghe, daDat: !ghe.daDat };
        }
        return ghe;
      });

      console.log(hang.danhSachGhe);

      state.selectedSeat = data;

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
