import React, { Component } from "react";

export default class InputTicket extends Component {
  render() {
    return (
      <div>
        <h5 className="text-warning">
          Fill The Required Details Below And Select Your Seats
        </h5>
        <div className="row">
          <div className="col-6">
            <label htmlFor="">Name*</label>
            <input type="text" />
          </div>
          <div className="col-6">
            <label htmlFor="">Number of Seats *</label>
            <input type="text" />
          </div>
        </div>

        <button className="btn btn-warning my-2">Start Selecting</button>
      </div>
    );
  }
}
