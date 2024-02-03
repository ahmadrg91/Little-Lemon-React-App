import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import ReserveTable from "./Components/ReserveTable";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import ConfirmedBooking from "./Components/ConfirmedBooking";

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/reserve-a-table" element={<ReserveTable />}></Route>
        <Route path="/bookingconfirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
    </>
  );
}

export default App;
