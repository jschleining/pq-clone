angular.module('pq-clone')

.service('Assets', ['QuestItems', 'QuestMonsters', function(QuestItems, QuestMonsters) {
	var service_ = this;
  service_.getTask = getTask_;
  service_.getRandomInt = getRandomInt_;

  service_.DATA = {
    TASK_TYPES: {
      FIGHT: [
        ['Face', 'Facing'],
        ['Fight', 'Fighting'],
        ['Slay', 'Slaying'],
        ['Defeat', 'Defeating'],
        ['Execute', 'Executing'],
        ['Exterminate', 'Exterminating']
      ],
      FIND: [
        ['Locate', 'Locating'],
        ['Find', 'Finding'],
        ['Seek', 'Seeking']
      ]
    }
  };

  function getTask_() {
    var quests = service_.DATA.TASK_TYPES;
    var quest;
    var questTarget = QuestItems.getQuestItem();
    var baseType = '';

    if(service_.getRandomInt(1, 100) < 51) {
      quest = quests.FIND[Math.floor(Math.random() * quests.FIND.length)];
      baseType = 'FIND';
      questTarget = QuestItems.getQuestItem();

      if (questTarget.rarity < 2) {
        var pattern = /^[aeiouy]/i;
        if (pattern.test(questTarget.target)) {
          quest[2] = ' an';
        } else {
          quest[2] = ' a';
        }
      } else {
        quest[2] = ' the';
      }
    } else {
      quest = quests.FIGHT[Math.floor(Math.random() * quests.FIGHT.length)];
      baseType = 'FIGHT';
      questTarget = QuestMonsters.getQuestMonster();

      var pattern = /^[aeiouy]/i;
        if (pattern.test(questTarget.target)) {
          quest[2] = ' an';
        } else {
          quest[2] = ' a';
        }
    }

    return {baseType: baseType, questType: quest, target: questTarget};
  }

  function getRandomInt_(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}])  




/*

function CompleteQuest() {
  QuestBar.reset(50 + RandomLow(1000));
  if (Quests.length()) {
    Log('Quest completed: ' + game.bestquest);
    Quests.CheckAll();
    [WinSpell,WinEquip,WinStat,WinItem][Random(4)]();
  }
  while (Quests.length() > 99)
    Quests.remove0();

  game.questmonster = '';
  var caption;
  switch (Random(5)) {
  case 0:
    var level = GetI(Traits,'Level');
    var lev = 0;
    for (var i = 1; i <= 4; ++i) {
      var montag = Random(K.Monsters.length);
      var m = K.Monsters[montag];
      var l = StrToInt(Split(m,1));
      if (i == 1 || Abs(l - level) < Abs(lev - level)) {
        lev = l;
        game.questmonster = m;
        game.questmonsterindex = montag;
      }
    }
    caption = 'Exterminate ' + Definite(Split(game.questmonster,0),2);
    break;
  case 1:
    caption = 'Seek ' + Definite(InterestingItem(), 1);
    break;
  case 2:
    caption = 'Deliver this ' + BoringItem();
    break;
  case 3:
    caption = 'Fetch me ' + Indefinite(BoringItem(), 1);
    break;
  case 4:
    var mlev = 0;
    level = GetI(Traits,'Level');
    for (var ii = 1; ii <= 2; ++ii) {
      montag = Random(K.Monsters.length);
      m = K.Monsters[montag];
      l = StrToInt(Split(m,1));
      if ((ii == 1) || (Abs(l - level) < Abs(mlev - level))) {
        mlev = l;
        game.questmonster = m;
      }
    }
    caption = 'Placate ' + Definite(Split(game.questmonster,0),2);
    game.questmonster = '';  // We're trying to placate them, after all
    break;
  }
  if (!game.Quests) game.Quests = [];
  while (game.Quests.length > 99) game.Quests.shift();
  game.Quests.push(caption);
  game.bestquest = caption;
  Quests.AddUI(caption);


  Log('Commencing quest: ' + caption);

  SaveGame();
}








function SpecialItem() {
  return InterestingItem() + ' of ' + Pick(K.ItemOfs);
}

function InterestingItem() {
  return Pick(K.ItemAttrib) + ' ' + Pick(K.Specials);
}

function BoringItem() {
  return Pick(K.BoringItems);
}






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








*/



