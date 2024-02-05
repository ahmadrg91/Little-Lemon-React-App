import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

function Bookingform({ availableTimes, occasions, handleSubmit }) {
  const dateObject = new Date();
  const day = dateObject.getDate()/10 > 0 ? dateObject.getDate() : '0' + dateObject.getDate() ;
  const month = (dateObject.getMonth() + 1);
  const year = dateObject.getFullYear();

  const formik = useFormik({
    initialValues: {
      resDate: `${year}-0${month}-0${day}`,
    },
    onSubmit: (values) => {
      handleSubmit();
    },
    validationSchema: Yup.object({
      resDate: Yup.date().required("Please enter the reservation Date").min(`${year}-0${month}-0${day}`, "The date should not be in past"),
        guests: Yup.number().min(1, "The minimum number of guests is 1").max(10, "The maximum number of guests for online reservation is 10"),
    }),
  });

  return (
    <form>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        aria-placeholder="Please enter the date of reservation"
        {...formik.getFieldProps("resDate")}
      />
      <div className="error">{formik.errors.resDate}</div>
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="res-time">
        {availableTimes.map((item, i) => (
          <option>{item}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        aria-placeholder="Please enter the number of guests"
        placeholder="Please enter the number of guests"
        {...formik.getFieldProps("guests")}
      />
      <div className="error">{formik.errors.guests}</div>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        {occasions.map((item, i) => (
          <option>{item}</option>
        ))}
      </select>
      <input
        type="submit"
        value="Make Your reservation"
        disabled={!(formik.dirty && formik.isValid)}
      />
    </form>
  );
}

export default Bookingform;
