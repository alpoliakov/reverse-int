module.exports = function reverse (n) {
    if(n < 0) n *= -1;
  let strNum = n + '';
  return +strNum.split('').reverse().join('');
}
