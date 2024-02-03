function Bookingform({ availableTimes, occasions, handleSubmit}) {

  return (

    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        aria-placeholder="Please enter the date of reservation"
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="res-time">
        {availableTimes.map((item, i) => (
          <option>{item}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        min="1"
        max="10"
        id="guests"
        aria-placeholder="Please enter the number of guests"
        placeholder="Please enter the number of guests"
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        {occasions.map((item, i) => (
          <option>{item}</option>
        ))}
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default Bookingform;
