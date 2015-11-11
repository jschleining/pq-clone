angular.module('pq-clone')

.constant('GameConstants', {
  NAME_PARTS: [
                ['br', 'cr', 'dr', 'fr', 'gr', 'j', 'kr', 'l', 'm', 'n', 'pr', 'r', 'sh', 'tr', 'v', 'wh', 'x', 'y', 'z'],
                ['a', 'a', 'e', 'e', 'i', 'i', 'o', 'o', 'u', 'u', 'ae', 'ei', 'oo', 'ou'],
                ['b', 'ck', 'd', 'g', 'k', 'm', 'n', 'p', 't', 'v', 'x', 'z']
              ],
  QUEST_ITEM_PREFIXES:  [
                          'Arcane',
                          'Astral',
                          'Austere',
                          'Benevolent',
                          'Blessed',
                          'Crafted',
                          'Crystalline',
                          'Deadly',
                          'Enchanted',
                          'Fearsome',
                          'Filigreed',
                          'Gilded',
                          'Gleaming',
                          'Golden',
                          'Grandiose',
                          'Iron',
                          'Legendary',
                          'Lucky',
                          'Magnificent',
                          'Mythic',
                          'One True',
                          'Ostentatious',
                          'Precious',
                          'Proverbial',
                          'Reverential',
                          'Sacred',
                          'Spectral',
                          'Unearthly'
                        ],
  QUEST_ITEM_SUFFIXES:  [
                          'Awe',
                          'Chaos',
                          'Comfort',
                          'Cruelty',
                          'Danger',
                          'Despair',
                          'Domination',
                          'Efficiency',
                          'Envy',
                          'Fealty',
                          'Fear',
                          'Foreboding',
                          'Foreshadowing',
                          'Fortune',
                          'Frenzy',
                          'Guile',
                          'Happiness',
                          'Hunger',
                          'Incarceration',
                          'Internment',
                          'Intrusion',
                          'Invisibility',
                          'Joy',
                          'Loyalty',
                          'Nervousness',
                          'Patience',
                          'Pleasure',
                          'Practicality',
                          'Punctuality',
                          'Ra',
                          'Silence',
                          'Solitude',
                          'Submission',
                          'Suffering',
                          'The Bone',
                          'Torpor',
                          'Worry'
                        ],
  QUEST_ITEMS_MUNDANE:  [
                          'Anvil',
                          'Arrow',
                          'Bandage',
                          'Bandolier',
                          'Canoe',
                          'Coin',
                          'Egg',
                          'Hoe',
                          'Hood',
                          'Inkwell',
                          'Needle',
                          'Planter box',
                          'Rock',
                          'Scabbard',
                          'Trinket',
                          'Trowel',
                          'Vest'
                        ],
  QUEST_ITEMS_SPECIAL:  [
                          'Ankh',
                          'Brazier',
                          'Brooch',
                          'Candelabra',
                          'Casket',
                          'Corset',
                          'Diadem',
                          'Fleece',
                          'Gemstone',
                          'Hymnal',
                          'Lamp',
                          'Laurel',
                          'Lens',
                          'Orb',
                          'Ornament',
                          'Phial',
                          'Sceptre',
                          'Sphere',
                          'Talisman',
                          'Tiara',
                          'Tome',
                          'Towel',
                          'Writ'
                        ],
  MONSTER_PREFIXES: [
                      {name: 'crippled', modifier: -3},
                      {name: 'very sick', modifier: -2},
                      {name: 'malnourished', modifier: -1},
                      {name: 'robust', modifier: 1},
                      {name: 'strong', modifier: 2},
                      {name: 'mighty', modifier: 3},
                    ],
  MONSTER_TEMPLATES: [ // TODO: Add Exclusions so only certain types can have certain templates, also, expand. 
                        // I want a mighty half-elf half-giant undead were-rat wizard
                        {name: 'war', modifier: 1},
                        {name: 'battle-', modifier: 1},
                        {name: 'were-', modifier: 1},
                        {name: 'giant', modifier: 1},
                        {name: 'undead', modifier: 1},
                     ],
  MONSTER_MANUAL: [ // TODO: Make this more sophisticated - use proper CRs, treasure, rarity, grouping, type, subtype, etc
                    {creature: 'Ant', cr: 0, reward: 'antenna'},
                    {creature: 'Beagle', cr: 0, reward: 'collar'},
                    {creature: 'Bunny', cr: 0, reward: 'ear'},
                    {creature: 'Centipede', cr: 0, reward: 'leg'},
                    {creature: 'Crayfish', cr: 0, reward: 'antenna'},
                    {creature: 'Fly', cr: 0, reward: ''},
                    {creature: 'Frog', cr: 0, reward: 'leg'},
                    {creature: 'Midge', cr: 0, reward: 'corpse'},
                    {creature: 'Moth', cr: 0, reward: 'dust'},
                    {creature: 'Rat', cr: 0, reward: 'tail'},
                    {creature: 'Spider', cr: 0, reward: 'web'},
                    {creature: 'Wasp', cr: 0, reward: 'stinger'},

                    {creature: 'Bat', cr: 1, reward: 'wing'},
                    {creature: 'Berserker', cr: 1, reward: 'shirt'},
                    {creature: 'Billy Goat', cr: 1, reward: 'beard'},
                    {creature: 'Brown Elf', cr: 1, reward: 'tusk'},
                    {creature: 'Cub Scout', cr: 1, reward: 'neckerchief'},
                    {creature: 'Dervish', cr: 1, reward: 'robe'},
                    {creature: 'Dwarf', cr: 1, reward: 'drawers'},
                    {creature: 'Gnome', cr: 1, reward: 'hat'},
                    {creature: 'Goblin', cr: 1, reward: 'ear'},
                    {creature: 'Grid Bug', cr: 1, reward: 'carapace'},
                    {creature: 'Hobgoblin', cr: 1, reward: 'patella'},
                    {creature: 'Kobold', cr: 1, reward: 'penis'},
                    {creature: 'Leprechaun', cr: 1, reward: 'wallet'},
                    {creature: 'Manes', cr: 1, reward: 'tooth'},
                    {creature: 'Merman', cr: 1, reward: 'trident'},
                    {creature: 'Mermaid', cr: 1, reward: 'gills'},
                    {creature: 'Nebbish', cr: 1, reward: 'belly'},
                    {creature: 'Nixie', cr: 1, reward: 'webbing'},
                    {creature: 'Orc', cr: 1, reward: 'snout'},
                    {creature: 'Ostrich', cr: 1, reward: 'beak'},
                    {creature: 'Pirate', cr: 1, reward: 'booty'},
                    {creature: 'Pixie', cr: 1, reward: 'dust'},
                    {creature: 'Rat', cr: 1, reward: 'tail'},
                    {creature: 'Rot Grub', cr: 1, reward: 'eggsac'},
                    {creature: 'Sea Elf', cr: 1, reward: 'jerkin'},
                    {creature: 'Skeleton', cr: 1, reward: 'clavicle'},
                    {creature: 'Sprite', cr: 1, reward: 'can'},
                    {creature: 'Stirge', cr: 1, reward: 'proboscis'},
                    {creature: 'Swamp Elf', cr: 1, reward: 'lilypad'},
                    {creature: 'Yellow Mold', cr: 1, reward: 'spore'},

                    {creature: 'Camel', cr: 2, reward: 'hump'},
                    {creature: 'Caveman', cr: 2, reward: 'club'},
                    {creature: 'Dryad', cr: 2, reward: 'acorn'},
                    {creature: 'Eel', cr: 2, reward: 'sashimi'},
                    {creature: 'Ghoul', cr: 2, reward: 'muscle'},
                    {creature: 'Girl Scout', cr: 2, reward: 'cookie'},
                    {creature: 'Gnoll', cr: 2, reward: 'collar'},
                    {creature: 'Green Slime', cr: 2, reward: 'sample'},
                    {creature: 'Homonculus', cr: 2, reward: 'fluid'},
                    {creature: 'Imp', cr: 2, reward: 'tail'},
                    {creature: 'Koala', cr: 2, reward: 'heart'},
                    {creature: 'Lizard Man', cr: 2, reward: 'tail'},
                    {creature: 'Multicell', cr: 2, reward: 'dendrite'},
                    {creature: 'Octopus', cr: 2, reward: 'beak'},
                    {creature: 'Stun Worm', cr: 2, reward: 'trode'},
                    {creature: 'Troglodyte', cr: 2, reward: 'tail'},
                    {creature: 'Uruk', cr: 2, reward: 'boot'},
                    {creature: 'Whippet', cr: 2, reward: 'collar'},
                    {creature: 'Wolf', cr: 2, reward: 'paw'},
                    {creature: 'Zombie', cr: 2, reward: 'forehead'},

                    {creature: 'Boy Scout', cr: 3, reward: 'merit badge'},
                    {creature: 'Bugbear', cr: 3, reward: 'skin'},
                    {creature: 'Bugboar', cr: 3, reward: 'tusk'},
                    {creature: 'Boogie', cr: 3, reward: 'slime'},
                    {creature: 'Carrion Crawler', cr: 3, reward: 'egg'},
                    {creature: 'Gray Ooze', cr: 3, reward: 'gravy'},
                    {creature: 'Harpy', cr: 3, reward: 'mascara'},
                    {creature: 'Hippogriff', cr: 3, reward: 'egg'},
                    {creature: 'Hogbird', cr: 3, reward: 'curl'},
                    {creature: 'Iron Peasant', cr: 3, reward: 'chaff'},
                    {creature: 'Jumpskin', cr: 3, reward: 'shin'},
                    {creature: 'Lemure', cr: 3, reward: 'blob'},
                    {creature: 'Man-o-war', cr: 3, reward: 'tentacle'},
                    {creature: 'Nymph', cr: 3, reward: 'hanky'},
                    {creature: 'Piercer', cr: 3, reward: 'tip'},
                    {creature: 'Quasit', cr: 3, reward: 'tail'},
                    {creature: 'Sea Hag', cr: 3, reward: 'wart'},
                    {creature: 'Silkie', cr: 3, reward: 'fur'},
                    {creature: 'Shadow', cr: 3, reward: 'silhouette'},
                    {creature: 'Shrieker', cr: 3, reward: 'stalk'},
                    {creature: 'Sylph', cr: 3, reward: 'thigh'},
                    {creature: 'Triton', cr: 3, reward: 'scale'},
                    {creature: 'Violet Fungi', cr: 3, reward: 'spore'},

                    {creature: 'Ape', cr: 4, reward: 'ass'},
                    {creature: 'Blink Dog', cr: 4, reward: 'eyelid'},
                    {creature: 'Centaur', cr: 4, reward: 'rib'},
                    {creature: 'Doppleganger', cr: 4, reward: 'face'},
                    {creature: 'Eagle Scout', cr: 4, reward: 'merit badge'},
                    {creature: 'Gargoyle', cr: 4, reward: 'gravel'},
                    {creature: 'Gelatinous Cube', cr: 4, reward: 'jam'},
                    {creature: 'Ghast', cr: 4, reward: 'vomit'},
                    {creature: 'Hippocampus', cr: 4, reward: 'mane'},
                    {creature: 'Mini Giant', cr: 4, reward: 'pompadour'},
                    {creature: 'Ogre', cr: 4, reward: 'talon'},
                    {creature: 'Pegasus', cr: 4, reward: 'aileron'},
                    {creature: 'Peryton', cr: 4, reward: 'antler'},
                    {creature: 'Poroid', cr: 4, reward: 'node'},
                    {creature: 'Unicorn', cr: 4, reward: 'blood'},
                    {creature: 'Wight', cr: 4, reward: 'lung'},
                    {creature: 'Wolog', cr: 4, reward: 'lemma'},
                    {creature: 'Yeti', cr: 4, reward: 'fur'},

                    {creature: 'Cockatrice', cr: 5, reward: 'wattle'},
                    {creature: 'Hell Hound', cr: 5, reward: 'tongue'},
                    {creature: 'Malebranche', cr: 5, reward: 'fork'},
                    {creature: 'Ogre Mage', cr: 5, reward: 'apparel'},
                    {creature: 'Owlbear', cr: 5, reward: 'feather'},
                    {creature: 'Rust Monster', cr: 5, reward: 'shavings'},
                    {creature: 'Satyr', cr: 5, reward: 'hoof'},
                    {creature: 'Stun Bear', cr: 5, reward: 'tooth'},
                    {creature: 'Su-monster', cr: 5, reward: 'tail'},
                    {creature: 'Wraith', cr: 5, reward: 'finger'},

                    {creature: 'Anhkheg', cr: 6, reward: 'chitin'},
                    {creature: 'Catoblepas', cr: 6, reward: 'neck'},
                    {creature: 'Erinyes', cr: 6, reward: 'thong'},
                    {creature: 'Iguanadon', cr: 6, reward: 'thumb'},
                    {creature: 'Leucrotta', cr: 6, reward: 'hoof'},
                    {creature: 'Manticore', cr: 6, reward: 'spike'},
                    {creature: 'Medusa', cr: 6, reward: 'eye'},
                    {creature: 'Minotaur', cr: 6, reward: 'map'},
                    {creature: 'Mummy', cr: 6, reward: 'gauze'},
                    {creature: 'Ochre Jelly', cr: 6, reward: 'nucleus'},
                    {creature: 'Succubus', cr: 6, reward: 'bra'},
                    {creature: 'Troll', cr: 6, reward: 'hide'},
                    {creature: 'White Dragon', cr: 6, reward: 'tooth'},

                    {creature: 'Banshee', cr: 7, reward: 'larynx'},
                    {creature: 'Black Dragon', cr: 7, reward: '*'},
                    {creature: 'Brass Dragon', cr: 7, reward: 'pole'},
                    {creature: 'Djinn', cr: 7, reward: 'lamp'},
                    {creature: 'Griffon', cr: 7, reward: 'nest'},
                    {creature: 'Marilith', cr: 7, reward: 'arm'},
                    {creature: 'Morkoth', cr: 7, reward: 'teeth'},
                    {creature: 'Otyugh', cr: 7, reward: 'organ'},
                    {creature: 'Plaid Dragon', cr: 7, reward: 'sporrin'},
                    {creature: 'Rakshasa', cr: 7, reward: 'pajamas'},
                    {creature: 'Spectre', cr: 7, reward: 'vestige'},
                    {creature: 'Wyvern', cr: 7, reward: 'wing'},
                    {creature: 'Xorn', cr: 7, reward: 'jaw'},
                    {creature: '', cr: 7, reward: ''},

                    {creature: 'Balor', cr: 8, reward: 'whip'},
                    {creature: 'Barbed Devil', cr: 8, reward: 'flame'},
                    {creature: 'Copper Dragon', cr: 8, reward: 'loafer'},
                    {creature: 'Gold Dragon', cr: 8, reward: 'filling'},
                    {creature: 'Gorgon', cr: 8, reward: 'testicle'},
                    {creature: 'Green Dragon', cr: 8, reward: '*'},
                    {creature: 'Hill Giant', cr: 8, reward: 'corpse'},
                    {creature: 'Hydra', cr: 8, reward: 'gyrum'},
                    {creature: 'Invisible Stalker', cr: 8, reward: '*'},
                    {creature: 'Mind Flayer', cr: 8, reward: 'tentacle'},
                    {creature: 'Moakum', cr: 8, reward: 'frenum'},
                    {creature: 'Monoclonius', cr: 8, reward: 'horn'},
                    {creature: 'Rice Giant', cr: 8, reward: 'grain'},
                    {creature: 'Sand Elemental', cr: 8, reward: 'glass'},
                    {creature: 'Tin Dragon', cr: 8, reward: '*'},
                    {creature: 'Umber Hulk', cr: 8, reward: 'claw'},
                    {creature: 'Vampire', cr: 8, reward: 'pancreas'},
                    {creature: 'Vrock', cr: 8, reward: 'neck'},

                    {creature: 'Anklyosaurus', cr: 9, reward: 'tail'},
                    {creature: 'Beige Dragon', cr: 9, reward: '*'},
                    {creature: 'Blue Dragon', cr: 9, reward: '*'},
                    {creature: 'Bone Devil', cr: 9, reward: 'hook'},
                    {creature: 'Bronze Dragon', cr: 9, reward: 'medal'},
                    {creature: 'Couatl', cr: 9, reward: 'wing'},
                    {creature: 'Hezrou', cr: 9, reward: 'leg'},
                    {creature: 'Jellyrock', cr: 9, reward: 'seedling'},
                    {creature: 'Mimic', cr: 9, reward: 'hinge'},
                    {creature: 'Naga', cr: 9, reward: 'rattle'},
                    {creature: 'Porcelain Giant', cr: 9, reward: 'fixture'},
                    {creature: 'Shedu', cr: 9, reward: 'hoof'},
                    {creature: 'Stone Giant', cr: 9, reward: 'hatchling'},
                    {creature: 'Will-o-the-Wisp', cr: 9, reward: 'wisp'},

                    {creature: '', cr: 10, reward: ''},

                  ]
})

  /*


K.Monsters = [

  'Bacon Elemental|10|bit',
  'Beholder|10|eyestalk',
  'Black Pudding|10|saliva',
  'Efreet|10|cinder',
  'Ettin|10|fur',
  'Frost Giant|10|snowman',
  'Ghost|10|*',
  'Glabrezu|10|collar',
  'Lurker|10|sac',
  'Quartz Giant|10|crystal',
  'Red Dragon|10|cocktail',
  'Shambling Mound|10|mulch',
  'Silver Dragon|10|*',
  'Sphinx|10|paw',
  'Treant|10|acorn',

  'Beef Giant|11|steak',
  'Fire Giant|11|cigarettes',
  'Ice Devil|11|snow',
  'Lich|11|crown',
  'Nalfeshnee|11|tusk',
  'Neo-Otyugh|11|organ ',
  'Remorhaz|11|protrusion',
  'Roper|11|twine',

  'Cloud Giant|12|condensation',
  'Humidity Giant|12|drops',
  'Mastodon|12|tusk',
  'Megalosaurus|12|jaw',
  'Pentasaurus|12|head',
  'Porn Elemental|12|lube',
  'Trapper|12|shag',

  'Dragon Turtle|13|shell',
  'Gorgosaurus|13|arm',
  'Pit Fiend|13|seed',

  'Baluchitherium|14|ear',
  'Cardboard Golem|14|recycling',
  'Cheese Elemental|14|curd',

  'Beer Golem|15|foam',
  'Elasmosaurus|15|neck',
  'Leather Golem|15|fob',
  'Purple Worm|15|dung',
  'Storm Giant|15|barometer',

  'Chromatic Dragon|16|scale',
  'Hair Elemental|16|follicle',
  'Rubber Golem|16|ball',
  'Triceratops|16|horn',

  'Jubilex|17|gel',
  'Oxygen Golem|17|platelet',

  'Roc|18|wing',
  'Stegosaurus|18|plate',
  'Tyranosauraus Rex|18|forearm',

  'Titan|20|sandal',

  'Platinum Dragon|21|*',

  'Diplodocus|24|fin',

  'Yeenoghu|25|flail',

  'Orcus|27|wand',

  'Dispater|30|matches',
  'Brontosaurus|30|brain',
  'Geryon|30|cornucopia',

  'Baalzebul|43|pants',

  'Asmodeus|52|leathers',

  'Demogorgon|53|tentacle'
  ];



















  assets_.DATA = {
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
        ['Locate the ', 'Locating the '],
        ['Find the ', 'Finding the '],
        ['Seek the ', 'Seeking the ']
      ]
    },
  



	assets_.getTask = getTask_;

	function getTask_() {
    var quests = assets_.DATA.TASK_TYPES;
    var quest = quests.FIND[Math.floor(Math.random() * quests.FIND.length)];
    var questItem = getQuestItem_();
		return {quest: quest, item: questItem};
	}

  function getQuestItem_() {
    var itemArray = assets_.DATA.QUEST_ITEMS
    var itemRarity = 0;
    var items, item;

    if(getRandomInt_(1, 100) < 26) {
      items = itemArray.ITEMS.SPECIAL;
      itemRarity += 1;
    } else {
      items = itemArray.ITEMS.MUNDANE;
    }
    item = items[Math.floor(Math.random() * items.length)];

    if(getRandomInt_(1, 100) < 26) {
      item = itemArray.PREFIXES[Math.floor(Math.random() * itemArray.PREFIXES.length)] + ' ' + item;
      itemRarity += 1;
    }

    if(getRandomInt_(1, 100) < 26) {
      item = item + ' of ' + itemArray.SUFFIXES[Math.floor(Math.random() * itemArray.SUFFIXES.length)];
      itemRarity += 1;
    }

    return {item: item, rarity: itemRarity};
    
  }

  function getRandomInt_(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }*/


