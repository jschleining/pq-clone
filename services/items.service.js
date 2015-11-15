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
    var asset = array[Math.floor(Math.random() * array.length)];
    var returnAsset = {
      target: asset.name, 
      rarity: asset.modifier
    };
    return returnAsset;
  }

  // TODO (JSchleining): how many of these functions could actually be combined?
  function getPrefixedItem_(_type) {
    var mod = service_.getItemModifier('QUEST_ITEM_PREFIXES');
    var asset = service_.getBasicItem(_type);
    var returnAsset = {
      target: mod.name + ' ' + asset.target, 
      rarity: asset.rarity + mod.modifier
    };
    return returnAsset;
  }

  function getSuffixedItem_(_type) {
    var mod = service_.getItemModifier('QUEST_ITEM_SUFFIXES');
    var asset = service_.getBasicItem(_type);
    var returnAsset = {
      target: asset.target + ' of ' + mod.name, 
      rarity: asset.rarity + mod.modifier
    };
    return returnAsset;
  }

  function getSpecialItem_(_type) {
    var mod_1 = service_.getItemModifier('QUEST_ITEM_PREFIXES');
    var mod_2 = service_.getItemModifier('QUEST_ITEM_SUFFIXES');
    var asset = service_.getBasicItem(_type);
    var returnAsset = {
      target: mod_1.name + ' ' + asset.target + ' of ' + mod_2.name, 
      rarity: asset.rarity + mod_1.modifier + mod_2.modifier
    };
    return returnAsset;
  }

  // TODO (JSchleining): how many of these get functions can actually be merged?
  function getItemModifier_(_type) {
    var array = GameConstants[_type];
    var asset = array[Math.floor(Math.random() * array.length)];
    var returnAsset = {
      name: asset.name, 
      modifier: asset.modifier
    };
    return returnAsset;
  }

}])
