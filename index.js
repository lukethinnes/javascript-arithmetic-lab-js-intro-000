function add(a, b) {
  var x = a+=b;
  return(x);
}

function subtract(a, b) {
  var x = a-=b;
  return(x);
}

function multiply(a, b) {
  var x = a*=b;
  return (x);
}

function divide(a, b) {
  var x = a/=b;
  return (x);
}

function increment(n) {
  var x = n++;
  return (x);
}

function decrement(n) {
  var x = n--;
  return (x);
}

function makeInt(string) {
  parseInt('string', 10);
  return parseInt();
}

function preserveDecimal(string) {
  parseFloat('string');
  return parseFloat();
}
