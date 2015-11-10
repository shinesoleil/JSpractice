'use strict';

/*
 @todo http://stackoverflow.com/questions/3216013/get-the-last-item-in-an-array says it's the best answer in terms of overall performance.
 @todo WHY???
 */

function collect_last_element(collection) {
  return collection[collection.length-1];
}

module.exports = collect_last_element;