/*


function SpecialItem() {
  return InterestingItem() + ' of ' + Pick(K.ItemOfs);
}

function InterestingItem() {
  return Pick(K.ItemAttrib) + ' ' + Pick(K.Specials);
}

function BoringItem() {
  return Pick(K.BoringItems);
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



































var K = {};

K.Traits = ["Name", "Race", "Class", "Level"];

K.PrimeStats = ["STR","CON","DEX","INT","WIS","CHA"];
K.Stats = K.PrimeStats.slice(0).concat(["HP Max","MP Max"]);

K.Equips = ["Weapon",
            "Shield",
            "Helm",
            "Hauberk",
            "Brassairts",
            "Vambraces",
            "Gauntlets",
            "Gambeson",
            "Cuisses",
            "Greaves",
            "Sollerets"];

K.Spells = [
  "Slime Finger",
  "Rabbit Punch",
  "Hastiness",
  "Good Move",
  "Sadness",
  "Seasick",
  "Gyp",
  "Shoelaces",
  "Innoculate",
  "Cone of Annoyance",
  "Magnetic Orb",
  "Invisible Hands",
  "Revolting Cloud",
  "Aqueous Humor",
  "Spectral Miasma",
  "Clever Fellow",
  "Lockjaw",
  "History Lesson",
  "Hydrophobia",
  "Big Sister",
  "Cone of Paste",
  "Mulligan",
  "Nestor's Bright Idea",
  "Holy Batpole",
  "Tumor (Benign)",
  "Braingate",
  "Summon a Bitch",
  "Nonplus",
  "Animate Nightstand",
  "Eye of the Troglodyte",
  "Curse Name",
  "Dropsy",
  "Vitreous Humor",
  "Roger's Grand Illusion",
  "Covet",
  "Black Idaho",
  "Astral Miasma",
  "Spectral Oyster",
  "Acrid Hands",
  "Angioplasty",
  "Grognor's Big Day Off",
  "Tumor (Malignant)",
  "Animate Tunic",
  "Ursine Armor",
  "Holy Roller",
  "Tonsilectomy",
  "Curse Family",
  "Infinite Confusion"];

K.OffenseAttrib = [
  "Polished|+1",
  "Serrated|+1",
  "Heavy|+1",
  "Pronged|+2",
  "Steely|+2",
  "Vicious|+3",
  "Venomed|+4",
  "Stabbity|+4",
  "Dancing|+5",
  "Invisible|+6",
  "Vorpal|+7"];

K.DefenseAttrib = [
  "Studded|+1",
  "Banded|+2",
  "Gilded|+2",
  "Festooned|+3",
  "Holy|+4",
  "Cambric|+1",
  "Fine|+4",
  "Impressive|+5",
  "Custom|+3"];

K.Shields = [
  "Parasol|0",
  "Pie Plate|1",
  "Garbage Can Lid|2",
  "Buckler|3",
  "Plexiglass|4",
  "Fender|4",
  "Round Shield|5",
  "Carapace|5",
  "Scutum|6",
  "Propugner|6",
  "Kite Shield|7",
  "Pavise|8",
  "Tower Shield|9",
  "Baroque Shield|11",
  "Aegis|12",
  "Magnetic Field|18"];

K.Armors = [
  "Lace|1",
  "Macrame|2",
  "Burlap|3",
  "Canvas|4",
  "Flannel|5",
  "Chamois|6",
  "Pleathers|7",
  "Leathers|8",
  "Bearskin|9",
  "Ringmail|10",
  "Scale Mail|12",
  "Chainmail|14",
  "Splint Mail|15",
  "Platemail|16",
  "ABS|17",
  "Kevlar|18",
  "Titanium|19",
  "Mithril Mail|20",
  "Diamond Mail|25",
  "Plasma|30"];

K.Weapons = [
  "Stick|0",
  "Broken Bottle|1",
  "Shiv|1",
  "Sprig|1",
  "Oxgoad|1",
  "Eelspear|2",
  "Bowie Knife|2",
  "Claw Hammer|2",
  "Handpeen|2",
  "Andiron|3",
  "Hatchet|3",
  "Tomahawk|3",
  "Hackbarm|3",
  "Crowbar|4",
  "Mace|4",
  "Battleadze|4",
  "Leafmace|5",
  "Shortsword|5",
  "Longiron|5",
  "Poachard|5",
  "Baselard|5",
  "Whinyard|6",
  "Blunderbuss|6",
  "Longsword|6",
  "Crankbow|6",
  "Blibo|7",
  "Broadsword|7",
  "Kreen|7",
  "Warhammer|7",
  "Morning Star|8",
  "Pole-adze|8",
  "Spontoon|8",
  "Bastard Sword|9",
  "Peen-arm|9",
  "Culverin|10",
  "Lance|10",
  "Halberd|11",
  "Poleax|12",
  "Bandyclef|15"];

K.Specials = [
  "Diadem",
  "Festoon",
  "Gemstone",
  "Phial",
  "Tiara",
  "Scabbard",
  "Arrow",
  "Lens",
  "Lamp",
  "Hymnal",
  "Fleece",
  "Laurel",
  "Brooch",
  "Gimlet",
  "Cobble",
  "Albatross",
  "Brazier",
  "Bandolier",
  "Tome",
  "Garnet",
  "Amethyst",
  "Candelabra",
  "Corset",
  "Sphere",
  "Sceptre",
  "Ankh",
  "Talisman",
  "Orb",
  "Gammel",
  "Ornament",
  "Brocade",
  "Galoon",
  "Bijou",
  "Spangle",
  "Gimcrack",
  "Hood",
  "Vulpeculum"];

K.ItemAttrib = [
  "Golden",
  "Gilded",
  "Spectral",
  "Astral",
  "Garlanded",
  "Precious",
  "Crafted",
  "Dual",
  "Filigreed",
  "Cruciate",
  "Arcane",
  "Blessed",
  "Reverential",
  "Lucky",
  "Enchanted",
  "Gleaming",
  "Grandiose",
  "Sacred",
  "Legendary",
  "Mythic",
  "Crystalline",
  "Austere",
  "Ostentatious",
  "One True",
  "Proverbial",
  "Fearsome",
  "Deadly",
  "Benevolent",
  "Unearthly",
  "Magnificent",
  "Iron",
  "Ormolu",
  "Puissant"];

K.ItemOfs = [
  "Foreboding",
  "Foreshadowing",
  "Nervousness",
  "Happiness",
  "Torpor",
  "Danger",
  "Craft",
  "Silence",
  "Invisibility",
  "Rapidity",
  "Pleasure",
  "Practicality",
  "Hurting",
  "Joy",
  "Petulance",
  "Intrusion",
  "Chaos",
  "Suffering",
  "Extroversion",
  "Frenzy",
  "Sisu",
  "Solitude",
  "Punctuality",
  "Efficiency",
  "Comfort",
  "Patience",
  "Internment",
  "Incarceration",
  "Misapprehension",
  "Loyalty",
  "Envy",
  "Acrimony",
  "Worry",
  "Fear",
  "Awe",
  "Guile",
  "Prurience",
  "Fortune",
  "Perspicacity",
  "Domination",
  "Submission",
  "Fealty",
  "Hunger",
  "Despair",
  "Cruelty",
  "Grob",
  "Dignard",
  "Ra",
  "the Bone",
  "Diamonique",
  "Electrum",
  "Hydragyrum"];

K.BoringItems = [
  "nail",
  "lunchpail",
  "sock",
  "I.O.U.",
  "cookie",
  "pint",
  "toothpick",
  "writ",
  "newspaper",
  "letter",
  "plank",
  "hat",
  "egg",
  "coin",
  "needle",
  "bucket",
  "ladder",
  "chicken",
  "twig",
  "dirtclod",
  "counterpane",
  "vest",
  "teratoma",
  "bunny",
  "rock",
  "pole",
  "carrot",
  "canoe",
  "inkwell",
  "hoe",
  "bandage",
  "trowel",
  "towel",
  "planter box",
  "anvil",
  "axle",
  "tuppence",
  "casket",
  "nosegay",
  "trinket",
  "credenza",
  "writ"];

K.Monsters = [
  "Anhkheg|6|chitin",
  "Ant|0|antenna",
  "Ape|4|ass",
  "Baluchitherium|14|ear",
  "Beholder|10|eyestalk",
  "Black Pudding|10|saliva",
  "Blink Dog|4|eyelid",
  "Cub Scout|1|neckerchief",
  "Girl Scout|2|cookie",
  "Boy Scout|3|merit badge",
  "Eagle Scout|4|merit badge",
  "Bugbear|3|skin",
  "Bugboar|3|tusk",
  "Boogie|3|slime",
  "Camel|2|hump",
  "Carrion Crawler|3|egg",
  "Catoblepas|6|neck",
  "Centaur|4|rib",
  "Centipede|0|leg",
  "Cockatrice|5|wattle",
  "Couatl|9|wing",
  "Crayfish|0|antenna",
  "Demogorgon|53|tentacle",
  "Jubilex|17|gel",
  "Manes|1|tooth",
  "Orcus|27|wand",
  "Succubus|6|bra",
  "Vrock|8|neck",
  "Hezrou|9|leg",
  "Glabrezu|10|collar",
  "Nalfeshnee|11|tusk",
  "Marilith|7|arm",
  "Balor|8|whip",
  "Yeenoghu|25|flail",
  "Asmodeus|52|leathers",
  "Baalzebul|43|pants",
  "Barbed Devil|8|flame",
  "Bone Devil|9|hook",
  "Dispater|30|matches",
  "Erinyes|6|thong",
  "Geryon|30|cornucopia",
  "Malebranche|5|fork",
  "Ice Devil|11|snow",
  "Lemure|3|blob",
  "Pit Fiend|13|seed",
  "Anklyosaurus|9|tail",
  "Brontosaurus|30|brain",
  "Diplodocus|24|fin",
  "Elasmosaurus|15|neck",
  "Gorgosaurus|13|arm",
  "Iguanadon|6|thumb",
  "Megalosaurus|12|jaw",
  "Monoclonius|8|horn",
  "Pentasaurus|12|head",
  "Stegosaurus|18|plate",
  "Triceratops|16|horn",
  "Tyranosauraus Rex|18|forearm",
  "Djinn|7|lamp",
  "Doppleganger|4|face",
  "Black Dragon|7|*",
  "Plaid Dragon|7|sporrin",
  "Blue Dragon|9|*",
  "Beige Dragon|9|*",
  "Brass Dragon|7|pole",
  "Tin Dragon|8|*",
  "Bronze Dragon|9|medal",
  "Chromatic Dragon|16|scale",
  "Copper Dragon|8|loafer",
  "Gold Dragon|8|filling",
  "Green Dragon|8|*",
  "Platinum Dragon|21|*",
  "Red Dragon|10|cocktail",
  "Silver Dragon|10|*",
  "White Dragon|6|tooth",
  "Dragon Turtle|13|shell",
  "Dryad|2|acorn",
  "Dwarf|1|drawers",
  "Eel|2|sashimi",
  "Efreet|10|cinder",
  "Sand Elemental|8|glass",
  "Bacon Elemental|10|bit",
  "Porn Elemental|12|lube",
  "Cheese Elemental|14|curd",
  "Hair Elemental|16|follicle",
  "Swamp Elf|1|lilypad",
  "Brown Elf|1|tusk",
  "Sea Elf|1|jerkin",
  "Ettin|10|fur",
  "Frog|0|leg",
  "Violet Fungi|3|spore",
  "Gargoyle|4|gravel",
  "Gelatinous Cube|4|jam",
  "Ghast|4|vomit",
  "Ghost|10|*",
  "Ghoul|2|muscle",
  "Humidity Giant|12|drops",
  "Beef Giant|11|steak",
  "Quartz Giant|10|crystal",
  "Porcelain Giant|9|fixture",
  "Rice Giant|8|grain",
  "Cloud Giant|12|condensation",
  "Fire Giant|11|cigarettes",
  "Frost Giant|10|snowman",
  "Hill Giant|8|corpse",
  "Stone Giant|9|hatchling",
  "Storm Giant|15|barometer",
  "Mini Giant|4|pompadour",
  "Gnoll|2|collar",
  "Gnome|1|hat",
  "Goblin|1|ear",
  "Grid Bug|1|carapace",
  "Jellyrock|9|seedling",
  "Beer Golem|15|foam",
  "Oxygen Golem|17|platelet",
  "Cardboard Golem|14|recycling",
  "Rubber Golem|16|ball",
  "Leather Golem|15|fob",
  "Gorgon|8|testicle",
  "Gray Ooze|3|gravy",
  "Green Slime|2|sample",
  "Griffon|7|nest",
  "Banshee|7|larynx",
  "Harpy|3|mascara",
  "Hell Hound|5|tongue",
  "Hippocampus|4|mane",
  "Hippogriff|3|egg",
  "Hobgoblin|1|patella",
  "Homonculus|2|fluid",
  "Hydra|8|gyrum",
  "Imp|2|tail",
  "Invisible Stalker|8|*",
  "Iron Peasant|3|chaff",
  "Jumpskin|3|shin",
  "Kobold|1|penis",
  "Leprechaun|1|wallet",
  "Leucrotta|6|hoof",
  "Lich|11|crown",
  "Lizard Man|2|tail",
  "Lurker|10|sac",
  "Manticore|6|spike",
  "Mastodon|12|tusk",
  "Medusa|6|eye",
  "Multicell|2|dendrite",
  "Pirate|1|booty",
  "Berserker|1|shirt",
  "Caveman|2|club",
  "Dervish|1|robe",
  "Merman|1|trident",
  "Mermaid|1|gills",
  "Mimic|9|hinge",
  "Mind Flayer|8|tentacle",
  "Minotaur|6|map",
  "Yellow Mold|1|spore",
  "Morkoth|7|teeth",
  "Mummy|6|gauze",
  "Naga|9|rattle",
  "Nebbish|1|belly",
  "Neo-Otyugh|11|organ ",
  "Nixie|1|webbing",
  "Nymph|3|hanky",
  "Ochre Jelly|6|nucleus",
  "Octopus|2|beak",
  "Ogre|4|talon",
  "Ogre Mage|5|apparel",
  "Orc|1|snout",
  "Otyugh|7|organ",
  "Owlbear|5|feather",
  "Pegasus|4|aileron",
  "Peryton|4|antler",
  "Piercer|3|tip",
  "Pixie|1|dust",
  "Man-o-war|3|tentacle",
  "Purple Worm|15|dung",
  "Quasit|3|tail",
  "Rakshasa|7|pajamas",
  "Rat|0|tail",
  "Remorhaz|11|protrusion",
  "Roc|18|wing",
  "Roper|11|twine",
  "Rot Grub|1|eggsac",
  "Rust Monster|5|shavings",
  "Satyr|5|hoof",
  "Sea Hag|3|wart",
  "Silkie|3|fur",
  "Shadow|3|silhouette",
  "Shambling Mound|10|mulch",
  "Shedu|9|hoof",
  "Shrieker|3|stalk",
  "Skeleton|1|clavicle",
  "Spectre|7|vestige",
  "Sphinx|10|paw",
  "Spider|0|web",
  "Sprite|1|can",
  "Stirge|1|proboscis",
  "Stun Bear|5|tooth",
  "Stun Worm|2|trode",
  "Su-monster|5|tail",
  "Sylph|3|thigh",
  "Titan|20|sandal",
  "Trapper|12|shag",
  "Treant|10|acorn",
  "Triton|3|scale",
  "Troglodyte|2|tail",
  "Troll|6|hide",
  "Umber Hulk|8|claw",
  "Unicorn|4|blood",
  "Vampire|8|pancreas",
  "Wight|4|lung",
  "Will-o'-the-Wisp|9|wisp",
  "Wraith|5|finger",
  "Wyvern|7|wing",
  "Xorn|7|jaw",
  "Yeti|4|fur",
  "Zombie|2|forehead",
  "Wasp|0|stinger",
  "Rat|1|tail",
  "Bunny|0|ear",
  "Moth|0|dust",
  "Beagle|0|collar",
  "Midge|0|corpse",
  "Ostrich|1|beak",
  "Billy Goat|1|beard",
  "Bat|1|wing",
  "Koala|2|heart",
  "Wolf|2|paw",
  "Whippet|2|collar",
  "Uruk|2|boot",
  "Poroid|4|node",
  "Moakum|8|frenum",
  "Fly|0|*",
  "Hogbird|3|curl",
  "Wolog|4|lemma"];

K.MonMods = [
  "-4 fœtal *",
  "-4 dying *",
  "-3 crippled *",
  "-3 baby *",
  "-2 adolescent",
  "-2 very sick *",
  "-1 lesser *",
  "-1 undernourished *",
  "+1 greater *",
  "+1 * Elder",
  "+2 war *",
  "+2 Battle-*",
  "+3 Were-*",
  "+3 undead *",
  "+4 giant *",
  "+4 * Rex"];

K.OffenseBad = [
  "Dull|-2",
  "Tarnished|-1",
  "Rusty|-3",
  "Padded|-5",
  "Bent|-4",
  "Mini|-4",
  "Rubber|-6",
  "Nerf|-7",
  "Unbalanced|-2"];

K.DefenseBad = [
  "Holey|-1",
  "Patched|-1",
  "Threadbare|-2",
  "Faded|-1",
  "Rusty|-3",
  "Motheaten|-3",
  "Mildewed|-2",
  "Torn|-3",
  "Dented|-3",
  "Cursed|-5",
  "Plastic|-4",
  "Cracked|-4",
  "Warped|-3",
  "Corroded|-3"];

K.Races = [
  "Half Orc|HP Max",
  "Half Man|CHA",
  "Half Halfling|DEX",
  "Double Hobbit|STR",
  "Hob-Hobbit|DEX,CON",
  "Low Elf|CON",
  "Dung Elf|WIS",
  "Talking Pony|MP Max,INT",
  "Gyrognome|DEX",
  "Lesser Dwarf|CON",
  "Crested Dwarf|CHA",
  "Eel Man|DEX",
  "Panda Man|CON,STR",
  "Trans-Kobold|WIS",
  "Enchanted Motorcycle|MP Max",
  "Will o' the Wisp|WIS",
  "Battle-Finch|DEX,INT",
  "Double Wookiee|STR",
  "Skraeling|WIS",
  "Demicanadian|CON",
  "Land Squid|STR,HP Max"];

K.Klasses = [
  "Ur-Paladin|WIS,CON",
  "Voodoo Princess|INT,CHA",
  "Robot Monk|STR",
  "Mu-Fu Monk|DEX",
  "Mage Illusioner|INT,MP Max",
  "Shiv-Knight|DEX",
  "Inner Mason|CON",
  "Fighter/Organist|CHA,STR",
  "Puma Burgular|DEX",
  "Runeloremaster|WIS",
  "Hunter Strangler|DEX,INT",
  "Battle-Felon|STR",
  "Tickle-Mimic|WIS,INT",
  "Slow Poisoner|CON",
  "Bastard Lunatic|CON",
  "Lowling|WIS",
  "Birdrider|WIS",
  "Vermineer|INT"];

K.Titles = [
  "Mr.",
  "Mrs.",
  "Sir",
  "Sgt.",
  "Ms.",
  "Captain",
  "Chief",
  "Admiral",
  "Saint"];

K.ImpressiveTitles = [
  "King",
  "Queen",
  "Lord",
  "Lady",
  "Viceroy",
  "Mayor",
  "Prince",
  "Princess",
  "Chief",
  "Boss",
  "Archbishop"];











  

*/



