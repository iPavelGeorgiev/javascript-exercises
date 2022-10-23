const repeatString = function(str, num) {
  if (str === "" || num === 0) return "";
  if (num < 0) return "ERROR";

  let output = "";

  for (let i = 1; i <= num; i++) {
    output += str;
  }

  return output;
};

// Do not edit below this line
module.exports = repeatString;
