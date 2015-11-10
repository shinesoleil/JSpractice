'use strict';

/*
  a better way???
 */

function numberToWord(number) {
  //Ascii code of "a" is 97
  return String.fromCodePoint(number+96);
}

function numberOver26ToWord(number) {
  var result = String();
  for(var a=number; a>0; a=a-26) {
    if(a>26) {
      result+="a";
    }
    else {
      result+=numberToWord(a);
    }
  }
  return result;
}

var number_map_to_word_over_26 = function(collection){
  return collection.map(numberOver26ToWord);
};

module.exports = number_map_to_word_over_26;
