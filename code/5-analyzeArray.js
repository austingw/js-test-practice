function getSum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function findMin(arr) {
  arr.sort();
  return arr[0];
}

function findMax(arr) {
  const max = arr.reduce(function (a, b) {
    return Math.max(a, b);
  }, -Infinity);
  return max;
}

function analyze(arr) {
  const object = {
    average: getSum(arr) / arr.length,
    min: findMin(arr),
    max: findMax(arr),
    length: arr.length,
  };
  return object;
}

export default analyze;
