angular.module('pq-clone')

.service('Tasks', ['QuestMonsters', 'GameConstants', 'Utilities', 'Items',  function(QuestMonsters, GameConstants, Utilities, Items) {
	var service_ = this;
  service_.getTask = getTask_;

  function getTask_() {
    var quests = GameConstants.TASK_TYPES;
    var quest;
    var questTarget;
    var baseType = getTaskType();
    
    
    quest = quests[baseType][Math.floor(Math.random() * quests[baseType].length)];

    if (baseType == 'FIGHT') {
      questTarget = QuestMonsters.getQuestMonster();
      //  Random number between 1 and 3 monsters
      var qty = Utilities.getRandomInt(1, 3);

      quest[2] = Utilities.indefiniteArticle(questTarget.target.creature, qty);

      // pluralize after getting definite or indefinite
      if (qty > 1) {
        questTarget.target.creature = qty + ' ' + Utilities.pluralize(questTarget.target.creature);
      }
    } else if (baseType == 'FIND') {
      var rnd = Utilities.getRandomInt(1, 100);

      if (rnd < 10) {
        questTarget = Items.getSpecialItem();
       } else if (rnd >= 10 && rnd < 25) {
        questTarget = Items.getPrefixedItem();
      } else if (rnd >= 25 && rnd < 41) {
        questTarget = Items.getSuffixedItem();
      } else if (rnd >= 41 && rnd < 66) {
        questTarget = Items.getBasicItem('QUEST_ITEMS_SPECIAL');
      } else {
        questTarget = Items.getBasicItem('QUEST_ITEMS_MUNDANE');
      }

      if (questTarget.rarity < 2) {
        quest[2] = Utilities.indefiniteArticle(questTarget.target, 1);
      } else {
        quest[2] = Utilities.definiteArticle(questTarget.target, 1);
      }
    } else if (baseType == 'RETRIEVE') {
      questTarget = Items.getPrefixedItem();
      if (questTarget.rarity < 2) {
        quest[2] = Utilities.indefiniteArticle(questTarget.target, 1);
      } else {
        quest[2] = Utilities.definiteArticle(questTarget.target, 1);
      }
    } else if (baseType == 'GIVE') {
      questTarget = Items.getBasicItem('QUEST_ITEMS_MUNDANE');

      if (questTarget.rarity < 2) {
        quest[2] = Utilities.indefiniteArticle(questTarget.target, 1);
      } else {
        quest[2] = Utilities.definiteArticle(questTarget.target, 1);
      }
    } else if (baseType == 'DIPLOMACY') {
      // TODO (JSchleining):Temporary. Do this better.
      questTarget = QuestMonsters.getBasicMonster();

      quest[2] = Utilities.definiteArticle(questTarget.target.creature, 1);
      questTarget.target.creature = Utilities.pluralize(questTarget.target.creature);
    }

    return {baseType: baseType, questType: quest, target: questTarget};
  }

  function getTaskType() {
    // TODO (JSchleining): Implement Task Rarity.
    var rand = Utilities.getRandomInt(1, 100);

    if (rand >= 1 && rand < 21) {
      return 'FIGHT';
    } else if (rand >= 21 && rand < 41) {
      return 'FIND';
    } else if (rand >= 41 && rand < 61) {
      return 'RETRIEVE';
    } else if (rand >= 61 && rand < 81) {
      return 'GIVE';
    } else if (rand >= 81) {
      return 'DIPLOMACY';
    }
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



