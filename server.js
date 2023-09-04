const express = require("express");
const jsxEngine = require("jsx-view-engine");
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const Flight = require("./models/flight");

//^ App
const app = express();
const PORT = 3000;

//^ app config
app.set("view engine", "jsx"); //set activatws the view engine jsx
app.engine("jsx", jsxEngine());

//^ middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//^ Routes
app.get("/", (req, res) => {
  res.send("Working");
});

/**
 * ^ Index
 * */
app.get("/flights", async (req, res) => {
  try {
    const flights = await Flight.find({}).sort({ departs: "asc" });
    res.render("Index", { allFlights: flights });
  } catch (e) {
    console.log(e);
  }
});

/**
 * ^ New
 */
app.get("/flights/new", (req, res) => {
  const flight = new Flight();
  //obtains default date
  const dt = flight.departs;
  //Format the date for the value of input
  const departsDate = dt.toISOString().slice(0, 16);
  res.render("New", { departsDate });
});

/**
 * ^ POST
 */

app.post("/flights", async (req, res) => {
  console.log(req.body);
  try {
    const createdFlight = await Flight.create(req.body);
    console.log(createdFlight);
    res.redirect("/flights");
  } catch (error) {
    console.log(error);
  }
});

/**
 * ^ Show
 */
app.get("/flights/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const flight = await Flight.findById(id);
    res.render("Show", {
      flight: flight,
    });
  } catch (e) {
    console.log(e);
  }
});

app.post("/flights/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  try {
    const flightToUpdate = await Flight.findById(id).sort({ destinations: "asc"});
    // Push the new destination to the destinations array
    flightToUpdate.destinations.push(req.body);
     // Update the flight in the database
    const updatedFlight = await Flight.findByIdAndUpdate(id, flightToUpdate, {
      new: true,
      //! ascendind not working
    }).sort({ 'arrival': "asc"});
    // Redirect to the show page for the updated flight
    res.redirect(`/flights/${updatedFlight.id}`);
  } catch (error) {
    console.log(error);
  }
});

app.get("/flights/destination/:id", async (req, res) => {
  const { id } = req.params;
  const flight = await Flight.findById(id);
  res.render("Destination", {
    flight: flight,
  });
});

//^Listening to PORT
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
