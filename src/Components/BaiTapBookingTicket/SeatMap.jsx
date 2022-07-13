import React, { Component } from "react";
import dataDanhSachGhe from "./../../Data/danhSachGhe.json";

import { connect } from "react-redux";

class SeatMap extends Component {
  renderGhe = (ele) => {
    return ele.danhSachGhe.map((seat) => {
      return (
        <div
          onClick={() => this.props.selectSeat(ele.hang, seat.soGhe)}
          key={seat.soGhe}
          className={seat.daDat ? "gheDangChon" : "ghe"}
          // className="ghe"
        >
          {seat.soGhe}
        </div>
      );
    });
  };

  renderSoHang = (ele) => {
    return ele.danhSachGhe.map((seat) => {
      return (
        <div key={seat.soGhe} className="rowNumber">
          {seat.soGhe}
        </div>
      );
    });
  };

  renderMap = () => {
    return this.props.selectedSeat.map((ele, index) => {
      if (index === 0) {
        return (
          <div key={ele.hang} className="d-flex">
            {this.renderSoHang(ele)}
          </div>
        );
      } else {
        return (
          <div key={ele.hang} className="d-flex">
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
    selectSeat: (hang, soGhe) => {
      dispatch({
        type: "SELECT_SEAT",
        payload: { hang, soGhe },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(SeatMap);
