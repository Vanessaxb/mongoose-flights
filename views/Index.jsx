const React = require('react');

function Index({allFlights}) {
    console.log(allFlights);
    return (
        <main>
            <nav>
                <a href='/flights/new'> Add New Flight</a>
            </nav>
        <h1>All Flights</h1>
        <ul>
        {allFlights.map((flight, i) => {
            return (
                <li key={flight._id}>
                    Airline: {flight.airline} <br/> 
                    Flight Number: {flight.flightNo} <br/> 
                    Departure Time: {flight.departs.toString()} style=
                    <br/>
                    {/* style={{color: `${fruit.readyToEat ? 'green' : 'red'}` }} */}
                </li>
                
                )
        })}
        </ul>

        </main>
    )
};

module.exports = Index;