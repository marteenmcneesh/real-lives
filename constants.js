//let countryList = ["United States", "Canada", "Mexico"];
let genderList = ["male", "female", "Seth"];
let namesUS_male = ["Albert", "Bill", "Chris", "David", "Edward"];
let namesUS_female = ["Anne", "Bertha", "Catherine"];
let namesCA_male = ["Albert", "Bill", "Pierre"];
let namesCA_female = ["Alberta", "Bertha", "Francine"];
let namesMX_male = ["Alberto", "Bartolo", "Carlos"];
let namesMX_female = ["Ana", "Beatriz", "Carolina"];

// This is a constructor function that creates an object for each country plus attributes, and each country is expressed with its two-letter code
function country(name, healthiness, demonym, maleNames, femaleNames) {
  this.name = name;
  this.healthiness = healthiness;
  this.demonym = demonym;
  this.maleNames = maleNames;
  this.femaleNames = femaleNames;
}

let countryList = {}

countryList.US = new country("United States", 7, "American", namesUS_male, namesUS_female);
countryList.CA = new country("Canada", 9, "Canadian", namesCA_male, namesCA_female);
countryList.MX = new country("Mexico", 5, "Mexican", namesMX_male, namesMX_female);

// This exports the list of countries in the game to other modules
module.exports = countryList


/*let US = {
  name: "United States",
  healthiness: 7, //Each country gets a value 0-9
}

let CA = {
  name: "Canada",
  healthiness: 9,
}*/