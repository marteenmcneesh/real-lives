let countryList = ["United States", "Canada", "Mexico"];
let genderList = ["male", "female"];
let namesUS_male = ["Albert", "Bill", "Chris", "David", "Edward"];
let namesUS_female = ["Anne", "Bertha", "Catherine"];
let namesCA_male = ["Albert", "Bill", "Pierre"];
let namesCA_female = ["Alberta", "Bertha", "Francine"];
let namesMX_male = ["Alberto", "Bartolo", "Carlos"];
let namesMX_female = ["Ana", "Beatriz", "Carolina"];

// Define birth country
let birthCountry = countryList[Math.floor(Math.random() * countryList.length)];

// Define gender. Not yet "birth gender". I haven't created the module to do being trans.
let gender = genderList[Math.floor(Math.random() * genderList.length)];

// Define name. Fuck it man, maybe this will be "birth name" someday, too.
let name;
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
let age = 0;
let alive = true;

function randomInteger(integer) {
	return Math.floor(Math.random() * integer);
}
let intelligence = randomInteger(100);
let compassion = randomInteger(100);
let strength = randomInteger(100);

let nicl = require("nicl");
function helpContent() {
  nicl.printLine("\nWelcome to the in-game help. The following is a list of commands you can use in Real Lives.");
  nicl.printLine("age ----------- Ages your character by one year.");
  nicl.printLine("kill self ----- Kills your character.");
  nicl.printLine("find job ------ Your character finds a job.");
  nicl.printLine("job ----------- Tells you what your current job is.");
  nicl.printLine("stats --------- Lists your stats and attributes.");
}

let job = "unemployed";

function findAJob() {
  unemploymentChance = randomInteger(100);
  if (unemploymentChance < 10) {
    nicl.printLine("You were not able to find a job.");
    askCommand();
  } else {
    if (intelligence < 20) {
      job = "janitor";
      nicl.printLine("You are stupid, so you've been hired as a janitor. Enjoy the shit.");
    } else if (20 <= intelligence < 40) {
      job = "insurance salesperson";
      nicl.printLine("You didn\'t pay enough attention in school, so you've been hired as a mere insurance salesperson.");
    } else if (40 <= intelligence < 60) {
      job = "customer success associate";
      nicl.printLine("You have some brains, but not enough, so you're going to be working glorified customer service as a customer success associate.")
    } else {
      job = "programmer";
      nicl.printLine("You are \"smart\" so you get a job as a programmer, making awful games like this.");
    }
  }
}

function goToWork() {
  
}

function ageAYear() {
  age +=1;
  goToWork();
}

function main() {
  nicl.printLine("All messages using nicl begin here.");
  nicl.printLine("Hello! Welcome to Real Lives.");
  nicl.printLine("You have been born in " + birthCountry + ".");
  nicl.printLine("You are " + gender + ".");
  nicl.printLine("Your parents have named you " + name + ".");
  function showStats() {
  nicl.printLine("Intelligence = " + intelligence);
  nicl.printLine("Compassion = " + compassion);
  nicl.printLine("Strength = " + strength);
  }
  showStats();

  function askCommand() {
    nicl.printLine("\nWhat would you like to do next? Type \"help\" for a list of commands.");
    let command = nicl.readLine();
    if (command === "help") {
      helpContent();
      askCommand();
    } else if (command === "age") {
      age +=1;
      nicl.printLine("You are now " + age + " years old.");
      askCommand();
    } else if (command === "kill self") {
      alive = false;
      nicl.printLine("You just killed yourself. Game over!");
      nicl.printLine("Type \"exit\" to exit.");
    } else if (command === "find job") {
      findAJob();
      askCommand();
    } else if (command === "job") {
      nicl.printLine("You work as a " + job + ".");
      askCommand();
    } else if (command === "stats") {
      showStats();
      askCommand();
    } else {
      nicl.printLine("Invalid command, try again.");
      askCommand();
    }
  }

  nicl.run(askCommand);
}

nicl.run(main);