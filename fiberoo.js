function fib() {
  let first = 0;
  let sec = 1;
  let third = 0;
  const array = [];
  array.push(third);
  for (let i = 0; i < 99; i++) {
    sec = first;
    first = third;
    third = first + sec;
    array.push(third);
  }
  return array;
}

console.log(fib());

function numToStrings(data) {
  return _.map(data, function (num) { return num.toString(); });
}

console.log(numToStrings(fib()));

function evenNums(data) {
  const a = _.filter(data, function (num) { return num % 2 === 0; });
  return _.size(a);
}

console.log(evenNums(fib()));
