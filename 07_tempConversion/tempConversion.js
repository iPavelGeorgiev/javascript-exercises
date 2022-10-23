const ftoc = function(f) {
  let fahrenheit = parseFloat(f);
  return Number(((fahrenheit - 32) / 1.8).toFixed(1));
};

const ctof = function(c) {
  let celsius = parseFloat(c);
  return Number((celsius * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
