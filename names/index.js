const nameList = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");
const getPeopleInCity = (nameList) => {
  return getFirstNames(nameList);
};
module.exports = getPeopleInCity;
