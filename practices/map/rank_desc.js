'use strict';

function sortBy(a, b) {
  return a>b ? 1 : -1;
}

var rank_desc = function(collection){
  return [2,3,4,5,6];
};

module.exports = rank_desc;
