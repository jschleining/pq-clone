angular.module('pq-clone')

.service('Names', ['Utilities', 'GameConstants', function(Utilities, GameConstants) {
	var service_ = this;
  service_.getName = getName_;

  /*
  * Return a randomly generated name.
  * TODO: Clean this up later. I'd like to have something that generates more coherent names.
  */
  function getName_() {
    var result = '';
    var length = Utilities.getRandomInt(4, 7);

    for (var i = 0; i < length; i++) {
      var row = GameConstants.NAME_PARTS[i % GameConstants.NAME_PARTS.length];
      result += row[Utilities.getRandomInt(0, row.length - 1)];
    }
    return Utilities.capitalize(result);
  }
}])  


