'use strict';

/*
 @todo filter() calls a provided callback function once for each element in an array,
 @todo and constructs a new array of all the values for which callback returns a true value or a value that coerces to true.
 */

function isEven(value) {
  if(value%2 ==0) {
    return value;
  }
}

function choose_even(collection) {
  return collection.filter(isEven);
}

module.exports = choose_even;
