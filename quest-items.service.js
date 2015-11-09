angular.module('pq-clone')

.service('QuestItems', ['GameConstants', function(GameConstants) {
	var service_ = this;
  service_.getQuestItem = getQuestItem_;
  service_.getModifier = getModifier_;
  service_.getItem = getItem_;
  service_.getRandomInt = getRandomInt_;

  // TODO: Optimize this. I think it can be done better.
  function getQuestItem_() {
    var item = ''
    var prefix = ''
    var suffix = '';
    var rarity = 0;

    if(service_.getRandomInt(1, 100) < 51) {
      prefix = service_.getModifier('QUEST_ITEM_PREFIXES') + ' ';
      rarity += 2;
    }

    if(service_.getRandomInt(1, 100) < 51) {
      suffix = ' of ' + service_.getModifier('QUEST_ITEM_SUFFIXES');
      rarity += 2;
    }

    if(service_.getRandomInt(1, 100) < 26) {
      item = service_.getItem('QUEST_ITEMS_SPECIAL');
      rarity += 1;
    } else {
      item = service_.getItem('QUEST_ITEMS_MUNDANE');
    }
    
    item = prefix + item + suffix;

    return {target: item, rarity: rarity};
  }

  function getModifier_(_type) {
    var modifiers = GameConstants[_type];
    return modifiers[Math.floor(Math.random() * modifiers.length)];
  }

  // TODO: Change this to _luck and have a switch statement inside. Return an object with item + rarity
  function getItem_(_type) {
    var items = GameConstants[_type];
    return items[Math.floor(Math.random() * items.length)];
  }

  function getRandomInt_(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}])
