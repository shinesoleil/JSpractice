'use strict';

/*
  @TODO detail of ArrayObject.sort();
 */

function sortBy(a, b) {
  return a>b ? -1 : 1;
}

var rank_asc = function(collection){
  return collection.sort(sortBy);
};

module.exports = rank_asc;
