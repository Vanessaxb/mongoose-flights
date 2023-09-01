const express = require("express");
const jsxEngine = require("jsx-view-engine");
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const Flight = require('./models/flight')

//^ App
const app = express();
const PORT = 3000;

//^ app config
app.set("view engine", "jsx"); //set activatws the view engine jsx
app.engine("jsx", jsxEngine());

//^ middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//^ Routes
app.get("/", (req, res) => {
  res.send("Working");
});

/**
 * ^ Index
 * */
app.get('/flights', async (req, res) => {
    try {
        const flights = await Flight.find({}).sort({departs: 'asc'});
        res.render('Index', {allFlights: flights})
    } catch (e) {
        console.log(e);
    }
});

/**
 * ^ Create
 */
app.get('/flights/new', (req, res) => {
    const flight = new Flight();
    const dt = flight.departs;
    const departsDate = dt.toISOString().slice(0,16)
    res.render('New', {departsDate})
});

/**
 * ^ POST
 */

app.post('/flights', async (req, res) => {
    console.log(req.body);
    try {
        const createdFlight = await Flight.create(req.body)
        console.log(createdFlight);
        res.redirect('/flights');
    } catch (error) {
        console.log(error);
    }
})

//^Listening to PORT
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
