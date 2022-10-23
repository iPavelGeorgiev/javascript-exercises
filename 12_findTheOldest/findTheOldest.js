const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (people) {
  return people.reduce((accu, curr) => {
    const currYear = new Date().getFullYear();
    const prevPersonAge = (accu.yearOfDeath || currYear) - accu.yearOfBirth;
    const currPersonAge = (curr.yearOfDeath || currYear) - curr.yearOfBirth;

    if (prevPersonAge < currPersonAge) {
      return curr;
    }

    return accu;
  })
};

// Do not edit below this line
module.exports = findTheOldest;
