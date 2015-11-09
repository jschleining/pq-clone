angular.module('pq-clone')

.service('QuestMonsters', ['GameConstants', function(GameConstants) {
	var service_ = this;
  service_.getQuestMonster = getQuestMonster_;
  service_.getModifier = getModifier_;
  service_.getMonster = getMonster_;
  service_.getRandomInt = getRandomInt_;

  // TODO: Optimize this. I think it can be done better.
  function getQuestMonster_() {
    var monster = ''
    var prefix = ''
    var template = '';
    var rarity = 0;

    if(service_.getRandomInt(1, 100) < 51) {
      var p = service_.getModifier('MONSTER_PREFIXES');
      prefix =  p.name + ' ';
      rarity += p.modifier;
    }

    if(service_.getRandomInt(1, 100) < 26) {
      var t = service_.getModifier('MONSTER_TEMPLATES');
      template =  t.name + ' ';
      rarity += t.modifier;
    }

    monster = service_.getMonster('MONSTER_MANUAL');
    monster.creature = prefix + template + monster.creature;

    return {target: monster, rarity: rarity}
  }

  function getModifier_(_type) {
    var modifiers = GameConstants[_type];
    return modifiers[Math.floor(Math.random() * modifiers.length)];
  }

  // TODO: Change this to _luck and have a switch statement inside. Return an object with item + rarity
  function getMonster_(_type) {
    var items = GameConstants[_type];
    return items[Math.floor(Math.random() * items.length)];
  }

  function getRandomInt_(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}])
