'use strict';

/*
  a better way???
 */

function numberToWord(number) {
  //Ascii code of "a" is 97
  return String.fromCodePoint(number+96);
}

var number_map_to_word = function(collection){
  return collection.map(numberToWord);
};

module.exports = number_map_to_word;
