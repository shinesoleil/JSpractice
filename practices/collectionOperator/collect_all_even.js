'use strict';

/*
 @todo understand usage of for.. in..
 */

function collect_all_even(collection) {
  var res = [];

  for(var a in collection) {
    if(collection[a]%2 == 0) {
      res.push(collection[a]);
    }
  }

  return res;
}

module.exports = collect_all_even;
