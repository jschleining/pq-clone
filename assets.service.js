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










var KParts = [
  'br|cr|dr|fr|gr|j|kr|l|m|n|pr||||r|sh|tr|v|wh|x|y|z'.split('|'),
  'a|a|e|e|i|i|o|o|u|u|ae|ie|oo|ou'.split('|'),
  'b|ck|d|g|k|m|n|p|t|v|x|z'.split('|')];

function GenerateName() {
  var result = '';
  for (var i = 0; i <= 5; ++i)
    result += Pick(KParts[i % 3]);
  return result.charAt(0).toUpperCase() + result.slice(1);
}

function Pick(a) {
  return a[Random(a.length)];
}













var K = {};

K.Traits = ['Name', 'Race', 'Class', 'Level'];

K.PrimeStats = ['STR','CON','DEX','INT','WIS','CHA'];
K.Stats = K.PrimeStats.slice(0).concat(['HP Max','MP Max']);

K.Equips = ['Weapon',
            'Shield',
            'Helm',
            'Hauberk',
            'Brassairts',
            'Vambraces',
            'Gauntlets',
            'Gambeson',
            'Cuisses',
            'Greaves',
            'Sollerets'];

K.Spells = [
  'Slime Finger',
  'Rabbit Punch',
  'Hastiness',
  'Good Move',
  'Sadness',
  'Seasick',
  'Gyp',
  'Shoelaces',
  'Innoculate',
  'Cone of Annoyance',
  'Magnetic Orb',
  'Invisible Hands',
  'Revolting Cloud',
  'Aqueous Humor',
  'Spectral Miasma',
  'Clever Fellow',
  'Lockjaw',
  'History Lesson',
  'Hydrophobia',
  'Big Sister',
  'Cone of Paste',
  'Mulligan',
  'Nestor's Bright Idea',
  'Holy Batpole',
  'Tumor (Benign)',
  'Braingate',
  'Summon a Bitch',
  'Nonplus',
  'Animate Nightstand',
  'Eye of the Troglodyte',
  'Curse Name',
  'Dropsy',
  'Vitreous Humor',
  'Roger's Grand Illusion',
  'Covet',
  'Black Idaho',
  'Astral Miasma',
  'Spectral Oyster',
  'Acrid Hands',
  'Angioplasty',
  'Grognor's Big Day Off',
  'Tumor (Malignant)',
  'Animate Tunic',
  'Ursine Armor',
  'Holy Roller',
  'Tonsilectomy',
  'Curse Family',
  'Infinite Confusion'];

K.OffenseAttrib = [
  'Polished|+1',
  'Serrated|+1',
  'Heavy|+1',
  'Pronged|+2',
  'Steely|+2',
  'Vicious|+3',
  'Venomed|+4',
  'Stabbity|+4',
  'Dancing|+5',
  'Invisible|+6',
  'Vorpal|+7'];

K.DefenseAttrib = [
  'Studded|+1',
  'Banded|+2',
  'Gilded|+2',
  'Festooned|+3',
  'Holy|+4',
  'Cambric|+1',
  'Fine|+4',
  'Impressive|+5',
  'Custom|+3'];

K.Shields = [
  'Parasol|0',
  'Pie Plate|1',
  'Garbage Can Lid|2',
  'Buckler|3',
  'Plexiglass|4',
  'Fender|4',
  'Round Shield|5',
  'Carapace|5',
  'Scutum|6',
  'Propugner|6',
  'Kite Shield|7',
  'Pavise|8',
  'Tower Shield|9',
  'Baroque Shield|11',
  'Aegis|12',
  'Magnetic Field|18'];

K.Armors = [
  'Lace|1',
  'Macrame|2',
  'Burlap|3',
  'Canvas|4',
  'Flannel|5',
  'Chamois|6',
  'Pleathers|7',
  'Leathers|8',
  'Bearskin|9',
  'Ringmail|10',
  'Scale Mail|12',
  'Chainmail|14',
  'Splint Mail|15',
  'Platemail|16',
  'ABS|17',
  'Kevlar|18',
  'Titanium|19',
  'Mithril Mail|20',
  'Diamond Mail|25',
  'Plasma|30'];

