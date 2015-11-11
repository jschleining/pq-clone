angular.module('pq-clone')

.constant('GameConstants', {
  NAME_PARTS: [
                ['br', 'cr', 'dr', 'fr', 'gr', 'j', 'kr', 'l', 'm', 'n', 'pr', 'r', 'sh', 'tr', 'v', 'wh', 'x', 'y', 'z'],
                ['a', 'a', 'e', 'e', 'i', 'i', 'o', 'o', 'u', 'u', 'ae', 'ei', 'oo', 'ou'],
                ['b', 'ck', 'd', 'g', 'k', 'm', 'n', 'p', 't', 'v', 'x', 'z']
              ],
  QUEST_ITEM_PREFIXES:  [
                          'arcane',
                          'astral',
                          'austere',
                          'benevolent',
                          'blessed',
                          'crafted',
                          'cruciate',
                          'crystalline',
                          'deadly',
                          'dual',
                          'enchanted',
                          'fearsome',
                          'filigreed',
                          'garlanded',
                          'gilded',
                          'gleaming',
                          'golden',
                          'grandiose',
                          'iron',
                          'legendary',
                          'lucky',
                          'magnificent',
                          'mythic',
                          'one True',
                          'ormolu',
                          'ostentatious',
                          'precious',
                          'proverbial',
                          'puissant',
                          'reverential',
                          'sacred',
                          'spectral',
                          'unearthly'
                        ],
  QUEST_ITEM_SUFFIXES:  [
                          'acrimony',
                          'awe',
                          'chaos',
                          'comfort',
                          'craft',
                          'cruelty',
                          'danger',
                          'despair',
                          'diamonique',
                          'dignard',
                          'domination',
                          'efficiency',
                          'electrum',
                          'envy',
                          'extroversion',
                          'fealty',
                          'fear',
                          'foreboding',
                          'foreshadowing',
                          'fortune',
                          'frenzy',
                          'grob',
                          'guile',
                          'happiness',
                          'hunger',
                          'hurting',
                          'hydragyrum',
                          'incarceration',
                          'internment',
                          'intrusion',
                          'invisibility',
                          'joy',
                          'loyalty',
                          'misapprehension',
                          'nervousness',
                          'patience',
                          'perspicacity',
                          'petulance',
                          'pleasure',
                          'practicality',
                          'prurience',
                          'punctuality',
                          'ra',
                          'rapidity',
                          'silence',
                          'sisu',
                          'solitude',
                          'submission',
                          'suffering',
                          'the Bone',
                          'torpor',
                          'worry'
                        ],
  QUEST_ITEMS_MUNDANE:  [
                          'anvil',
                          'arrow',
                          'axle',
                          'bandage',
                          'bandolier',
                          'bucket',
                          'bunny',
                          'canoe',
                          'carrot',
                          'casket',
                          'chicken',
                          'coin',
                          'cookie',
                          'counterpane',
                          'credenza',
                          'dirtclod',
                          'egg',
                          'hat',
                          'hoe',
                          'hood',
                          'I.O.U.',
                          'inkwell',
                          'ladder',
                          'letter',
                          'lunchpail',
                          'nail',
                          'needle',
                          'newspaper',
                          'nosegay',
                          'pint',
                          'plank',
                          'planter box',
                          'pole',
                          'rock',
                          'scabbard',
                          'sock',
                          'teratoma',
                          'toothpick',
                          'towel',
                          'trinket',
                          'trowel',
                          'tuppence',
                          'twig',
                          'vest',
                          'writ'
                        ],
  QUEST_ITEMS_SPECIAL:  [
                          'albatross',
                          'amethyst',
                          'ankh',
                          'arrow',
                          'bandolier',
                          'bijou',
                          'brazier',
                          'brocade',
                          'brooch',
                          'candelabra',
                          'casket',
                          'cobble',
                          'corset',
                          'diadem',
                          'festoon',
                          'fleece',
                          'galoon',
                          'gammel',
                          'garnet',
                          'gemstone',
                          'gimcrack',
                          'gimlet',
                          'hood',
                          'hymnal',
                          'lamp',
                          'laurel',
                          'lens',
                          'orb',
                          'ornament',
                          'phial',
                          'scabbard',
                          'sceptre',
                          'spangle',
                          'sphere',
                          'talisman',
                          'tiara',
                          'tome',
                          'towel',
                          'vulpeculum',
                          'writ'
                        ],
  MONSTER_PREFIXES: [
                      {name: 'foetal', modifier: -4},
                      {name: 'baby', modifier: -3},
                      {name: 'adolescent', modifier: -2},
                      {name: 'elder', modifier: -1},

                      {name: 'dying', modifier: -4},
                      {name: 'crippled', modifier: -3},
                      {name: 'very sick', modifier: -2},
                      {name: 'malnourished', modifier: -1},
                      {name: 'lesser', modifier: -1},
                      {name: 'greater', modifier: 1},
                      {name: 'robust', modifier: 1},
                      {name: 'strong', modifier: 2},
                      {name: 'mighty', modifier: 3},
                    ],
  MONSTER_TEMPLATES: [ // TODO: Add Exclusions so only certain types can have certain templates, also, expand. 
                        // I want a mighty half-elf half-giant undead were-rat wizard
                        {name: 'war', modifier: 1},
                        {name: 'battle', modifier: 1},
                        {name: 'were', modifier: 1},
                        {name: 'giant', modifier: 1},
                        {name: 'undead', modifier: 1},
                     ],
  MONSTER_MANUAL: [ // TODO: Make this more sophisticated - use proper CRs, treasure, rarity, grouping, type, subtype, etc
                    {creature: 'ant', cr: 0, reward: 'antenna'},
                    {creature: 'beagle', cr: 0, reward: 'collar'},
                    {creature: 'bunny', cr: 0, reward: 'ear'},
                    {creature: 'centipede', cr: 0, reward: 'leg'},
                    {creature: 'crayfish', cr: 0, reward: 'antenna'},
                    {creature: 'fly', cr: 0, reward: ''},
                    {creature: 'frog', cr: 0, reward: 'leg'},
                    {creature: 'midge', cr: 0, reward: 'corpse'},
                    {creature: 'moth', cr: 0, reward: 'dust'},
                    {creature: 'rat', cr: 0, reward: 'tail'},
                    {creature: 'spider', cr: 0, reward: 'web'},
                    {creature: 'wasp', cr: 0, reward: 'stinger'},

                    {creature: 'bat', cr: 1, reward: 'wing'},
                    {creature: 'berserker', cr: 1, reward: 'shirt'},
                    {creature: 'billy goat', cr: 1, reward: 'beard'},
                    {creature: 'brown elf', cr: 1, reward: 'tusk'},
                    {creature: 'cub scout', cr: 1, reward: 'neckerchief'},
                    {creature: 'dervish', cr: 1, reward: 'robe'},
                    {creature: 'dwarf', cr: 1, reward: 'drawers'},
                    {creature: 'gnome', cr: 1, reward: 'hat'},
                    {creature: 'goblin', cr: 1, reward: 'ear'},
                    {creature: 'grid bug', cr: 1, reward: 'carapace'},
                    {creature: 'hobgoblin', cr: 1, reward: 'patella'},
                    {creature: 'kobold', cr: 1, reward: 'penis'},
                    {creature: 'leprechaun', cr: 1, reward: 'wallet'},
                    {creature: 'manes', cr: 1, reward: 'tooth'},
                    {creature: 'merman', cr: 1, reward: 'trident'},
                    {creature: 'mermaid', cr: 1, reward: 'gills'},
                    {creature: 'nebbish', cr: 1, reward: 'belly'},
                    {creature: 'nixie', cr: 1, reward: 'webbing'},
                    {creature: 'orc', cr: 1, reward: 'snout'},
                    {creature: 'ostrich', cr: 1, reward: 'beak'},
                    {creature: 'pirate', cr: 1, reward: 'booty'},
                    {creature: 'pixie', cr: 1, reward: 'dust'},
                    {creature: 'rat', cr: 1, reward: 'tail'},
                    {creature: 'rot grub', cr: 1, reward: 'eggsac'},
                    {creature: 'sea elf', cr: 1, reward: 'jerkin'},
                    {creature: 'skeleton', cr: 1, reward: 'clavicle'},
                    {creature: 'sprite', cr: 1, reward: 'can'},
                    {creature: 'stirge', cr: 1, reward: 'proboscis'},
                    {creature: 'swamp elf', cr: 1, reward: 'lilypad'},
                    {creature: 'yellow mold', cr: 1, reward: 'spore'},

                    {creature: 'camel', cr: 2, reward: 'hump'},
                    {creature: 'caveman', cr: 2, reward: 'club'},
                    {creature: 'dryad', cr: 2, reward: 'acorn'},
                    {creature: 'eel', cr: 2, reward: 'sashimi'},
                    {creature: 'ghoul', cr: 2, reward: 'muscle'},
                    {creature: 'girl scout', cr: 2, reward: 'cookie'},
                    {creature: 'gnoll', cr: 2, reward: 'collar'},
                    {creature: 'green slime', cr: 2, reward: 'sample'},
                    {creature: 'homonculus', cr: 2, reward: 'fluid'},
                    {creature: 'imp', cr: 2, reward: 'tail'},
                    {creature: 'koala', cr: 2, reward: 'heart'},
                    {creature: 'lizard man', cr: 2, reward: 'tail'},
                    {creature: 'multicell', cr: 2, reward: 'dendrite'},
                    {creature: 'octopus', cr: 2, reward: 'beak'},
                    {creature: 'stun Worm', cr: 2, reward: 'trode'},
                    {creature: 'troglodyte', cr: 2, reward: 'tail'},
                    {creature: 'uruk', cr: 2, reward: 'boot'},
                    {creature: 'whippet', cr: 2, reward: 'collar'},
                    {creature: 'wolf', cr: 2, reward: 'paw'},
                    {creature: 'zombie', cr: 2, reward: 'forehead'},

                    {creature: 'boy scout', cr: 3, reward: 'merit badge'},
                    {creature: 'bugbear', cr: 3, reward: 'skin'},
                    {creature: 'bugboar', cr: 3, reward: 'tusk'},
                    {creature: 'boogie', cr: 3, reward: 'slime'},
                    {creature: 'carrion crawler', cr: 3, reward: 'egg'},
                    {creature: 'gray ooze', cr: 3, reward: 'gravy'},
                    {creature: 'harpy', cr: 3, reward: 'mascara'},
                    {creature: 'hippogriff', cr: 3, reward: 'egg'},
                    {creature: 'hogbird', cr: 3, reward: 'curl'},
                    {creature: 'iron peasant', cr: 3, reward: 'chaff'},
                    {creature: 'jumpskin', cr: 3, reward: 'shin'},
                    {creature: 'lemure', cr: 3, reward: 'blob'},
                    {creature: 'man-o-war', cr: 3, reward: 'tentacle'},
                    {creature: 'nymph', cr: 3, reward: 'hanky'},
                    {creature: 'piercer', cr: 3, reward: 'tip'},
                    {creature: 'quasit', cr: 3, reward: 'tail'},
                    {creature: 'sea Hag', cr: 3, reward: 'wart'},
                    {creature: 'silkie', cr: 3, reward: 'fur'},
                    {creature: 'shadow', cr: 3, reward: 'silhouette'},
                    {creature: 'shrieker', cr: 3, reward: 'stalk'},
                    {creature: 'sylph', cr: 3, reward: 'thigh'},
                    {creature: 'triton', cr: 3, reward: 'scale'},
                    {creature: 'violet fungi', cr: 3, reward: 'spore'},

                    {creature: 'ape', cr: 4, reward: 'ass'},
                    {creature: 'blink dog', cr: 4, reward: 'eyelid'},
                    {creature: 'centaur', cr: 4, reward: 'rib'},
                    {creature: 'doppleganger', cr: 4, reward: 'face'},
                    {creature: 'eagle scout', cr: 4, reward: 'merit badge'},
                    {creature: 'gargoyle', cr: 4, reward: 'gravel'},
                    {creature: 'gelatinous cube', cr: 4, reward: 'jam'},
                    {creature: 'ghast', cr: 4, reward: 'vomit'},
                    {creature: 'hippocampus', cr: 4, reward: 'mane'},
                    {creature: 'mini giant', cr: 4, reward: 'pompadour'},
                    {creature: 'ogre', cr: 4, reward: 'talon'},
                    {creature: 'pegasus', cr: 4, reward: 'aileron'},
                    {creature: 'peryton', cr: 4, reward: 'antler'},
                    {creature: 'poroid', cr: 4, reward: 'node'},
                    {creature: 'unicorn', cr: 4, reward: 'blood'},
                    {creature: 'wight', cr: 4, reward: 'lung'},
                    {creature: 'wolog', cr: 4, reward: 'lemma'},
                    {creature: 'yeti', cr: 4, reward: 'fur'},

                    {creature: 'cockatrice', cr: 5, reward: 'wattle'},
                    {creature: 'hell hound', cr: 5, reward: 'tongue'},
                    {creature: 'malebranche', cr: 5, reward: 'fork'},
                    {creature: 'ogre mage', cr: 5, reward: 'apparel'},
                    {creature: 'owlbear', cr: 5, reward: 'feather'},
                    {creature: 'rust monster', cr: 5, reward: 'shavings'},
                    {creature: 'satyr', cr: 5, reward: 'hoof'},
                    {creature: 'stun Bear', cr: 5, reward: 'tooth'},
                    {creature: 'su-monster', cr: 5, reward: 'tail'},
                    {creature: 'wraith', cr: 5, reward: 'finger'},

                    {creature: 'anhkheg', cr: 6, reward: 'chitin'},
                    {creature: 'catoblepas', cr: 6, reward: 'neck'},
                    {creature: 'erinyes', cr: 6, reward: 'thong'},
                    {creature: 'iguanadon', cr: 6, reward: 'thumb'},
                    {creature: 'leucrotta', cr: 6, reward: 'hoof'},
                    {creature: 'manticore', cr: 6, reward: 'spike'},
                    {creature: 'medusa', cr: 6, reward: 'eye'},
                    {creature: 'minotaur', cr: 6, reward: 'map'},
                    {creature: 'mummy', cr: 6, reward: 'gauze'},
                    {creature: 'ochre jelly', cr: 6, reward: 'nucleus'},
                    {creature: 'succubus', cr: 6, reward: 'bra'},
                    {creature: 'troll', cr: 6, reward: 'hide'},
                    {creature: 'white dragon', cr: 6, reward: 'tooth'},

                    {creature: 'banshee', cr: 7, reward: 'larynx'},
                    {creature: 'black dragon', cr: 7, reward: '*'},
                    {creature: 'brass dragon', cr: 7, reward: 'pole'},
                    {creature: 'djinn', cr: 7, reward: 'lamp'},
                    {creature: 'griffon', cr: 7, reward: 'nest'},
                    {creature: 'marilith', cr: 7, reward: 'arm'},
                    {creature: 'morkoth', cr: 7, reward: 'teeth'},
                    {creature: 'otyugh', cr: 7, reward: 'organ'},
                    {creature: 'plaid dragon', cr: 7, reward: 'sporrin'},
                    {creature: 'rakshasa', cr: 7, reward: 'pajamas'},
                    {creature: 'spectre', cr: 7, reward: 'vestige'},
                    {creature: 'wyvern', cr: 7, reward: 'wing'},
                    {creature: 'xorn', cr: 7, reward: 'jaw'},
                    {creature: '', cr: 7, reward: ''},

                    {creature: 'balor', cr: 8, reward: 'whip'},
                    {creature: 'barbed devil', cr: 8, reward: 'flame'},
                    {creature: 'copper dragon', cr: 8, reward: 'loafer'},
                    {creature: 'gold dragon', cr: 8, reward: 'filling'},
                    {creature: 'gorgon', cr: 8, reward: 'testicle'},
                    {creature: 'green dragon', cr: 8, reward: '*'},
                    {creature: 'hill giant', cr: 8, reward: 'corpse'},
                    {creature: 'hydra', cr: 8, reward: 'gyrum'},
                    {creature: 'invisible stalker', cr: 8, reward: '*'},
                    {creature: 'mind Flayer', cr: 8, reward: 'tentacle'},
                    {creature: 'moakum', cr: 8, reward: 'frenum'},
                    {creature: 'monoclonius', cr: 8, reward: 'horn'},
                    {creature: 'rice giant', cr: 8, reward: 'grain'},
                    {creature: 'sand elemental', cr: 8, reward: 'glass'},
                    {creature: 'tin dragon', cr: 8, reward: '*'},
                    {creature: 'umber hulk', cr: 8, reward: 'claw'},
                    {creature: 'vampire', cr: 8, reward: 'pancreas'},
                    {creature: 'vrock', cr: 8, reward: 'neck'},

                    {creature: 'anklyosaurus', cr: 9, reward: 'tail'},
                    {creature: 'beige dragon', cr: 9, reward: '*'},
                    {creature: 'blue dragon', cr: 9, reward: '*'},
                    {creature: 'bone devil', cr: 9, reward: 'hook'},
                    {creature: 'bronze dragon', cr: 9, reward: 'medal'},
                    {creature: 'couatl', cr: 9, reward: 'wing'},
                    {creature: 'hezrou', cr: 9, reward: 'leg'},
                    {creature: 'jellyrock', cr: 9, reward: 'seedling'},
                    {creature: 'mimic', cr: 9, reward: 'hinge'},
                    {creature: 'naga', cr: 9, reward: 'rattle'},
                    {creature: 'porcelain giant', cr: 9, reward: 'fixture'},
                    {creature: 'shedu', cr: 9, reward: 'hoof'},
                    {creature: 'stone giant', cr: 9, reward: 'hatchling'},
                    {creature: 'will-o-the-wisp', cr: 9, reward: 'wisp'},

                    {creature: 'bacon elemental', cr: 10, reward: 'bit'},
                    {creature: 'beholder', cr: 10, reward: 'eyestalk'},
                    {creature: 'black pudding', cr: 10, reward: 'saliva'},
                    {creature: 'efreet', cr: 10, reward: 'cinder'},
                    {creature: 'ettin', cr: 10, reward: 'fur'},
                    {creature: 'frost giant', cr: 10, reward: 'snowman'},
                    {creature: 'ghost', cr: 10, reward: '*'},
                    {creature: 'glabrezu', cr: 10, reward: 'collar'},
                    {creature: 'lurker', cr: 10, reward: 'sac'},
                    {creature: 'quartz giant', cr: 10, reward: 'crystal'},
                    {creature: 'red dragon', cr: 10, reward: 'cocktail'},
                    {creature: 'shambling mound', cr: 10, reward: 'mulch'},
                    {creature: 'silver dragon', cr: 10, reward: '*'},
                    {creature: 'sphinx', cr: 10, reward: 'paw'},
                    {creature: 'treant', cr: 10, reward: 'acorn'},

                    {creature: 'beef giant', cr: 11, reward: 'steak'},
                    {creature: 'fire giant', cr: 11, reward: 'cigarettes'},
                    {creature: 'ice devil', cr: 11, reward: 'snow'},
                    {creature: 'lich', cr: 11, reward: 'crown'},
                    {creature: 'nalfeshnee', cr: 11, reward: 'tusk'},
                    {creature: 'neo-otyugh', cr: 11, reward: 'organ'},
                    {creature: 'remorhaz', cr: 11, reward: 'protrusion'},
                    {creature: 'roper', cr: 11, reward: 'twine'},

                    {creature: 'cloud giant', cr: 12, reward: 'condensation'},
                    {creature: 'humidity giant', cr: 12, reward: 'drops'},
                    {creature: 'mastodon', cr: 12, reward: 'tusk'},
                    {creature: 'megalosaurus', cr: 12, reward: 'jaw'},
                    {creature: 'pentasaurus', cr: 12, reward: 'head'},
                    {creature: 'porn elemental', cr: 12, reward: 'lube'},
                    {creature: 'trapper', cr: 12, reward: 'shag'},

                    {creature: 'dragon turtle', cr: 13, reward: 'shell'},
                    {creature: 'gorgosaurus', cr: 13, reward: 'arm'},
                    {creature: 'pit Fiend', cr: 13, reward: 'seed'},

                    {creature: 'baluchitherium', cr: 14, reward: 'ear'},
                    {creature: 'cardboard golem', cr: 14, reward: 'recycling'},
                    {creature: 'cheese elemental', cr: 14, reward: 'curd'},

                    {creature: 'beer golem', cr: 15, reward: 'foam'},
                    {creature: 'elasmosaurus', cr: 15, reward: 'neck'},
                    {creature: 'leather golem', cr: 15, reward: 'fob'},
                    {creature: 'purple Worm', cr: 15, reward: 'dung'},
                    {creature: 'storm giant', cr: 15, reward: 'barometer'},

                    {creature: 'chromatic dragon', cr: 16, reward: 'scale'},
                    {creature: 'hair elemental', cr: 16, reward: 'follicle'},
                    {creature: 'rubber golem', cr: 16, reward: 'ball'},
                    {creature: 'triceratops', cr: 16, reward: 'horn'},

                    {creature: 'jubilex', cr: 17, reward: 'gel'},
                    {creature: 'oxygen golem', cr: 17, reward: 'platelet'},

                    {creature: 'roc', cr: 18, reward: 'wing'},
                    {creature: 'stegosaurus', cr: 18, reward: 'plate'},
                    {creature: 'tyranosauraus rex', cr: 18, reward: 'forearm'},

                    {creature: 'titan', cr: 20, reward: 'sandal'},

                    {creature: 'platinum dragon', cr: 21, reward: '*'},

                    {creature: 'diplodocus', cr: 24, reward: 'fin'},

                    {creature: 'yeenoghu', cr: 25, reward: 'flail'},

                    {creature: 'orcus', cr: 27, reward: 'wand'},

                    {creature: 'dispater', cr: 30, reward: 'matches'},
                    {creature: 'brontosaurus', cr: 30, reward: 'brain'},
                    {creature: 'geryon', cr: 30, reward: 'cornucopia'},

                    {creature: 'baalzebul', cr: 43, reward: 'pants'},

                    {creature: 'asmodeus', cr: 52, reward: 'leathers'},

                    {creature: 'demogorgon', cr: 53, reward: 'tentacle'}
                  ],
  TITLES_BASIC: [
                  'mr.',
                  'mrs.',
                  'sir',
                  'sgt.',
                  'ms.',
                  'captain',
                  'chief',
                  'admiral',
                  'saint'
                ],
TITLES_IMPRESSIVE:  [
                      'king',
                      'queen',
                      'lord',
                      'lady',
                      'viceroy',
                      'mayor',
                      'prince',
                      'princess',
                      'chief',
                      'boss',
                      'archbishop'
                    ],
CHARACTER_RACES:  [
                    {race: 'half orc', attribute: 'hp max'},
                    {race: 'half man', attribute: 'cha'},
                    {race: 'half halfling', attribute: 'dex'},
                    {race: 'double hobbit', attribute: 'str'},
                    {race: 'hob-hobbit', attribute: 'dex,con'},
                    {race: 'low elf', attribute: 'con'},
                    {race: 'dung elf', attribute: 'wis'},
                    {race: 'talking pony', attribute: 'mp max,int'},
                    {race: 'gyrognome', attribute: 'dex'},
                    {race: 'lesser dwarf', attribute: 'con'},
                    {race: 'crested dwarf', attribute: 'cha'},
                    {race: 'eel man', attribute: 'dex'},
                    {race: 'panda man', attribute: 'con,str'},
                    {race: 'trans-kobold', attribute: 'wis'},
                    {race: 'enchanted motorcycle', attribute: 'mp max'},
                    {race: 'will o\' the wisp', attribute: 'wis'},
                    {race: 'battle-finch', attribute: 'dex,int'},
                    {race: 'double wookiee', attribute: 'str'},
                    {race: 'skraeling', attribute: 'wis'},
                    {race: 'demicanadian', attribute: 'con'},
                    {race: 'land squid', attribute: 'str,hp max'}
                  ],
CHARACTER_CLASSES:  [
                      {class: 'ur-paladin', attribute: 'wis,con'},
                      {class: 'voodoo princess', attribute: 'int,cha'},
                      {class: 'robot monk', attribute: 'str'},
                      {class: 'mu-Fu monk', attribute: 'dex'},
                      {class: 'mage illusioner', attribute: 'int,mp max'},
                      {class: 'shiv-knight', attribute: 'dex'},
                      {class: 'inner mason', attribute: 'con'},
                      {class: 'fighter/organist', attribute: 'cha,str'},
                      {class: 'puma burgular', attribute: 'dex'},
                      {class: 'runeloremaster', attribute: 'wis'},
                      {class: 'hunter strangler', attribute: 'dex,int'},
                      {class: 'battle-felon', attribute: 'str'},
                      {class: 'tickle-mimic', attribute: 'wis,int'},
                      {class: 'slow poisoner', attribute: 'con'},
                      {class: 'bastard lunatic', attribute: 'con'},
                      {class: 'lowling', attribute: 'wis'},
                      {class: 'birdrider', attribute: 'wis'},
                      {class: 'vermineer', attribute: 'int'}
                    ],
WEAPONS:  [
            {weapon: 'stick', modifier: 0},
            {weapon: 'broken bottle', modifier: 1},
            {weapon: 'shiv', modifier: 1},
            {weapon: 'sprig', modifier: 1},
            {weapon: 'oxgoad', modifier: 1},
            {weapon: 'eelspear', modifier: 2},
            {weapon: 'bowie knife', modifier: 2},
            {weapon: 'claw hammer', modifier: 2},
            {weapon: 'handpeen', modifier: 2},
            {weapon: 'andiron', modifier: 3},
            {weapon: 'hatchet', modifier: 3},
            {weapon: 'tomahawk', modifier: 3},
            {weapon: 'hackbarm', modifier: 3},
            {weapon: 'crowbar', modifier: 4},
            {weapon: 'mace', modifier: 4},
            {weapon: 'battleadze', modifier: 4},
            {weapon: 'leafmace', modifier: 5},
            {weapon: 'shortsword', modifier: 5},
            {weapon: 'longiron', modifier: 5},
            {weapon: 'poachard', modifier: 5},
            {weapon: 'baselard', modifier: 5},
            {weapon: 'whinyard', modifier: 6},
            {weapon: 'blunderbuss', modifier: 6},
            {weapon: 'longsword', modifier: 6},
            {weapon: 'crankbow', modifier: 6},
            {weapon: 'blibo', modifier: 7},
            {weapon: 'broadsword', modifier: 7},
            {weapon: 'kreen', modifier: 7},
            {weapon: 'warhammer', modifier: 7},
            {weapon: 'morning star', modifier: 8},
            {weapon: 'pole-adze', modifier: 8},
            {weapon: 'spontoon', modifier: 8},
            {weapon: 'bastard sword', modifier: 9},
            {weapon: 'peen-arm', modifier: 9},
            {weapon: 'culverin', modifier: 10},
            {weapon: 'lance', modifier: 10},
            {weapon: 'halberd', modifier: 11},
            {weapon: 'poleax', modifier: 12},
            {weapon: 'bandyclef', modifier: 15}
          ],
ARMOR:  [
          {armor: 'lace', modifier: 1},
          {armor: 'macrame', modifier: 2},
          {armor: 'burlap', modifier: 3},
          {armor: 'canvas', modifier: 4},
          {armor: 'flannel', modifier: 5},
          {armor: 'chamois', modifier: 6},
          {armor: 'pleathers', modifier: 7},
          {armor: 'leathers', modifier: 8},
          {armor: 'bearskin', modifier: 9},
          {armor: 'ringmail', modifier: 10},
          {armor: 'scale mail', modifier: 12},
          {armor: 'chainmail', modifier: 14},
          {armor: 'splint mail', modifier: 15},
          {armor: 'platemail', modifier: 16},
          {armor: 'aBS', modifier: 17},
          {armor: 'kevlar', modifier: 18},
          {armor: 'titanium', modifier: 19},
          {armor: 'mithril mail', modifier: 20},
          {armor: 'diamond mail', modifier: 25},
          {armor: 'plasma', modifier: 30}
        ],
SHIELDS:  [
            {shield: 'parasol', modifier: 0},
            {shield: 'pie plate', modifier: 1},
            {shield: 'garbage can lid', modifier: 2},
            {shield: 'buckler', modifier: 3},
            {shield: 'plexiglass', modifier: 4},
            {shield: 'fender', modifier: 4},
            {shield: 'round shield', modifier: 5},
            {shield: 'carapace', modifier: 5},
            {shield: 'scutum', modifier: 6},
            {shield: 'propugner', modifier: 6},
            {shield: 'kite shield', modifier: 7},
            {shield: 'pavise', modifier: 8},
            {shield: 'tower shield', modifier: 9},
            {shield: 'baroque shield', modifier: 11},
            {shield: 'aegis', modifier: 12},
            {shield: 'magnetic field', modifier: 18}
          ],
OFFENSE_PREFIX_GOOD:  [
                        {name: 'polished', modifier: 1},
                        {name: 'serrated', modifier: 1},
                        {name: 'heavy', modifier: 1},
                        {name: 'pronged', modifier: 2},
                        {name: 'steely', modifier: 2},
                        {name: 'vicious', modifier: 3},
                        {name: 'venomed', modifier: 4},
                        {name: 'stabbity', modifier: 4},
                        {name: 'dancing', modifier: 5},
                        {name: 'invisible', modifier: 6},
                        {name: 'vorpal', modifier: 7}
                      ],
OFFENSE_PREFIX_BAD: [
                      {name: 'dull', modifier: -2},
                      {name: 'tarnished', modifier: -1},
                      {name: 'rusty', modifier: -3},
                      {name: 'padded', modifier: -5},
                      {name: 'bent', modifier: -4},
                      {name: 'mini', modifier: -4},
                      {name: 'rubber', modifier: -6},
                      {name: 'nerf', modifier: -7},
                      {name: 'unbalanced', modifier: -2}
                    ],
DEFENSE_PREFIX_GOOD:  [
                        {name: 'studded', modifier: 1},
                        {name: 'banded', modifier: 2},
                        {name: 'gilded', modifier: 2},
                        {name: 'festooned', modifier: 3},
                        {name: 'holy', modifier: 4},
                        {name: 'cambric', modifier: 1},
                        {name: 'fine', modifier: 4},
                        {name: 'impressive', modifier: 5},
                        {name: 'custom', modifier: 3}
                      ],
DEFENSE_PREFIX_BAD: [
                      {name: 'holey', modifier: -1},
                      {name: 'patched', modifier: -1},
                      {name: 'threadbare', modifier: -2},
                      {name: 'faded', modifier: -1},
                      {name: 'rusty', modifier: -3},
                      {name: 'motheaten', modifier: -3},
                      {name: 'mildewed', modifier: -2},
                      {name: 'torn', modifier: -3},
                      {name: 'dented', modifier: -3},
                      {name: 'cursed', modifier: -5},
                      {name: 'plastic', modifier: -4},
                      {name: 'cracked', modifier: -4},
                      {name: 'warped', modifier: -3},
                      {name: 'corroded', modifier: -3}
                    ],
SPELLS: [
          {name: 'slime finger'},
          {name: 'rabbit punch'},
          {name: 'hastiness'},
          {name: 'good move'},
          {name: 'sadness'},
          {name: 'seasick'},
          {name: 'gyp'},
          {name: 'shoelaces'},
          {name: 'innoculate'},
          {name: 'cone of annoyance'},
          {name: 'magnetic orb'},
          {name: 'invisible hands'},
          {name: 'revolting cloud'},
          {name: 'aqueous humor'},
          {name: 'spectral miasma'},
          {name: 'clever fellow'},
          {name: 'lockjaw'},
          {name: 'history lesson'},
          {name: 'hydrophobia'},
          {name: 'big sister'},
          {name: 'cone of paste'},
          {name: 'mulligan'},
          {name: 'nestor\'s bright idea'},
          {name: 'holy batpole'},
          {name: 'tumor (benign)'},
          {name: 'braingate'},
          {name: 'summon a bitch'},
          {name: 'nonplus'},
          {name: 'animate nightstand'},
          {name: 'eye of the troglodyte'},
          {name: 'curse name'},
          {name: 'dropsy'},
          {name: 'vitreous humor'},
          {name: 'roger\'s grand illusion'},
          {name: 'covet'},
          {name: 'black idaho'},
          {name: 'astral miasma'},
          {name: 'spectral oyster'},
          {name: 'acrid hands'},
          {name: 'angioplasty'},
          {name: 'grognor\'s big day off'},
          {name: 'tumor (malignant)'},
          {name: 'animate tunic'},
          {name: 'ursine armor'},
          {name: 'holy roller'},
          {name: 'tonsilectomy'},
          {name: 'curse family'},
          {name: 'infinite confusion'}
        ],
CHARACTER_TRAITS:  [
                    {name: 'name'},
                    {name: 'race'},
                    {name: 'class'},
                    {name: 'level'}
                  ],
CHARACTER_PRIMARY_ATTRIBUTES: [
                                {name: 'strength', abbr: 'str'},
                                {name: 'dexterity', abbr: 'dex'},
                                {name: 'constitution', abbr: 'con'},
                                {name: 'intelligence', abbr: 'int'},
                                {name: 'wisdom', abbr: 'wis'},
                                {name: 'charisma', abbr: 'cha'}
                              ],
CHARACTER_SECONDARY_ATTRIBUTES: [
                                  {name: 'hit points', abbr: 'hp'},
                                  {name: 'mana points', abbr: 'mp'},
                                ],
CHARACTER_EQUIP_SLOTS:  [
                          {name: 'weapon'},
                          {name: 'shield'},
                          {name: 'helm'},
                          {name: 'hauberk'},
                          {name: 'brassairts'},
                          {name: 'vambraces'},
                          {name: 'gauntlets'},
                          {name: 'gambeson'},
                          {name: 'cuisses'},
                          {name: 'greaves'},
                          {name: 'sollerets'}
                        ]
})

  /*


  assets_.DATA = {
    TASK_TYPES: {
      FIGHT: [
        ['face', 'facing'],
        ['fight', 'fighting'],
        ['slay', 'slaying'],
        ['defeat', 'defeating'],
        ['execute', 'executing'],
        ['exterminate', 'exterminating']
      ],
      FIND: [
        ['locate the ', 'locating the '],
        ['find the ', 'finding the '],
        ['seek the ', 'seeking the ']
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

    if(getRandomint_(1, 100) < 26) {
      items = itemArray.ITEMS.SPECIAL;
      itemRarity += 1;
    } else {
      items = itemArray.ITEMS.MUNDANE;
    }
    item = items[Math.floor(Math.random() * items.length)];

    if(getRandomint_(1, 100) < 26) {
      item = itemArray.PREFIXES[Math.floor(Math.random() * itemArray.PREFIXES.length)] + ' ' + item;
      itemRarity += 1;
    }

    if(getRandomint_(1, 100) < 26) {
      item = item + ' of ' + itemArray.SUFFIXES[Math.floor(Math.random() * itemArray.SUFFIXES.length)];
      itemRarity += 1;
    }

    return {item: item, rarity: itemRarity};
    
  }

  function getRandomint_(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }*/


/*


function SpecialItem() {
  return interestingItem() + ' of ' + Pick(K.ItemOfs);
}

function interestingItem() {
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

*/



