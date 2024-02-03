import Bookingform from "./Bookingform";
import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Main from "./Main";

function ReserveTable() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    navigate("/bookingconfirmed");
  };

  const reducer = (state, action) => {
    // eslint-disable-next-line no-undef
    return removeTime(action.time);
  };

  const initializeTimes = () => {
    // eslint-disable-next-line no-undef
    return getTimes(new Date().getDate());
  };

  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);

  const [occasions, setOccasions] = useState(["Birthday", "Anniversary"]);
  const updateTime = (booked) => dispatch({ time: booked });

  return (
    <>
      <Main>
        <h1>Reserve a Table</h1>
        <Bookingform
          availableTimes={availableTimes}
          occasions={occasions}
          handleSubmit={handleSubmit}
        />
      </Main>
    </>
  );
}

export default ReserveTable;
