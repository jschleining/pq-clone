angular.module('pq-clone')

.service('Names', function() {
	var service_ = this;
  service_.getName = getName_;
  service_.getRandomInt = getRandomInt_;

  service_.GenerateName = GenerateName_;
  service_.Pick = Pick_;
  

  service_.nameParts = [
    ['br', 'cr', 'dr', 'fr', 'gr', 'j', 'kr', 'l', 'm', 'n', 'pr', 'r', 'sh', 'tr', 'v', 'wh', 'x', 'y', 'z', '', '', '', ''],
    ['a', 'a', 'e', 'e', 'i', 'i', 'o', 'o', 'u', 'u', 'ae', 'ei', 'oo', 'ou'],
    ['b', 'ck', 'd', 'g', 'k', 'm', 'n', 'p', 't', 'v', 'x', 'z']
  ];

  function getName_() {
    var result = '';
    var length = service_.getRandomInt(4, 7);

    for (var i = 0; i < length; i++) {
      var j = service_.getRandomInt(0, 2);

      result += service_.nameParts[j][service_.getRandomInt(0, service_.nameParts[j].length - 1)];
    }

    return result;
  }

  function getRandomInt_(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }




  service_.KParts =  [
                  'br|cr|dr|fr|gr|j|kr|l|m|n|pr||||r|sh|tr|v|wh|x|y|z'.split('|'),
                  'a|a|e|e|i|i|o|o|u|u|ae|ie|oo|ou'.split('|'),
                  'b|ck|d|g|k|m|n|p|t|v|x|z'.split('|')
                ];

  function GenerateName_() {
  var result = '';
  for (var i = 0; i <= 5; ++i) {
    result += service_.Pick(service_.KParts[i % 3]);
  }
  return result.charAt(0).toUpperCase() + result.slice(1);
  }

  function Pick_(a) {
    //return a[Random(a.length)];
    return a[service_.getRandomInt(0, a.length - 1)];
  }


/*
var KParts = [
  'br|cr|dr|fr|gr|j|kr|l|m|n|pr||||r|sh|tr|v|wh|x|y|z'.split('|'),
  'a|a|e|e|i|i|o|o|u|u|ae|ie|oo|ou'.split('|'),
  'b|ck|d|g|k|m|n|p|t|v|x|z'.split('|')];

function GenerateName() {
  var result = '';
  for (var i = 0; i <= 5; ++i)
    result += Pick(KParts[i % 3]);
  return result.charAt(0).toUpperCase() + result.slice(1);
}

function Pick(a) {
  return a[Random(a.length)];
}
*/


})  


