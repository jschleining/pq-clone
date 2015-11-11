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
                          'Cruciate',
                          'Crystalline',
                          'Deadly',
                          'Dual',
                          'Enchanted',
                          'Fearsome',
                          'Filigreed',
                          'Garlanded',
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
                          'Ormolu',
                          'Ostentatious',
                          'Precious',
                          'Proverbial',
                          'Puissant',
                          'Reverential',
                          'Sacred',
                          'Spectral',
                          'Unearthly'
                        ],
  QUEST_ITEM_SUFFIXES:  [
                          'Acrimony',
                          'Awe',
                          'Chaos',
                          'Comfort',
                          'Craft',
                          'Cruelty',
                          'Danger',
                          'Despair',
                          'Diamonique',
                          'Dignard',
                          'Domination',
                          'Efficiency',
                          'Electrum',
                          'Envy',
                          'Extroversion',
                          'Fealty',
                          'Fear',
                          'Foreboding',
                          'Foreshadowing',
                          'Fortune',
                          'Frenzy',
                          'Grob',
                          'Guile',
                          'Happiness',
                          'Hunger',
                          'Hurting',
                          'Hydragyrum',
                          'Incarceration',
                          'Internment',
                          'Intrusion',
                          'Invisibility',
                          'Joy',
                          'Loyalty',
                          'Misapprehension',
                          'Nervousness',
                          'Patience',
                          'Perspicacity',
                          'Petulance',
                          'Pleasure',
                          'Practicality',
                          'Prurience',
                          'Punctuality',
                          'Ra',
                          'Rapidity',
                          'Silence',
                          'Sisu',
                          'Solitude',
                          'Submission',
                          'Suffering',
                          'The Bone',
                          'Torpor',
                          'Worry'
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
                        {name: 'battle-', modifier: 1},
                        {name: 'were-', modifier: 1},
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
                  'Mr.',
                  'Mrs.',
                  'Sir',
                  'Sgt.',
                  'Ms.',
                  'Captain',
                  'Chief',
                  'Admiral',
                  'Saint'
                ],
TITLES_IMPRESSIVE:  [
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
                      'Archbishop'
                    ],
CHARACTER_RACES:  [
                    {race: 'Half Orc', attribute: 'HP Max'},
                    {race: 'Half Man', attribute: 'CHA'},
                    {race: 'Half Halfling', attribute: 'DEX'},
                    {race: 'Double Hobbit', attribute: 'STR'},
                    {race: 'Hob-Hobbit', attribute: 'DEX,CON'},
                    {race: 'Low Elf', attribute: 'CON'},
                    {race: 'Dung Elf', attribute: 'WIS'},
                    {race: 'Talking Pony', attribute: 'MP Max,INT'},
                    {race: 'Gyrognome', attribute: 'DEX'},
                    {race: 'Lesser Dwarf', attribute: 'CON'},
                    {race: 'Crested Dwarf', attribute: 'CHA'},
                    {race: 'Eel Man', attribute: 'DEX'},
                    {race: 'Panda Man', attribute: 'CON,STR'},
                    {race: 'Trans-Kobold', attribute: 'WIS'},
                    {race: 'Enchanted Motorcycle', attribute: 'MP Max'},
                    {race: 'Will o\' the Wisp', attribute: 'WIS'},
                    {race: 'Battle-Finch', attribute: 'DEX,INT'},
                    {race: 'Double Wookiee', attribute: 'STR'},
                    {race: 'Skraeling', attribute: 'WIS'},
                    {race: 'Demicanadian', attribute: 'CON'},
                    {race: 'Land Squid', attribute: 'STR,HP Max'}
                  ],
CHARACTER_CLASSES:  [
                      {class: 'Ur-Paladin', attribute: 'WIS,CON'},
                      {class: 'Voodoo Princess', attribute: 'INT,CHA'},
                      {class: 'Robot Monk', attribute: 'STR'},
                      {class: 'Mu-Fu Monk', attribute: 'DEX'},
                      {class: 'Mage Illusioner', attribute: 'INT,MP Max'},
                      {class: 'Shiv-Knight', attribute: 'DEX'},
                      {class: 'Inner Mason', attribute: 'CON'},
                      {class: 'Fighter/Organist', attribute: 'CHA,STR'},
                      {class: 'Puma Burgular', attribute: 'DEX'},
                      {class: 'Runeloremaster', attribute: 'WIS'},
                      {class: 'Hunter Strangler', attribute: 'DEX,INT'},
                      {class: 'Battle-Felon', attribute: 'STR'},
                      {class: 'Tickle-Mimic', attribute: 'WIS,INT'},
                      {class: 'Slow Poisoner', attribute: 'CON'},
                      {class: 'Bastard Lunatic', attribute: 'CON'},
                      {class: 'Lowling', attribute: 'WIS'},
                      {class: 'Birdrider', attribute: 'WIS'},
                      {class: 'Vermineer', attribute: 'INT'}
                    ],
