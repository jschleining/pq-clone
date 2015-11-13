angular.module('pq-clone')

.service('Items', ['GameConstants', 'Utilities', function(GameConstants, Utilities) {
	var service_ = this;

  service_.getBasicItem = getBasicItem_;
  service_.getPrefixedItem = getPrefixedItem_;
  service_.getSuffixedItem = getSuffixedItem_;
  service_.getSpecialItem = getSpecialItem_;
  service_.getItemModifier = getItemModifier_;

  // TODO (JSchleining): implement luck + level
  function getBasicItem_(_type) {
    if(!_type) {
      _type = 'QUEST_ITEMS_MUNDANE';
      if(Utilities.getRandomInt(1, 100) < 26) {
        _type = 'QUEST_ITEMS_SPECIAL';
      }
    }
    var array = GameConstants[_type];
    var item = array[Math.floor(Math.random() * array.length)];
    var returnItem = {
      target: item.name, 
      rarity: item.modifier
    };
    return returnItem;
  }

  // TODO (JSchleining): how many of these functions could actually be combined?
  function getPrefixedItem_(_type) {
    var mod = service_.getItemModifier('QUEST_ITEM_PREFIXES');
    var item = service_.getBasicItem(_type);
    var returnItem = {
      target: mod.name + ' ' + item.target, 
      rarity: item.rarity + mod.modifier
    };
    return returnItem;
  }

  function getSuffixedItem_(_type) {
    var mod = service_.getItemModifier('QUEST_ITEM_SUFFIXES');
    var item = service_.getBasicItem(_type);
    var returnItem = {
      target: item.target + ' of ' + mod.name, 
      rarity: item.rarity + mod.modifier
    };
    return returnItem;
  }

  function getSpecialItem_(_type) {
    var mod_1 = service_.getItemModifier('QUEST_ITEM_PREFIXES');
    var mod_2 = service_.getItemModifier('QUEST_ITEM_SUFFIXES');
    var item = service_.getBasicItem(_type);
    var returnItem = {
      target: mod_1.name + ' ' + item.target + ' of ' + mod_2.name, 
      rarity: item.rarity + mod_1.modifier + mod_2.modifier
    };
    return returnItem;
  }

  // TODO (JSchleining): how many of these get functions can actually be merged?
  function getItemModifier_(_type) {
    var array = GameConstants[_type];
    var item = array[Math.floor(Math.random() * array.length)];
    var returnItem = {
      name: item.name, 
      modifier: item.modifier
    };
    return returnItem;
  }

}])
