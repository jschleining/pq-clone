angular.module('pq-clone')

.service('Quests', ['GameConstants', 'Utilities', 'Monsters',  function(GameConstants, Utilities, Monsters) {
	var service_ = this;
  var service_.questBaseValue = 10000;
  var service_.taskBaseValue = 1000;

  var service_.currentQuestType;
  var service_.currentQuestTarget;
  var service_.currentQuestValue;


  var service_.getQuestType = getQuestType_;
  var service_.getQuest = getQuest_;
  // TODO (JSchleining): Implement beginning, middle, and end tasks, as well as current target.
  // TODO (JSchleining): Implement ability to choose specific quests and pass parameters
  //                      such as enemy type, item type, etc.

  // TODO (JSchleining): Add Unique. Implement difficulty.
  var difficultyMod = [
    {name: 'trivial', modifier: -4, multiplier: .2},
    {name: 'minor', modifier: -3, multiplier: .4},
    {name: 'very easy ', modifier: -2, multiplier: .6},
    {name: 'easy', modifier: -1, multiplier: .8},
    {name: 'normal', modifier: -0, multiplier: 1},
    {name: 'hard', modifier: 1, multiplier: 1.2},
    {name: 'very hard', modifier: 2, multiplier: 1.4},
    {name: 'extreme', modifier: 3, multiplier: 1.6},
    {name: 'legendary', modifier: 4, multiplier: 1.8},
  ];

  function getQuest_() {
    service_.currentQuestType = getTaskType();

    if(questType === 'EXTERMINATE') {
      service_.currentQuestTarget = Monsters.getBasicMonster();
      // TODO (JSchleining): Set Quest Value; add modification later.
      service_.currentQuestValue = service_.questBaseValue;

    } else if (questType === 'RETRIEVE') {

    } else if (questType === 'GIVE') {
      
    } else if (questType === 'DIPLOMACY') {
      
    }

  }

  function getQuestType_() {
    // TODO (JSchleining): Implement Quest Rarity. Also, add a task for slaying a specific enemy.
    //                      also, tasks should have a max difficulty of quest difficulty + 3
    var rand = Utilities.getRandomInt(1, 100);

    if (rand >= 1 && rand < 101) {
      return 'EXTERMINATE'; // ex-ter-mi-nate! group - all enemies should be same type
    } //else if (rand >= 25 && rand < 50) {
    //   return 'RETRIEVE'; // sub tasks find, retrieve, give
    // } else if (rand >= 50 && rand < 75) {
    //   return 'GIVE'; // deliver
    // } else if (rand >= 75) {
    //   return 'DIPLOMACY'; // placate
    //     // sub tasks possible: retrieve something for them, exterminate another monster type, slay something, deliver something
    // }
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

*/



