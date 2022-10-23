const palindromes = function (w) {
  const word = w.toLowerCase().replace(/[^a-zA-Z]+/g, "");
  const wordReversed = word.split("").reverse().join("");
  return word === wordReversed;
};

// Do not edit below this line
module.exports = palindromes;
