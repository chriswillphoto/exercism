const findPrime = function(num) {
  if (num <= 1 || num === false) {
    return [];
  }

  let i = 2;
  while (num % i !== 0) {
    i++;
  }

  let factors = [];
  factors.push(i);
  furtherFactors = findPrime(num / i);

  if (furtherFactors.length > 0) {
    factors = [...factors, ...furtherFactors];
  }

  return factors;
};

const primeFactors = {
  for: findPrime
};

module.exports = primeFactors;
