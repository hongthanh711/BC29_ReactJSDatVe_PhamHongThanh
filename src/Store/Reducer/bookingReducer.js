import dataGhe from "./../../Data/danhSachGhe.json";

const DEFAULT_STATE = {
  selectedSeat: dataGhe,

  cartTicket: [],
};

export const bookingReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case "SELECT_SEAT": {
      const data = [...state.selectedSeat];
      const dataCart = [...state.cartTicket];

      const hang = data.find((ele) => ele.hang === payload.hang);
      const ghe = hang.danhSachGhe.find((ele) => ele.soGhe === payload.soGhe);
      ghe.daDat = !ghe.daDat;

      // hang.danhSachGhe = hang.danhSachGhe.map((ghe) => {
      //   if (ghe.soGhe === payload.soGhe) {
      //     return { ...ghe, daDat: !ghe.daDat };
      //   }
      //   return ghe;
      // });

      if (ghe.daDat === true) {
        dataCart.push(ghe);
      } else {
        const index = dataCart.findIndex((ele) => ghe.soGhe === ele.soGhe);
        dataCart.splice(index, 1);
      }

      state.selectedSeat = data;
      state.cartTicket = dataCart;

      return { ...state };
    }

    case "DELETE_TICKET": {
      const data = [...state.selectedSeat];
      const dataCart = [...state.cartTicket];

      // Xóa trong cart
      const index = dataCart.findIndex((ele) => ele.soGhe === payload);
      if (index !== -1) {
        dataCart.splice(index, 1);
      }

      // Chuyển sang false trong data
      const datamap = data.map((ele) => {
        return {
          ...ele,
          danhSachGhe: ele.danhSachGhe.map((ghe) => {
            if (ghe.soGhe === payload) {
              return { ...ghe, daDat: !ghe.daDat };
            }
            return ghe;
          }),
        };
      });

      state.selectedSeat = datamap;
      state.cartTicket = dataCart;

      return { ...state };
    }

    default:
      return state;
  }
};
