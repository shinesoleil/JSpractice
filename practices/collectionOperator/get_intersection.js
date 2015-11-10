'use strict';

/*
 @todo need a better solution
 */

function get_intersection(collection_a, collection_b) {
  var res = [];

  for(var i=0; i<collection_a.length; i++) {
    for(var j=0; j<collection_b.length; j++) {
      if(collection_a[i] == collection_b[j]) {
        res.push(collection_a[i]);
      }
    }
  }

  return res;
}

module.exports = get_intersection;