WEAPONS:  [
            {weapon: 'Stick', modifier: 0},
            {weapon: 'Broken Bottle', modifier: 1},
            {weapon: 'Shiv', modifier: 1},
            {weapon: 'Sprig', modifier: 1},
            {weapon: 'Oxgoad', modifier: 1},
            {weapon: 'Eelspear', modifier: 2},
            {weapon: 'Bowie Knife', modifier: 2},
            {weapon: 'Claw Hammer', modifier: 2},
            {weapon: 'Handpeen', modifier: 2},
            {weapon: 'Andiron', modifier: 3},
            {weapon: 'Hatchet', modifier: 3},
            {weapon: 'Tomahawk', modifier: 3},
            {weapon: 'Hackbarm', modifier: 3},
            {weapon: 'Crowbar', modifier: 4},
            {weapon: 'Mace', modifier: 4},
            {weapon: 'Battleadze', modifier: 4},
            {weapon: 'Leafmace', modifier: 5},
            {weapon: 'Shortsword', modifier: 5},
            {weapon: 'Longiron', modifier: 5},
            {weapon: 'Poachard', modifier: 5},
            {weapon: 'Baselard', modifier: 5},
            {weapon: 'Whinyard', modifier: 6},
            {weapon: 'Blunderbuss', modifier: 6},
            {weapon: 'Longsword', modifier: 6},
            {weapon: 'Crankbow', modifier: 6},
            {weapon: 'Blibo', modifier: 7},
            {weapon: 'Broadsword', modifier: 7},
            {weapon: 'Kreen', modifier: 7},
            {weapon: 'Warhammer', modifier: 7},
            {weapon: 'Morning Star', modifier: 8},
            {weapon: 'Pole-adze', modifier: 8},
            {weapon: 'Spontoon', modifier: 8},
            {weapon: 'Bastard Sword', modifier: 9},
            {weapon: 'Peen-arm', modifier: 9},
            {weapon: 'Culverin', modifier: 10},
            {weapon: 'Lance', modifier: 10},
            {weapon: 'Halberd', modifier: 11},
            {weapon: 'Poleax', modifier: 12},
            {weapon: 'Bandyclef', modifier: 15}
          ],
ARMOR:  [
          {armor: 'Lace', modifier: 1},
          {armor: 'Macrame', modifier: 2},
          {armor: 'Burlap', modifier: 3},
          {armor: 'Canvas', modifier: 4},
          {armor: 'Flannel', modifier: 5},
          {armor: 'Chamois', modifier: 6},
          {armor: 'Pleathers', modifier: 7},
          {armor: 'Leathers', modifier: 8},
          {armor: 'Bearskin', modifier: 9},
          {armor: 'Ringmail', modifier: 10},
          {armor: 'Scale Mail', modifier: 12},
          {armor: 'Chainmail', modifier: 14},
          {armor: 'Splint Mail', modifier: 15},
          {armor: 'Platemail', modifier: 16},
          {armor: 'ABS', modifier: 17},
          {armor: 'Kevlar', modifier: 18},
          {armor: 'Titanium', modifier: 19},
          {armor: 'Mithril Mail', modifier: 20},
          {armor: 'Diamond Mail', modifier: 25},
          {armor: 'Plasma', modifier: 30}
        ],
SHIELDS:  [
            {shield: 'Parasol', modifier: 0},
            {shield: 'Pie Plate', modifier: 1},
            {shield: 'Garbage Can Lid', modifier: 2},
            {shield: 'Buckler', modifier: 3},
            {shield: 'Plexiglass', modifier: 4},
            {shield: 'Fender', modifier: 4},
            {shield: 'Round Shield', modifier: 5},
            {shield: 'Carapace', modifier: 5},
            {shield: 'Scutum', modifier: 6},
            {shield: 'Propugner', modifier: 6},
            {shield: 'Kite Shield', modifier: 7},
            {shield: 'Pavise', modifier: 8},
            {shield: 'Tower Shield', modifier: 9},
            {shield: 'Baroque Shield', modifier: 11},
            {shield: 'Aegis', modifier: 12},
            {shield: 'Magnetic Field', modifier: 18}
          ],
OFFENSE_PREFIX_GOOD:  [
                        {name: 'Polished', modifier: 1},
                        {name: 'Serrated', modifier: 1},
                        {name: 'Heavy', modifier: 1},
                        {name: 'Pronged', modifier: 2},
                        {name: 'Steely', modifier: 2},
                        {name: 'Vicious', modifier: 3},
                        {name: 'Venomed', modifier: 4},
                        {name: 'Stabbity', modifier: 4},
                        {name: 'Dancing', modifier: 5},
                        {name: 'Invisible', modifier: 6},
                        {name: 'Vorpal', modifier: 7}
                      ],
