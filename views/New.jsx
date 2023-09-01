const React = require('react');

function New({departsDate}) {
    return (
    <main>
        <nav>
            <a href='/flights'> See all Flights</a>
        </nav>
    <h1> Add New Flight</h1>

    <form action='/flights' method="POST">
       <select name='airline'>
        <option value=''>Airline</option> 
        <option value='American'>American</option> 
        <option value='Southwest'>Southwest</option>
        <option value='United'>United</option>
       </select>
        <input name='flightNo' type='number' min='10' max='9999' />
        <input type="datetime-local"/>
       
       <input type='submit'/>

    </form>

    </main>
    )
}

module.exports = New;