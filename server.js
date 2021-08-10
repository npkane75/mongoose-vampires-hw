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

// const newVampire = {
// name: "blade",
// hair_color: "black",
// eye_color: "steel gray",
// dob: 1968,
// loves: ['killing vampires', 'Being a daywalker', 'martial arts', 'sword fighting'],
// location: 'New York, NY',
// gender: 'male', 
// victims: 2000 
// }

// Vampire.create(newVampire, (err, createdVampires) => {
// 	if (err) {
// 		//if there's an error, log it
// 		console.log(err);
// 	} else {
// 		// otherwise log out the createdArticle
// 		console.log(createdVampires);
// 	}
// });



// const newVampire2 = {
//   name: "Deacon Frost",
//   hair_color: "blonde",
//   eye_color: "blood red",
//   dob: 1950,
//   loves: ['killing humans', 'feeding on humans ', 'destroying the current vampire order'],
//   location: 'New York, NY',
//   gender: 'male', 
//   victims: 5000 
//   }




// Vampire.create(newVampire2, (err, createdVampires) => {
// 	if (err) {
// 		//if there's an error, log it
// 		console.log(err);
// 	} else {
// 		// otherwise log out the createdArticle
// 		console.log(createdVampires);
// 	}
// });


// const newVampire3 = {
//   name: "Selene",
//   hair_color: "black",
//   eye_color: "sky blue",
//   dob: 1150,
//   loves: ['killing lycans', ' feeding on humans', 'martial arts', 'sword fighting'],
//   location: 'New York, NY',
//   gender: 'female', 
//   victims: 2000, 
//   }

//   Vampire.create(newVampire3, (err, createdVampires) => {
//     if (err) {
//       //if there's an error, log it
//       console.log(err);
//     } else {
//       // otherwise log out the createdArticle
//       console.log(createdVampires);
//     }
//   });

//   const newVampire4 = {
//     name: "Marcus Covinus",
//     hair_color: "silver",
//     eye_color: "steel gray",
//     dob: 850,
//     loves: ['killing lycans', ' feeding on humans', 'ruling the coven', 'horse back riding'],
//     location: 'Romania',
//     gender: 'male', 
//     victims: 10000,
//     }

//   Vampire.create(newVampire4, (err, createdVampires) => {
//     if (err) {
//       //if there's an error, log it
//       console.log(err);
//     } else {
//       // otherwise log out the createdArticle
//       console.log(createdVampires);
//     }
//   });
  
  
/////////////////////////////////////////////////
// ## QUERYING
//
/////////////////////////////////////////////////
// ### Select by comparison



/////////////////////////////////////////////////
// ### Select by exists or does not exist
// Vampire.find({title: {$exists: true}}, (err, foundVamps) =>{
//   if (err) return console.log(err),
//   console.log(foundVamps)
//   });
/////////////////////////////////////////////////
// ### Select with OR
// Vampire.find({ $or: [{ name: "Selene" }, { location: "Los Angeles" }]} (err, foundVamp) => {
//   if (err)
//     console.log(err)
//   };
//   else {
//     console.log(foundVamp),
//   }
// });
/////////////////////////////////////////////////
//### Select objects that match one of several values
// Vampire.find({location:'New York', loves: 'sword fighting'}, (err, foundVamps) => {
//     if (err) return console.log(err);
//     console.log(foundVamps)
//   })
  
/////////////////////////////////////////////////
//### Negative Selection

// Vampire.find({location: {$not:'New York'}},  (err, foundVamp) =>{
//   if (err){
//     return(err)
//   } else {
//     console.log(foundVamp)
//   }
// });
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE
// Vampire.findOneAndReplace(
//   {name:"Blade"},
// {name: "Eric Brooks",
// location: 'Los Angeles, CA'},
// (err, repResult) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(repResult);
//   }
// });




/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE
// Vampire.updateOne({ name: 'Eric Brooks' }, (err, updateResult) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(updateResult);
//   }
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE
// Vampire.deleteOne({ name: 'Deacon Frost' }, (err, removeVamp) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(removeVamp);
//   }
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
