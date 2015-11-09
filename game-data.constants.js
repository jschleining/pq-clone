angular.module('pq-clone')

.constant('GameConstants', {
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
                        {name: 'Battle-', modifier: 1},
                        {name: 'Were-', modifier: 1},
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
    {creature: 'Wasp', cr: 0, reward: 'stinger'}
  ]
})



  /*





K.Monsters = [
  
  
  'Bat|1|wing',
  'Berserker|1|shirt',
  'Billy Goat|1|beard',
  'Brown Elf|1|tusk',
  'Cub Scout|1|neckerchief',
  'Dervish|1|robe',
  'Dwarf|1|drawers',
  'Gnome|1|hat',
  'Goblin|1|ear',
  'Grid Bug|1|carapace',
  'Hobgoblin|1|patella',
  'Kobold|1|penis',
  'Leprechaun|1|wallet',
  'Manes|1|tooth',
  'Merman|1|trident',
  'Mermaid|1|gills',
  'Nebbish|1|belly',
  'Nixie|1|webbing',
  'Orc|1|snout',
  'Ostrich|1|beak',
  'Pirate|1|booty',
  'Pixie|1|dust',
  'Rat|1|tail',
  'Rot Grub|1|eggsac',
  'Sea Elf|1|jerkin',
  'Skeleton|1|clavicle',
  'Sprite|1|can',
  'Stirge|1|proboscis',
  'Swamp Elf|1|lilypad',
  'Yellow Mold|1|spore',
  'Camel|2|hump',
  'Caveman|2|club',
  'Dryad|2|acorn',
  'Eel|2|sashimi',
  'Ghoul|2|muscle',
  'Girl Scout|2|cookie',
  'Gnoll|2|collar',
  'Green Slime|2|sample',
  'Homonculus|2|fluid',
  'Imp|2|tail',
  'Koala|2|heart',
  'Lizard Man|2|tail',
  'Multicell|2|dendrite',
  'Octopus|2|beak',
  'Stun Worm|2|trode',
  'Troglodyte|2|tail',
  'Uruk|2|boot',
  'Whippet|2|collar',
  'Wolf|2|paw',
  'Zombie|2|forehead',
  'Boy Scout|3|merit badge',
  'Bugbear|3|skin',
  'Bugboar|3|tusk',
  'Boogie|3|slime',
  'Carrion Crawler|3|egg',
  'Gray Ooze|3|gravy',
  'Harpy|3|mascara',
  'Hippogriff|3|egg',
  'Hogbird|3|curl',
  'Iron Peasant|3|chaff',
  'Jumpskin|3|shin',
  'Lemure|3|blob',
  'Man-o-war|3|tentacle',
  'Nymph|3|hanky',
  'Piercer|3|tip',
  'Quasit|3|tail',
  'Sea Hag|3|wart',
  'Silkie|3|fur',
  'Shadow|3|silhouette',
  'Shrieker|3|stalk',
  'Sylph|3|thigh',
  'Triton|3|scale',
  'Violet Fungi|3|spore',
  'Ape|4|ass',
  'Blink Dog|4|eyelid',
  'Centaur|4|rib',
  'Doppleganger|4|face',
  'Eagle Scout|4|merit badge',
  'Gargoyle|4|gravel',
  'Gelatinous Cube|4|jam',
  'Ghast|4|vomit',
  'Hippocampus|4|mane',
  'Mini Giant|4|pompadour',
  'Ogre|4|talon',
  'Pegasus|4|aileron',
  'Peryton|4|antler',
  'Poroid|4|node',
  'Unicorn|4|blood',
  'Wight|4|lung',
  'Wolog|4|lemma',
  'Yeti|4|fur',
  'Cockatrice|5|wattle',
  'Hell Hound|5|tongue',
  'Malebranche|5|fork',
  'Ogre Mage|5|apparel',
  'Owlbear|5|feather',
  'Rust Monster|5|shavings',
  'Satyr|5|hoof',
  'Stun Bear|5|tooth',
  'Su-monster|5|tail',
  'Wraith|5|finger',
  'Anhkheg|6|chitin',
  'Catoblepas|6|neck',
  'Erinyes|6|thong',
  'Iguanadon|6|thumb',
  'Leucrotta|6|hoof',
  'Manticore|6|spike',
  'Medusa|6|eye',
  'Minotaur|6|map',
  'Mummy|6|gauze',
  'Ochre Jelly|6|nucleus',
  'Succubus|6|bra',
  'Troll|6|hide',
  'White Dragon|6|tooth',
  'Banshee|7|larynx',
  'Black Dragon|7|*',
  'Brass Dragon|7|pole',
  'Djinn|7|lamp',
  'Griffon|7|nest',
  'Marilith|7|arm',
  'Morkoth|7|teeth',
  'Otyugh|7|organ',
  'Plaid Dragon|7|sporrin',
  'Rakshasa|7|pajamas',
  'Spectre|7|vestige',
  'Wyvern|7|wing',
  'Xorn|7|jaw',
  'Balor|8|whip',
  'Barbed Devil|8|flame',
  'Copper Dragon|8|loafer',
  'Gold Dragon|8|filling',
  'Gorgon|8|testicle',
  'Green Dragon|8|*',
  'Hill Giant|8|corpse',
  'Hydra|8|gyrum',
  'Invisible Stalker|8|*',
  'Mind Flayer|8|tentacle',
  'Moakum|8|frenum',
  'Monoclonius|8|horn',
  'Rice Giant|8|grain',
  'Sand Elemental|8|glass',
  'Tin Dragon|8|*',
  'Umber Hulk|8|claw',
  'Vampire|8|pancreas',
  'Vrock|8|neck',
  'Anklyosaurus|9|tail',
  'Beige Dragon|9|*',
  'Blue Dragon|9|*',
  'Bone Devil|9|hook',
  'Bronze Dragon|9|medal',
  'Couatl|9|wing',
  'Hezrou|9|leg',
  'Jellyrock|9|seedling',
  'Mimic|9|hinge',
  'Naga|9|rattle',
  'Porcelain Giant|9|fixture',
  'Shedu|9|hoof',
  'Stone Giant|9|hatchling',
  'Will-o'-the-Wisp|9|wisp',
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

  'Ant|0|antenna',
  'Beagle|0|collar',
  'Bunny|0|ear',
  'Centipede|0|leg',
  'Crayfish|0|antenna',
  'Fly|0|*',
  'Frog|0|leg',
  'Midge|0|corpse',
  'Moth|0|dust',
  'Rat|0|tail',
  'Spider|0|web',
  'Wasp|0|stinger',
  ];








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

*/



