let countryList = ["United States", "Canada", "Mexico"];
let genderList = ["male", "female"];
let namesUS_male = ["Albert", "Bill", "Chris", "David", "Edward"];
let namesUS_female = ["Anne", "Bertha", "Catherine"];
let namesCA_male = ["Albert", "Bill", "Pierre"];
let namesCA_female = ["Alberta", "Bertha", "Francine"];
let namesMX_male = ["Alberto", "Bartolo", "Carlos"];
let namesMX_female = ["Ana", "Beatriz", "Carolina"];

// Define birth country
let birthCountry
birthCountry = countryList[Math.floor(Math.random() * countryList.length)];

// Define gender. Not yet "birth gender". I haven't created the module to do being trans.
let gender
gender = genderList[Math.floor(Math.random() * genderList.length)];

// Define name. Fuck it man, maybe this will be "birth name" someday, too.
let name
if (birthCountry == "United States") {
  if (gender == "male") {
    name = namesUS_male[Math.floor(Math.random() * namesUS_male.length)];
  } else {
    name = namesUS_female[Math.floor(Math.random() * namesUS_female.length)];
  }
} else if (birthCountry == "Canada") {
  if (gender == "male") {
    name = namesCA_male[Math.floor(Math.random() * namesCA_male.length)];
  } else {
    name = namesCA_female[Math.floor(Math.random() * namesCA_female.length)];
  }
} else {
  if (gender == "male") {
    name = namesMX_male[Math.floor(Math.random() * namesMX_male.length)];
  } else {
    name = namesMX_female[Math.floor(Math.random() * namesMX_female.length)];
  }
}

// Birthing the child
let age = 0
let alive = true

function randomInteger(integer) {
	return Math.floor(Math.random() * integer);
}
let intelligence = randomInteger(100);
let compassion = randomInteger(100);
let strength = randomInteger(100);


// Initial game messages
console.log("Hello! Welcome to Real Lives.");
console.log("You have been born in " + birthCountry + ".");
console.log("You are " + gender + ".");
console.log("Your parents have named you " + name + ".");
console.log("Intelligence = " + intelligence);
console.log("Compassion = " + compassion);
console.log("Strength = " + strength);

inquirer(questions, function(answers) {
	console.log(answers);
})