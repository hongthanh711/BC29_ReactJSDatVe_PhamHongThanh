import React, { Component } from "react";
import dataDanhSachGhe from "./../../Data/danhSachGhe.json";

import { connect } from "react-redux";

class SeatMap extends Component {
  renderGhe = (ele) => {
    return ele.danhSachGhe.map((gheList) => {
      return (
        <div
          onClick={() => this.props.selectedSeat(gheList.soGhe)}
          key={gheList.soGhe}
          className="ghe"
        >
          {gheList.soGhe}
        </div>
      );
    });
  };

  renderSoHang = (ele) => {
    return ele.danhSachGhe.map((gheList) => {
      return (
        <div key={gheList.soGhe} className="rowNumber">
          {gheList.soGhe}
        </div>
      );
    });
  };

  renderMap = () => {
    return dataDanhSachGhe.map((ele, index) => {
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

const mapDispatchToProp = (dispatch) => {
  return {
    selectedSeat: (soGhe) => {
      dispatch({
        type: "SELECTED_SEAT",
        payload: soGhe,
      });
    },
  };
};

export default connect(null, mapDispatchToProp)(SeatMap);