OFFENSE_PREFIX_BAD: [
                      {name: 'Dull', modifier: -2},
                      {name: 'Tarnished', modifier: -1},
                      {name: 'Rusty', modifier: -3},
                      {name: 'Padded', modifier: -5},
                      {name: 'Bent', modifier: -4},
                      {name: 'Mini', modifier: -4},
                      {name: 'Rubber', modifier: -6},
                      {name: 'Nerf', modifier: -7},
                      {name: 'Unbalanced', modifier: -2}
                    ],
DEFENSE_PREFIX_GOOD:  [
                        {name: 'Studded', modifier: 1},
                        {name: 'Banded', modifier: 2},
                        {name: 'Gilded', modifier: 2},
                        {name: 'Festooned', modifier: 3},
                        {name: 'Holy', modifier: 4},
                        {name: 'Cambric', modifier: 1},
                        {name: 'Fine', modifier: 4},
                        {name: 'Impressive', modifier: 5},
                        {name: 'Custom', modifier: 3}
                      ],
DEFENSE_PREFIX_BAD: [
                      {name: 'Holey', modifier: -1},
                      {name: 'Patched', modifier: -1},
                      {name: 'Threadbare', modifier: -2},
                      {name: 'Faded', modifier: -1},
                      {name: 'Rusty', modifier: -3},
                      {name: 'Motheaten', modifier: -3},
                      {name: 'Mildewed', modifier: -2},
                      {name: 'Torn', modifier: -3},
                      {name: 'Dented', modifier: -3},
                      {name: 'Cursed', modifier: -5},
                      {name: 'Plastic', modifier: -4},
                      {name: 'Cracked', modifier: -4},
                      {name: 'Warped', modifier: -3},
                      {name: 'Corroded', modifier: -3}
                    ],
SPELLS: [
          {name: 'Slime Finger'},
          {name: 'Rabbit Punch'},
          {name: 'Hastiness'},
          {name: 'Good Move'},
          {name: 'Sadness'},
          {name: 'Seasick'},
          {name: 'Gyp'},
          {name: 'Shoelaces'},
          {name: 'Innoculate'},
          {name: 'Cone of Annoyance'},
          {name: 'Magnetic Orb'},
          {name: 'Invisible Hands'},
          {name: 'Revolting Cloud'},
          {name: 'Aqueous Humor'},
          {name: 'Spectral Miasma'},
          {name: 'Clever Fellow'},
          {name: 'Lockjaw'},
          {name: 'History Lesson'},
          {name: 'Hydrophobia'},
          {name: 'Big Sister'},
          {name: 'Cone of Paste'},
          {name: 'Mulligan'},
          {name: 'Nestor\'s Bright Idea'},
          {name: 'Holy Batpole'},
          {name: 'Tumor (Benign)'},
          {name: 'Braingate'},
          {name: 'Summon a Bitch'},
          {name: 'Nonplus'},
          {name: 'Animate Nightstand'},
          {name: 'Eye of the Troglodyte'},
          {name: 'Curse Name'},
          {name: 'Dropsy'},
          {name: 'Vitreous Humor'},
          {name: 'Roger\'s Grand Illusion'},
          {name: 'Covet'},
          {name: 'Black Idaho'},
          {name: 'Astral Miasma'},
          {name: 'Spectral Oyster'},
          {name: 'Acrid Hands'},
          {name: 'Angioplasty'},
          {name: 'Grognor\'s Big Day Off'},
          {name: 'Tumor (Malignant)'},
          {name: 'Animate Tunic'},
          {name: 'Ursine Armor'},
          {name: 'Holy Roller'},
          {name: 'Tonsilectomy'},
          {name: 'Curse Family'},
          {name: 'Infinite Confusion'}
        ],
CARACTER_TRAITS:  [
                    {name: 'Name'},
                    {name: 'Race'},
                    {name: 'Class'},
                    {name: 'Level'}
                  ],
CHARACTER_PRIMARY_ATTRIBUTES: [
                                {name: 'Strength', abbr: 'STR'},
                                {name: 'Dexterity', abbr: 'DEX'},
                                {name: 'Constitution', abbr: 'CON'},
                                {name: 'Intelligence', abbr: 'INT'},
                                {name: 'Wisdom', abbr: 'WIS'},
                                {name: 'Charisma', abbr: 'CHA'}
                              ],
CHARACTER_SECONDARY_ATTRIBUTES: [
                                  {name: 'Hit Points', abbr: 'HP'},
                                  {name: 'Mana Points', abbr: 'MP'},
                                ],
CHARACTER_EQUIP_SLOTS:  [
                          {name: 'Weapon'},
                          {name: 'Shield'},
                          {name: 'Helm'},
                          {name: 'Hauberk'},
                          {name: 'Brassairts'},
                          {name: 'Vambraces'},
                          {name: 'Gauntlets'},
                          {name: 'Gambeson'},
                          {name: 'Cuisses'},
                          {name: 'Greaves'},
                          {name: 'Sollerets'}
                        ]

})

  /*


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

*/



