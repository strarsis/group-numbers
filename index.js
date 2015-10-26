var arrGroup = require('arr-group');

var groupNumbers = function(numbers, returnSingleElements) {
  return arrGroup(
    numbers.sort(sortNumbers),
    isNextNumber,
    returnSingleElements
  );
};

var sortNumbers = function(a,b) {
  return a - b;
};
var isNextNumber = function(current, previous) {
  return current == (previous+1);
};

module.exports = groupNumbers;