K.Weapons = [
  'Stick|0',
  'Broken Bottle|1',
  'Shiv|1',
  'Sprig|1',
  'Oxgoad|1',
  'Eelspear|2',
  'Bowie Knife|2',
  'Claw Hammer|2',
  'Handpeen|2',
  'Andiron|3',
  'Hatchet|3',
  'Tomahawk|3',
  'Hackbarm|3',
  'Crowbar|4',
  'Mace|4',
  'Battleadze|4',
  'Leafmace|5',
  'Shortsword|5',
  'Longiron|5',
  'Poachard|5',
  'Baselard|5',
  'Whinyard|6',
  'Blunderbuss|6',
  'Longsword|6',
  'Crankbow|6',
  'Blibo|7',
  'Broadsword|7',
  'Kreen|7',
  'Warhammer|7',
  'Morning Star|8',
  'Pole-adze|8',
  'Spontoon|8',
  'Bastard Sword|9',
  'Peen-arm|9',
  'Culverin|10',
  'Lance|10',
  'Halberd|11',
  'Poleax|12',
  'Bandyclef|15'];

K.Monsters = [
  'Anhkheg|6|chitin',
  'Ant|0|antenna',
  'Ape|4|ass',
  'Baluchitherium|14|ear',
  'Beholder|10|eyestalk',
  'Black Pudding|10|saliva',
  'Blink Dog|4|eyelid',
  'Cub Scout|1|neckerchief',
  'Girl Scout|2|cookie',
  'Boy Scout|3|merit badge',
  'Eagle Scout|4|merit badge',
  'Bugbear|3|skin',
  'Bugboar|3|tusk',
  'Boogie|3|slime',
  'Camel|2|hump',
  'Carrion Crawler|3|egg',
  'Catoblepas|6|neck',
  'Centaur|4|rib',
  'Centipede|0|leg',
  'Cockatrice|5|wattle',
  'Couatl|9|wing',
  'Crayfish|0|antenna',
  'Demogorgon|53|tentacle',
  'Jubilex|17|gel',
  'Manes|1|tooth',
  'Orcus|27|wand',
  'Succubus|6|bra',
  'Vrock|8|neck',
  'Hezrou|9|leg',
  'Glabrezu|10|collar',
  'Nalfeshnee|11|tusk',
  'Marilith|7|arm',
  'Balor|8|whip',
  'Yeenoghu|25|flail',
  'Asmodeus|52|leathers',
  'Baalzebul|43|pants',
  'Barbed Devil|8|flame',
  'Bone Devil|9|hook',
  'Dispater|30|matches',
  'Erinyes|6|thong',
  'Geryon|30|cornucopia',
  'Malebranche|5|fork',
  'Ice Devil|11|snow',
  'Lemure|3|blob',
  'Pit Fiend|13|seed',
  'Anklyosaurus|9|tail',
  'Brontosaurus|30|brain',
  'Diplodocus|24|fin',
  'Elasmosaurus|15|neck',
  'Gorgosaurus|13|arm',
  'Iguanadon|6|thumb',
  'Megalosaurus|12|jaw',
  'Monoclonius|8|horn',
  'Pentasaurus|12|head',
  'Stegosaurus|18|plate',
  'Triceratops|16|horn',
  'Tyranosauraus Rex|18|forearm',
  'Djinn|7|lamp',
  'Doppleganger|4|face',
  'Black Dragon|7|*',
  'Plaid Dragon|7|sporrin',
  'Blue Dragon|9|*',
  'Beige Dragon|9|*',
  'Brass Dragon|7|pole',
  'Tin Dragon|8|*',
  'Bronze Dragon|9|medal',
  'Chromatic Dragon|16|scale',
  'Copper Dragon|8|loafer',
  'Gold Dragon|8|filling',
  'Green Dragon|8|*',
  'Platinum Dragon|21|*',
  'Red Dragon|10|cocktail',
  'Silver Dragon|10|*',
  'White Dragon|6|tooth',
  'Dragon Turtle|13|shell',
  'Dryad|2|acorn',
  'Dwarf|1|drawers',
  'Eel|2|sashimi',
  'Efreet|10|cinder',
  'Sand Elemental|8|glass',
  'Bacon Elemental|10|bit',
  'Porn Elemental|12|lube',
  'Cheese Elemental|14|curd',
  'Hair Elemental|16|follicle',
  'Swamp Elf|1|lilypad',
  'Brown Elf|1|tusk',
  'Sea Elf|1|jerkin',
  'Ettin|10|fur',
  'Frog|0|leg',
  'Violet Fungi|3|spore',
  'Gargoyle|4|gravel',
  'Gelatinous Cube|4|jam',
  'Ghast|4|vomit',
  'Ghost|10|*',
  'Ghoul|2|muscle',
  'Humidity Giant|12|drops',
  'Beef Giant|11|steak',
  'Quartz Giant|10|crystal',
  'Porcelain Giant|9|fixture',
  'Rice Giant|8|grain',
  'Cloud Giant|12|condensation',
  'Fire Giant|11|cigarettes',
  'Frost Giant|10|snowman',
  'Hill Giant|8|corpse',
  'Stone Giant|9|hatchling',
  'Storm Giant|15|barometer',
  'Mini Giant|4|pompadour',
  'Gnoll|2|collar',
  'Gnome|1|hat',
  'Goblin|1|ear',
  'Grid Bug|1|carapace',
  'Jellyrock|9|seedling',
  'Beer Golem|15|foam',
  'Oxygen Golem|17|platelet',
  'Cardboard Golem|14|recycling',
  'Rubber Golem|16|ball',
  'Leather Golem|15|fob',
  'Gorgon|8|testicle',
  'Gray Ooze|3|gravy',
  'Green Slime|2|sample',
  'Griffon|7|nest',
  'Banshee|7|larynx',
  'Harpy|3|mascara',
  'Hell Hound|5|tongue',
  'Hippocampus|4|mane',
  'Hippogriff|3|egg',
  'Hobgoblin|1|patella',
  'Homonculus|2|fluid',
  'Hydra|8|gyrum',
  'Imp|2|tail',
  'Invisible Stalker|8|*',
  'Iron Peasant|3|chaff',
  'Jumpskin|3|shin',
  'Kobold|1|penis',
  'Leprechaun|1|wallet',
  'Leucrotta|6|hoof',
  'Lich|11|crown',
  'Lizard Man|2|tail',
  'Lurker|10|sac',
  'Manticore|6|spike',
  'Mastodon|12|tusk',
  'Medusa|6|eye',
  'Multicell|2|dendrite',
  'Pirate|1|booty',
  'Berserker|1|shirt',
  'Caveman|2|club',
  'Dervish|1|robe',
  'Merman|1|trident',
  'Mermaid|1|gills',
  'Mimic|9|hinge',
  'Mind Flayer|8|tentacle',
  'Minotaur|6|map',
  'Yellow Mold|1|spore',
  'Morkoth|7|teeth',
  'Mummy|6|gauze',
  'Naga|9|rattle',
  'Nebbish|1|belly',
  'Neo-Otyugh|11|organ ',
  'Nixie|1|webbing',
  'Nymph|3|hanky',
  'Ochre Jelly|6|nucleus',
  'Octopus|2|beak',
  'Ogre|4|talon',
  'Ogre Mage|5|apparel',
  'Orc|1|snout',
  'Otyugh|7|organ',
  'Owlbear|5|feather',
  'Pegasus|4|aileron',
  'Peryton|4|antler',
  'Piercer|3|tip',
  'Pixie|1|dust',
  'Man-o-war|3|tentacle',
  'Purple Worm|15|dung',
  'Quasit|3|tail',
  'Rakshasa|7|pajamas',
  'Rat|0|tail',
  'Remorhaz|11|protrusion',
  'Roc|18|wing',
  'Roper|11|twine',
  'Rot Grub|1|eggsac',
  'Rust Monster|5|shavings',
  'Satyr|5|hoof',
  'Sea Hag|3|wart',
  'Silkie|3|fur',
  'Shadow|3|silhouette',
  'Shambling Mound|10|mulch',
  'Shedu|9|hoof',
  'Shrieker|3|stalk',
  'Skeleton|1|clavicle',
  'Spectre|7|vestige',
  'Sphinx|10|paw',
  'Spider|0|web',
  'Sprite|1|can',
  'Stirge|1|proboscis',
  'Stun Bear|5|tooth',
  'Stun Worm|2|trode',
  'Su-monster|5|tail',
  'Sylph|3|thigh',
  'Titan|20|sandal',
  'Trapper|12|shag',
  'Treant|10|acorn',
  'Triton|3|scale',
  'Troglodyte|2|tail',
  'Troll|6|hide',
  'Umber Hulk|8|claw',
  'Unicorn|4|blood',
  'Vampire|8|pancreas',
  'Wight|4|lung',
  'Will-o'-the-Wisp|9|wisp',
  'Wraith|5|finger',
  'Wyvern|7|wing',
  'Xorn|7|jaw',
  'Yeti|4|fur',
  'Zombie|2|forehead',
  'Wasp|0|stinger',
  'Rat|1|tail',
  'Bunny|0|ear',
  'Moth|0|dust',
  'Beagle|0|collar',
  'Midge|0|corpse',
  'Ostrich|1|beak',
  'Billy Goat|1|beard',
  'Bat|1|wing',
  'Koala|2|heart',
  'Wolf|2|paw',
  'Whippet|2|collar',
  'Uruk|2|boot',
  'Poroid|4|node',
  'Moakum|8|frenum',
  'Fly|0|*',
  'Hogbird|3|curl',
  'Wolog|4|lemma'];

