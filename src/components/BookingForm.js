import { useState } from "react";

const BookingForm = () => {
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Submit:` +
        "date: " +
        "time: " +
        form.time +
        "guest: " +
        form.guests +
        "occasion: " +
        form.occasion
    );
  };
  return (
    <div className="booking-form">
      <fieldset>
        <form onSubmit={handleSubmit}>
          <div>
            <label for="res-date">Choose date: </label>
            <input
              type="date"
              id="res-date"
              value={form.date}
              onChange={(e) => {
                setForm({
                  ...form,
                  date: e.target.value,
                });
              }}
              required
            />
          </div>
          <div>
            <label for="res-time">Choose time: </label>
            <select
              id="res-time"
              value={form.time}
              onChange={(e) => {
                setForm({
                  ...form,
                  time: e.target.value,
                });
              }}
            >
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
          </div>
          <div>
            <label for="guests">Number of guests: </label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={form.guests}
              onChange={(e) => {
                setForm({
                  ...form,
                  guests: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <label for="occasion">Occasion: </label>
            <select
              id="occasion"
              value={form.occasion}
              onChange={(e) => {
                setForm({
                  ...form,
                  occasion: e.target.value,
                });
              }}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <div>
            <input
              aria-label="On Click"
              type="submit"
              value={"Make Your Reservation"}
            />
          </div>
        </form>
      </fieldset>
    </div>
  );
};
export default BookingForm;
