const React = require("react");

function New({ departsDate }) {
  return (
    <main>
      <nav>
        <a href="/flights"> See all Flights</a>
      </nav>
      <h1> Add New Flight</h1>

      <form action="/flights" method="POST">
        <select name="airline">
          <option value="">Airline</option>
          <option value="American">American</option>
          <option value="Southwest">Southwest</option>
          <option value="United">United</option>
        </select>
        <br />
        <select name="aiports">
          <option value="">Airports</option>
          <option value="AUS">AUS</option>
          <option value="DAL">DAL</option>
          <option value="LAX">LAX</option>
          <option value="SAN">SAN</option>
          <option value="SEA">SEA</option>
        </select>
        Flight# <input name="flightNo" type="number" min="10" max="9999" />
        <br />
        Departure Date/Time:{" "}
        <input type="datetime-local" defaultValue={departsDate} />
        <br />
        <input type="submit" />
      </form>
    </main>
  );
}

module.exports = New;
