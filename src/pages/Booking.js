import React from "react";
import { useState } from "react";
import {
  Navigate,
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import BookingForm from "../components/BookingForm";
import Header from "../components/Header";
import availableTimeApi from "../mockapi/availableTimeApi";

function Booking() {
  const navigate = useNavigate();
  function submitFormApi(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  const [availableTimesB, setTimes] = useState([]);
  return (
    <div>
      <Header />
      <BookingForm
        availableTimes={availableTimesB}
        handleDateChanged={(value) => {
          setTimes(availableTimeApi(value));
        }}
        submitForm={submitFormApi}
      />
    </div>
  );
}

const submitAPI = function (formData) {
  return true;
};

export default Booking;
