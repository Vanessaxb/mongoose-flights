const React = require('react');


function Destination({flight}) {
    return(
        <main>
           <nav>
            <a href="/flights"> See all Flights</a>
          </nav>
          <h1>Add Destination</h1>
            <form action={`/flights/${flight.id}`} method='POST'>
                <select name='airport' required>
                   Destination <option value=''>Select Destination</option>
                    <option value="AUS">AUS</option>
                    <option value='DAL'>DAL</option>
                    <option value='LAX'>LAX</option>
                    <option value='SAN'>SAN</option>
                    <option value='SEA'>SEA</option>
                </select>
                <br/>
                Arrival Date/Time: <input type='datetime-local' name='arrival' required/>
                <br/>
                <input type='submit' value='Add Destination'/>
            </form>
        </main>
    );
}

module.exports= Destination;