import React, { Component } from "react";

export default class InfoTicket extends Component {
  render() {
    return (
      <div>
        <div className="pb-3">
          <div className="d-flex">
            <div className="cell gheDuocChon"></div>
            <span className="px-2">Selected Seat</span>
          </div>
          <div className="d-flex">
            <div className="cell gheDangChon"></div>
            <span className="px-2">Reserved Seat</span>
          </div>
          <div className="d-flex">
            <div className="cell ghe ml-0"></div>
            <span className="px-2">Empty Seat</span>
          </div>
        </div>

        <table className="table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Number of Seats</th>
              <th>Seats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
