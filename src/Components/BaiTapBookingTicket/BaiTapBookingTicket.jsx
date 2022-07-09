import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import InfoTicket from "./InfoTicket";
import SeatMap from "./SeatMap";

export default class BaiTapBookingTicket extends Component {
  render() {
    return (
      <div className="bookingMovie py-3">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <SeatMap />
            </div>
            <div className="col-4">
              <InfoTicket />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
