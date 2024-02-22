import React from "react";
import Header from "./Header";
import Vector from "../assets/icons/Vector.png";

const ConfirmedBooking = () => {
  return (
    <>
      <Header />
      <div className="booking-confirmed">
        <img src={Vector} alt="confirm" width={130} height={130} />
        <h6>
          Booking has been <span>confirmed!</span>
        </h6>
      </div>
    </>
  );
};

export default ConfirmedBooking;
