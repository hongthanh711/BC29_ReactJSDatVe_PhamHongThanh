import React, { Component } from "react";

import { connect } from "react-redux";

class InfoTicket extends Component {
  renderTicket = () => {
    return this.props.cartTicket.map((ele) => {
      return (
        <tr key={ele.soGhe}>
          <td>{ele.soGhe}</td>
          <td>{ele.gia}</td>
          <td>
            <button
              onClick={() => this.props.deleteTicket(ele.soGhe)}
              className="btn btn-danger"
            >
              Hủy
            </button>
          </td>
        </tr>
      );
    });
  };

  tinhTien = () => {
    let tongTien = 0;
    this.props.cartTicket.forEach((ele) => {
      tongTien += ele.gia;
    });
    return tongTien;
  };

  render() {
    return (
      <div>
        <div className="pb-3">
          <div className="d-flex">
            <div className="cell gheDuocChon"></div>
            <span className="px-2">Ghế đã đặt</span>
          </div>
          <div className="d-flex">
            <div className="cell gheDangChon"></div>
            <span className="px-2">Ghế đang chọn</span>
          </div>
          <div className="d-flex">
            <div className="cell ghe ml-0"></div>
            <span className="px-2">Ghế chưa đặt</span>
          </div>
        </div>

        <table className="table-bordered">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTicket()}
            <tr>
              <td>Tổng tiền</td>
              <td>{this.tinhTien()}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.bookingReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTicket: (soGhe) => {
      dispatch({
        type: "DELETE_TICKET",
        payload: soGhe,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoTicket);
