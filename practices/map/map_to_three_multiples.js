'use strict';
/*
  done
 */

function multiplyBy3(number) {
  return number*3;
}

var map_to_three_multiples = function(collections){
  return collections.map(multiplyBy3);
};

module.exports = map_to_three_multiples;
