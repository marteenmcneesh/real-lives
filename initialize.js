// This imports the list of countries in the game from constants.js
const countryList = require(./constants.js);

//Function to generate random integers
function randomInteger(integer) {
  return Math.floor(Math.random() * integer);
}


// Continue writing the constructor function for the player, using the initializing keys that are below this section.
function player(birthCountry, firstName, lastName) {
  this.birthCountry = birthCountry;
  this.firstName = firstName;
  this.lastName = lastName;
}


//Initializing a player object
let player = {
  //Birth attributes
  birthCountry: generateCountry(),
  birthFirstName: generateFirstName(),
  birthLastName: generateLastName(),
  birthGender: generateGender(),
  //General attributes -- accounts for immigration, name changes, etc
  country: //inherits from birthCountry at birth
  firstName: //inherits from birthFirstName at birth
  lastName: //inherits from birthLastName at birth
  gender: //inherits from birthGender at birth
  //Life attributes
  age: 0,
  alive: true,
  //Personality attributes -- these will need to change over time
  intelligence: randomInteger(100),
  compassion: randomInteger(100),
  strength: randomInteger(100),
  //Health attributes
  health: generateHealth(), // birth health is dependent on birthCountry
}