import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import ReserveTable from "./Components/ReserveTable";
import Header from "./Components/Header";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/reserve-a-table" element={<ReserveTable />}></Route>
      </Routes>
    </>
  );
}

export default App;
