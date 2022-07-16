import React, { Component } from "react";
import dataDanhSachGhe from "./../../Data/danhSachGhe.json";

import { connect } from "react-redux";

class SeatMap extends Component {
  renderSoHang = (ele) => {
    return ele.danhSachGhe.map((seat) => {
      return (
        <div key={seat.soGhe} className="rowNumber">
          {seat.soGhe}
        </div>
      );
    });
  };

  timGhe = () => {};

  renderGhe = (ele) => {
    return ele.danhSachGhe.map((seat) => {
      const index = this.props.cartTicket.findIndex(
        (ghe) => ghe.soGhe === seat.soGhe
      );

      if (index !== -1) {
        return (
          <div
            onClick={() => this.props.selectSeat(seat)}
            key={seat.soGhe}
            className="gheDangChon"
          >
            {seat.soGhe}
          </div>
        );
      } else if (seat.daDat) {
        return (
          <div key={seat.soGhe} className="gheDuocChon">
            {seat.soGhe}
          </div>
        );
      } else if (seat.daDat === false) {
        return (
          <div
            onClick={() => this.props.selectSeat(seat)}
            key={seat.soGhe}
            className="ghe"
          >
            {seat.soGhe}
          </div>
        );
      }
    });
  };

  renderMap = () => {
    return dataDanhSachGhe.map((ele, index) => {
      if (index === 0) {
        return (
          <div key={ele.hang} className="d-flex">
            <div className="rowNumber">{ele.hang}</div>
            {this.renderSoHang(ele)}
          </div>
        );
      } else {
        return (
          <div key={ele.hang} className="d-flex">
            <div className="rowNumber">{ele.hang}</div>
            {this.renderGhe(ele)}
          </div>
        );
      }
    });
  };

  render() {
    return (
      <div>
        <h1 className="bg-warning">ĐẶT VÉ XEM PHIM</h1>
        <br />
        <p className="text-center">Màn hình</p>
        <div className="screen w-100"></div>
        <div className="text-center">{this.renderMap()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.bookingReducer,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    selectSeat: (seat) => {
      dispatch({
        type: "SELECT_SEAT",
        payload: seat,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(SeatMap);
