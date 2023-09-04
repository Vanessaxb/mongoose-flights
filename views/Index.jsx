const React = require('react');

function Index({allFlights}) {
    console.log(allFlights);
    const currentTime = new Date
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
                    <div style={{color: `${flight.departs < currentTime ? 'red' : 'black'}` }}>Depature: {flight.departs.toString()}</div>
                    <a href={`/flights/${flight._id}`}>Details</a>
                    <br/>
                    <br/>
                    
                </li>
                
                )
        })}
        </ul>

        </main>
    )
};

module.exports = Index;