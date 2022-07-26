const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const divide = function (x, y) {
  return x / y;
};

const multiply = function (array) {
  return array.length ? array.reduce((a, b) => a * b) : 0;
};

const calculator = {
  add,
  subtract,
  divide,
  multiply,
};

export default calculator;
