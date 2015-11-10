'use strict';

/*
  done
 */

function multipleBy2AddBy1(number) {
  return number*2+1;
}

var map_to_four_multiples_add_one = function(collection){
  return collection.map(multipleBy2AddBy1);
};

var collection = [1,2,3,4,5];
console.log(map_to_four_multiples_add_one(collection));

module.exports = map_to_four_multiples_add_one;
