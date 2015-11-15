angular.module('pq-clone')

.factory('Character', ['GameConstants', 'Utilities','Names', function(GameConstants, Utilities, Names) {
  var Character = function() {
    this.name = Names.getName();
    //this.level = 1;
    this.level = Utilities.getRandomInt(1, 15);
    this.xp = 0;
    this.xpToNext = 0;
    this.race = GameConstants.CHARACTER_RACES[Math.floor(Math.random() * GameConstants.CHARACTER_RACES.length)];
    this.class = GameConstants.CHARACTER_CLASSES[Math.floor(Math.random() * GameConstants.CHARACTER_CLASSES.length)];
    this.init.call(this);
  }
  Character.prototype = {
    init: function() {
      this.xpToNext = this.getXPToNextLevel();
    },
    getXPToNextLevel: function() {
      return ((this.level + 1) * 1.5) * 1000;
    },
    checkForLevelUp: function() {
      if (this.xp >= this.xpToNext) {
        this.levelUp();
      }
    },
    levelUp: function() {
      this.level++;
      this.xpToNext = this.getXPToNextLevel();
    },
    AddXP: function(_xp) {
      this.xp += _xp;
      this.checkForLevelUp();
    },
    GetName: function() { return this.name; },
    GetLevel: function() { return this.level; },
    GetXP: function() { return this.xp; },
    GetXPToNext: function() { return this.xpToNext; },
    GetRace: function() { return this.race; },
    GetClass: function() { return this.class; }
  };
  return Character;
}])
