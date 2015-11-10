'use strict';

function isMultipleOfThree(value) {
  if(value%3 == 0) {
    return value;
  }
}

function choose_multiples_of_three(collection) {
  return collection.filter(isMultipleOfThree);
}

module.exports = choose_multiples_of_three;
