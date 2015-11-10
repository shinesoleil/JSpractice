'use strict';
/*
  done
 */
function mulptilplyBy2(number) {
  return number*2;
}

function map_to_even(collection){
  return collection.map(mulptilplyBy2);
}

module.exports = map_to_even;
