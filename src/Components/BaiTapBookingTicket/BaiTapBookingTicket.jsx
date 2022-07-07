import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import InfoTicket from "./InfoTicket";
import SeatMap from "./SeatMap";
import InputTicket from "./InputTicket";

export default class BaiTapBookingTicket extends Component {
  render() {
    return (
      <div className="bookingMovie">
        <h1 className="text-white text-center">MOVIE SEAT SELECTION</h1>
        <div className="container">
          <InputTicket />
          <SeatMap />
          <InfoTicket />
        </div>
      </div>
    );
  }
}
