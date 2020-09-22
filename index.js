/*

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/**
 * ### Challenge `getName`
 * Example ✅
 * 
 * @instructions
 * Must return input object's `name` property.
 *
 * Sample data expected output: `Luke Skywalker`
*/
function getName(character) {
  // ⭐️ Example Solution Provided For First Function ⭐️
  return character.name
}




/**
 * ### Challenge `getFilmCount`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Must return the number of elements in the `films` property.
 *
 * Sample data expected output: 5
 */
function getFilmCount(character) {
  return character.films.length;
}





/**
 * ### Challenge `getSecondStarshipName`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Return second starship's name from `starships` property.
 * If length is 0. Return 'none'
*/
function getSecondStarshipName(character) {
  if (character.starships.length === 0) {
    return 'none';
  } else {
    return character.starships[1].name;
  }
}






/**
 * ### Challenge `getSummary`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Combine specified field values and return them in the following string format:
 *    Template: `{name}, {height}cm, {mass}kg. Featured in {film count} films.`
 *    Result: `Luke Skywalker, 172cm, 77kg. Featured in 5 films.`
 */
function getSummary(character) {
  return `${character.name}, ${character.height}cm, ${character.mass}kg. Featured in ${character.films.length} films.`
}







/**
 * ### Challenge `getVehiclesCostInCreditsSumTotal`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Sum the total cost in credits for all vehicles defined on the input character.
 * Sample data expected output: 8000
*/
function getVehiclesCostInCreditsSumTotal(character) {
  const vehicles = character.vehicles;
  return vehicles.reduce((cost, vehicle) => cost + vehicle.cost_in_credits, 0);
}







/**
 * ### Challenge `getStarshipPassengerAndCrewSumTotal`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Sum the number of crew and passenger spots for all starships defined on the
 * input character.
 *
 * Sample data expected output: 27
*/
function getStarshipPassengerAndCrewSumTotal(character) {
  const ships = character.starships;
  const shipSum = [];
  if (ships.length === 0) { //If no ships return 0
    return 0
  } else {
    ships.forEach(ship => shipSum.push(ship.passengers + ship.crew));
    return shipSum.reduce((total, acc) => total + acc);
  }
}








/**
 * ### Challenge `getNthFilm`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Return the Nth `films` value (in this case title).
 * Rules: filmNumber starts at 1 and refers to the *first* film, and includes only the range 1-3.
 * Any numbers outside that range should throw an error.
 * The Error must mention the name of your favorite _extra cheesy_ movie.
 *
 * Given film #1, expected output: `A New Hope`
 * Given film #7, expected error: `There are only 3 Star Wars movies. Flan fiction excluded.`
*/
function getNthFilm(character, filmNumber) {
  if((filmNumber > 3) || (filmNumber === 0)) {
    return 'Only the original trilogy exists! Do not concern yourself with matters of the dark side...'
  } else {
    return character.films[filmNumber - 1]; //decrement filmNumber to match array indexing
  }
}









/**
 * ### Challenge `getCargoCapacityTotal`
 * Stretch Goal 💪
 * 
 * @instructions
 * Sum the total cargo capacity for *all* vehicles and starships.
 * Some objects may not have a value for their cargo capacity.
 *
 * Sample data expected output: 80124
*/
function getCargoCapacityTotal(character) {
  const ships = character.starships;
  const vehicles = character.vehicles;
  let totalCapacity = 0;

  ships.forEach(ship => {
    if (ship.cargo_capacity === null) {
      totalCapacity += 0;
    } else {
      totalCapacity += parseInt(ship.cargo_capacity);
    }
  });

  vehicles.forEach(ship => {
    if (ship.cargo_capacity === null) {
      totalCapacity += 0;
    } else {
      totalCapacity += parseInt(ship.cargo_capacity);
    }
  });

  return totalCapacity;
}







/**
 * ### Challenge `getFastestStarshipName`
 * Stretch Goal 💪
 * 
 * @instructions
 * Find the fastest starship (by atmospheric speed.)
 * Determine the correct field to compare, and return the name of the fastest.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `X-wing`
*/
function getFastestStarshipName(character) {
  let currFastestShip = "";
  const starships = character.starships;
  if (starships.length !== 0) {
    starships.reduce((previousShip, currShip) => {
     if (parseInt(previousShip.max_atmosphering_speed) > parseInt(currShip.max_atmosphering_speed)) {
        currFastestShip = previousShip.name;
     } else {
        currFastestShip = currShip.name
     } 
    });
    return currFastestShip;
  } else {
    return 'none';
  }
}





/**
 * ### Challenge `getLargestCargoStarshipModelName`
 * Stretch Goal 💪
 * 
 * @instructions
 * Determine the starship with the largest cargo capacity.
 * Return it's **_model_** property.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `Lambda-class T-4a shuttle`
*/
function getLargestCargoStarshipModelName(character) {
  const ships = character.starships;
  return ships.filter((prevShip, nextShip) => (parseInt(nextShip.cargo_capacity) > parseInt(prevShip.cargo_capacity) ? prevShip.model : 'none'));
}






/**
 * ### Challenge `getSlowestVehicleOrStarshipName`
 *Stretch Goal 💪
 *
 * @instructions
 * Find the slowest transport (including vehicles and starships)
 * based on `max_atmosphering_speed`, and return its name.
 * If the character does not have any starships or vehicles, then return string 'none'.
 *
*/
function getSlowestVehicleOrStarshipName(character) {
  let currSlowestShip = "";
  let startSpeed = 0;
  const starships = character.starships;
  if (starships.length !== 0) {
    starships.reduce((previousShip, currShip) => {
      startSpeed = parseInt(previousShip.max_atmosphering_speed);
     if (parseInt(previousShip.max_atmosphering_speed) < parseInt(currShip.max_atmosphering_speed)) {
        currSlowestShip = previousShip.name;
     } else {
        currSlowestShip = currShip.name;
     } 
    }, startSpeed);
    return currSlowestShip;
  } else {
    return 'none';
  }
}





/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
// DO NOT CHANGE ANYTHING BELOW THIS LINE //
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (getName) { module.exports.getName = getName }
  if (getFilmCount) { module.exports.getFilmCount = getFilmCount }
  if (getSecondStarshipName) { module.exports.getSecondStarshipName = getSecondStarshipName }
  if (getSummary) { module.exports.getSummary = getSummary }
  if (getVehiclesCostInCreditsSumTotal) { module.exports.getVehiclesCostInCreditsSumTotal = getVehiclesCostInCreditsSumTotal }
  if (getStarshipPassengerAndCrewSumTotal) { module.exports.getStarshipPassengerAndCrewSumTotal = getStarshipPassengerAndCrewSumTotal }
  if (getNthFilm) { module.exports.getNthFilm = getNthFilm }
  if (getCargoCapacityTotal) { module.exports.getCargoCapacityTotal = getCargoCapacityTotal }
  if (getFastestStarshipName) { module.exports.getFastestStarshipName = getFastestStarshipName }
  if (getLargestCargoStarshipModelName) { module.exports.getLargestCargoStarshipModelName = getLargestCargoStarshipModelName }
  if (getSlowestVehicleOrStarshipName) { module.exports.getSlowestVehicleOrStarshipName = getSlowestVehicleOrStarshipName }
}
