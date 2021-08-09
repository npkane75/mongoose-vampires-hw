// 1. Require Mongoose
const mongoose = require('mongoose');

// 2. Require your Model
const Vampire = require('./models/vampire.js');

// 3. Require your extra data source
const vampData = require('./models/populateVampires.js')

// 4. Connect your database
// const db = require('models/db.js') 
const connectionString = 'mongodb://localhost:27017/vampiresdb';

// Fire off the connection to Mongo DB
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});
// Database & Models

/* Variables */
// const app = express(); // Creating an instance of an express app
// const port = 4000;
// const rowdyResults = rowdy.begin(app)

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.insertMany(vampData, (err, data) => {
//     if (err) return console.log(err);
//     console.log(data)
   
// })
// ### Add some new vampire data
// Vampire.create(vampData , (err, createdVampires)=>{

// })
/////////////////////////////////////////////////
// ## QUERYING
Vampire.find({}, (err, allVampires) => {
  if (err) return console.log(err);
  console.log(allVampires)
})

/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
