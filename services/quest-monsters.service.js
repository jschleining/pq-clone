angular.module('pq-clone')

.service('QuestMonsters', ['GameConstants', function(GameConstants) {
	var service_ = this;
  service_.getQuestMonster = getQuestMonster_;
  service_.getModifier = getModifier_;
  service_.getMonster = getMonster_;
  service_.getRandomInt = getRandomInt_;

  // TODO (JSchleining): Do this better.
  service_.getBasicMonster = getBasicMonster_;
  function getBasicMonster_() {
    var m = service_.getMonster('MONSTER_MANUAL');
    var rarity = 0;
    return {target: m, rarity: rarity}
  }

  // TODO: Optimize this. I think it can be done better.
  function getQuestMonster_() {
    var m = '';
    var monster = '';
    var prefix = '';
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

    // Protect the initial object by creating a copy.
    m = service_.getMonster('MONSTER_MANUAL');
    monster = {creature: m.creature, cr: m.cr, reward: m.reward};
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

/*


function NamedMonster(level) {
  var lev = 0;
  var result = '';
  for (var i = 0; i < 5; ++i) {
    var m = Pick(K.Monsters);
    if (!result || (Abs(level-StrToInt(Split(m,1))) < Abs(level-lev))) {
      result = Split(m,0);
      lev = StrToInt(Split(m,1));
    }
  }
  return GenerateName() + ' the ' + result;
}

function ImpressiveGuy() {
  return Pick(K.ImpressiveTitles) +
    (Random(2) ? ' of the ' + Pick(K.Races) : ' of ' + GenerateName());
}

function MonsterTask(level) {
  var definite = false;
  for (var i = level; i >= 1; --i) {
    if (Odds(2,5))
      level += RandSign();
  }
  if (level < 1) level = 1;
  // level = level of puissance of opponent(s) we'll return

  var monster, lev;
  if (Odds(1,25)) {
    // Use an NPC every once in a while
      monster = ' ' + Split(Pick(K.Races), 0);
    if (Odds(1,2)) {
      monster = 'passing' + monster + ' ' + Split(Pick(K.Klasses), 0);
    } else {
      monster = PickLow(K.Titles) + ' ' + GenerateName() + ' the' + monster;
      definite = true;
    }
    lev = level;
    monster = monster + '|' + IntToStr(level) + '|*';
  } else if (game.questmonster && Odds(1,4)) {
    // Use the quest monster
    monster = K.Monsters[game.questmonsterindex];
    lev = StrToInt(Split(monster,1));
  } else {
    // Pick the monster out of so many random ones closest to the level we want
    monster = Pick(K.Monsters);
    lev = StrToInt(Split(monster,1));
    for (var ii = 0; ii < 5; ++ii) {
      var m1 = Pick(K.Monsters);
      if (Abs(level-StrToInt(Split(m1,1))) < Abs(level-lev)) {
        monster = m1;
        lev = StrToInt(Split(monster,1));
      }
    }
  }

  var result = Split(monster,0);
  game.task = 'kill|' + monster;

  var qty = 1;
  if (level-lev > 10) {
    // lev is too low. multiply...
    qty = Math.floor((level + Random(lev)) / Max(lev,1));
    if (qty < 1) qty = 1;
    level = Math.floor(level / qty);
  }

  if ((level - lev) <= -10) {
    result = 'imaginary ' + result;
  } else if ((level-lev) < -5) {
    i = 10+(level-lev);
    i = 5-Random(i+1);
    result = Sick(i,Young((lev-level)-i,result));
  } else if (((level-lev) < 0) && (Random(2) == 1)) {
    result = Sick(level-lev,result);
  } else if (((level-lev) < 0)) {
    result = Young(level-lev,result);
  } else if ((level-lev) >= 10) {
    result = 'messianic ' + result;
  } else if ((level-lev) > 5) {
    i = 10-(level-lev);
    i = 5-Random(i+1);
    result = Big(i,Special((level-lev)-i,result));
  } else if (((level-lev) > 0) && (Random(2) == 1)) {
    result = Big(level-lev,result);
  } else if (((level-lev) > 0)) {
    result = Special(level-lev,result);
  }

  lev = level;
  level = lev * qty;

  if (!definite) result = Indefinite(result, qty);
  return { 'description': result, 'level': level };
}



function Sick(m, s) {
  m = 6 - Abs(m);
  return prefix(['dead','comatose','crippled','sick','undernourished'], m, s);
}


function Young(m, s) {
  m = 6 - Abs(m);
  return prefix(['foetal','baby','preadolescent','teenage','underage'], m, s);
}


function Big(m, s) {
  return prefix(['greater','massive','enormous','giant','titanic'], m, s);
}

function Special(m, s) {
  if (Pos(' ', s) > 0)
    return prefix(['veteran','cursed','warrior','undead','demon'], m, s);
  else
    return prefix(['Battle-','cursed ','Were-','undead ','demon '], m, s, '');
}

*/