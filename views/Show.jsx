const React = require("react");

function Show(props) {
  const { flight } = props;
  const date = flight.departs;
  const departDate = date.toISOString().slice(0, 10);
  const departureTime = date.toISOString().slice(11, 16);

  return (
    <main>
      <nav>
        <a href="/flights"> See all Flights</a>
      </nav>
      <h1>Flight Details</h1>
      Airline: {flight.airline} <br />
      Flight Number: {flight.flightNo} <br />
      Depature: {flight.airport} {departDate} {departureTime} <br />
      Airport: {flight.airport} <br />
      Destination: {flight.destination}
      <ul>
        {flight.destinations.map((destination, i) => {
          const date = destination.arrival;
          const arrivalDate = date.toISOString().slice(0, 10);
          const arrivalTime = date.toISOString().slice(11, 16);
          return (
            <li>
              {destination.airport} {arrivalDate} {arrivalTime}
            </li>
          );
        })}
      </ul>
      <a href={`/flights/destination/${flight.id}`}>Add Destination</a>
    </main>
  );
}

module.exports = Show;
