import Bookingform from "./Bookingform";
import { useState, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import Main from "./Main";

function ReserveTable() {
  const navigate = useNavigate();
  let [isModal, setIsModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [numberOfGuests, setNumberOfGuests] = useState(null);

  const handleSubmit = (values) => {
    console.log(values);
    setSelectedDate(values.resDate);
    setSelectedTime(values.resTime);
    setNumberOfGuests(values.guests);
    setIsModal(true);
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
      <main id='reserve-table'>
        <div className="modal-background" style={{ display: isModal ? 'flex' : 'none'}}>
          <div>
            <div>
              <h1>LITTLE LEMON</h1>
              <h2>Online Table Reservation <br/> <center>Confirmed!</center></h2>
            </div>
            <div>
              <h3>Number of Guests: {numberOfGuests}</h3>
              <h3>Date of Reservation: {selectedDate}</h3>
              <h3>Time: {selectedTime}</h3>
              <h3>Location: Chicago</h3>
            </div>
          <Link to="/"><button>Return to Home</button></Link>
          </div>
        </div>
        <h1 style={{color: 'black'}}>Reserve a Table</h1>
        <Bookingform
          availableTimes={availableTimes}
          occasions={occasions}
          handleSubmit={handleSubmit}
        />
      </main>
    </>
  );
}

export default ReserveTable;