K.MonMods = [
  '-4 fœtal *',
  '-4 dying *',
  '-3 crippled *',
  '-3 baby *',
  '-2 adolescent',
  '-2 very sick *',
  '-1 lesser *',
  '-1 undernourished *',
  '+1 greater *',
  '+1 * Elder',
  '+2 war *',
  '+2 Battle-*',
  '+3 Were-*',
  '+3 undead *',
  '+4 giant *',
  '+4 * Rex'];

K.OffenseBad = [
  'Dull|-2',
  'Tarnished|-1',
  'Rusty|-3',
  'Padded|-5',
  'Bent|-4',
  'Mini|-4',
  'Rubber|-6',
  'Nerf|-7',
  'Unbalanced|-2'];

K.DefenseBad = [
  'Holey|-1',
  'Patched|-1',
  'Threadbare|-2',
  'Faded|-1',
  'Rusty|-3',
  'Motheaten|-3',
  'Mildewed|-2',
  'Torn|-3',
  'Dented|-3',
  'Cursed|-5',
  'Plastic|-4',
  'Cracked|-4',
  'Warped|-3',
  'Corroded|-3'];

K.Races = [
  'Half Orc|HP Max',
  'Half Man|CHA',
  'Half Halfling|DEX',
  'Double Hobbit|STR',
  'Hob-Hobbit|DEX,CON',
  'Low Elf|CON',
  'Dung Elf|WIS',
  'Talking Pony|MP Max,INT',
  'Gyrognome|DEX',
  'Lesser Dwarf|CON',
  'Crested Dwarf|CHA',
  'Eel Man|DEX',
  'Panda Man|CON,STR',
  'Trans-Kobold|WIS',
  'Enchanted Motorcycle|MP Max',
  'Will o' the Wisp|WIS',
  'Battle-Finch|DEX,INT',
  'Double Wookiee|STR',
  'Skraeling|WIS',
  'Demicanadian|CON',
  'Land Squid|STR,HP Max'];

K.Klasses = [
  'Ur-Paladin|WIS,CON',
  'Voodoo Princess|INT,CHA',
  'Robot Monk|STR',
  'Mu-Fu Monk|DEX',
  'Mage Illusioner|INT,MP Max',
  'Shiv-Knight|DEX',
  'Inner Mason|CON',
  'Fighter/Organist|CHA,STR',
  'Puma Burgular|DEX',
  'Runeloremaster|WIS',
  'Hunter Strangler|DEX,INT',
  'Battle-Felon|STR',
  'Tickle-Mimic|WIS,INT',
  'Slow Poisoner|CON',
  'Bastard Lunatic|CON',
  'Lowling|WIS',
  'Birdrider|WIS',
  'Vermineer|INT'];

K.Titles = [
  'Mr.',
  'Mrs.',
  'Sir',
  'Sgt.',
  'Ms.',
  'Captain',
  'Chief',
  'Admiral',
  'Saint'];

K.ImpressiveTitles = [
  'King',
  'Queen',
  'Lord',
  'Lady',
  'Viceroy',
  'Mayor',
  'Prince',
  'Princess',
  'Chief',
  'Boss',
  'Archbishop'];

*/



