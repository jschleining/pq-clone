angular.module('pq-clone')

.service('Utilities', function() {
	var service_ = this;

  service_.indefiniteArticle = indefiniteArticle_;
  service_.definiteArticle = definiteArticle_;
  service_.pluralize = pluralize_;

  /*
  * String Manipulation Functions
  *   Modified from original Progress Quest Functions for clarity
  *   May be able to move all of these to a filter
  */

  // Not sure I am going to use this function. I dont like storing array data in strings.
  /*function Split(s, field, separator) {
    return s.split(separator || "|")[field];
  }*/

  /*
  * Finds a substring from within another string.
  */
  function findSubString(_substring, _string) {
    return _string.indexOf(_substring) + 1;
  }

  /*
  * Returns a substring from the original.
  */
  function getSubString(_string, _begin, _length) {
    return _string.substr(_begin - 1, _length);
  }

  /*
  * Returns the length of a string.
  */
  function getLength(_string) {
    return _string.length;
  }

  /*
  * Checks to see if a string starts with a specific substring.
  *
  * @return true or false
  */
  function startsWith(_string, _substring) {
    return _string.indexOf(_substring) == 0;
  }

  /*
  * Checks to see if a string ends with a specific substring.
  *
  * @return true or false
  */
  function endsWith(_string, _substring) {
    return getSubString(_string, 1 + getLength(_string) - getLength(_substring), getLength(_substring)) == _substring;
  }

  /*
  * Returns the plural form of a word.
  */
  function pluralize_(_string) {
    console.log('Pluralize: ', _string);
    if (endsWith(_string, 'y')) {
      return getSubString(_string, 1, getLength(_string) - 1) + 'ies';
    } else if (endsWith(_string, 'us')) {
      return getSubString(_string, 1, getLength(_string) - 2) + 'i';
    } else if (endsWith(_string, 'f')) {
      return getSubString(_string, 1, getLength(_string) - 1) + 'ves';
    } else if (endsWith(_string, 'man') || endsWith(_string, 'Man')) {
      return getSubString(_string, 1, getLength(_string) - 2) + 'en';
    } else if (endsWith(_string, 'ch') || endsWith(_string, 'x') || endsWith(_string, 's') || endsWith(_string, 'sh')) {
      return _string + 'es';
    } else {
      return _string + 's';
    }
  }

  /*
  * Returns the associated indefinite article.
  */
  function indefiniteArticle_(_string, _quantity) {
    if (_quantity === 1) {
      if (findSubString(_string.charAt(0), 'AEIOUÜaeiouü') > 0) {
        return 'an';
      } else {
        return 'a';
      }
    } else {
      return '';
    }
  }

  /*
  * Returns the associated definite article.
  */
  function definiteArticle_(_string) {
    return 'the';
  }


})


/*

// Copyright (c)2002-2010 Eric Fredricksen <e@fredricksen.net> all rights reserved

var game = {};
var lasttick, timerid;

function timeGetTime() {
  return new Date().getTime();
}

function StartTimer() {
  if (!timerid) {
    lasttick = timeGetTime();
    timerid = setTimeout(Timer1Timer, 100);
  }
}

function StopTimer() {
  clearTimeout(timerid);
  timerid = null;
}

function Q(s) {
  game.queue.push(s);
  Dequeue();
}

function TaskDone() {
  return TaskBar.done();
}

function Odds(chance, outof) {
  return Random(outof) < chance;
}

function RandSign() {
  return Random(2) * 2 - 1;
}

function RandomLow(below) {
  return Min(Random(below), Random(below));
}

function PickLow(s) {
  return s[RandomLow(s.length)];
}

function prefix(a, m, s, sep) {
  if (sep == undefined) sep = ' ';
  m = Abs(m);
  if (m < 1 || m > a.length) return s;  // In case of screwups
  return a[m-1] + sep + s;
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

function InterplotCinematic() {
  switch (Random(3)) {
  case 0:
    Q('task|1|Exhausted, you arrive at a friendly oasis in a hostile land');
    Q('task|2|You greet old friends and meet new allies');
    Q('task|2|You are privy to a council of powerful do-gooders');
    Q('task|1|There is much to be done. You are chosen!');
    break;
  case 1:
    Q('task|1|Your quarry is in sight, but a mighty enemy bars your path!');
    var nemesis = NamedMonster(GetI(Traits,'Level')+3);
    Q('task|4|A desperate struggle commences with ' + nemesis);
    var s = Random(3);
    for (var i = 1; i <= Random(1 + game.act + 1); ++i) {
      s += 1 + Random(2);
      switch (s % 3) {
      case 0: Q('task|2|Locked in grim combat with ' + nemesis); break;
      case 1: Q('task|2|' + nemesis + ' seems to have the upper hand'); break;
      case 2: Q('task|2|You seem to gain the advantage over ' + nemesis); break;
      }
    }
    Q('task|3|Victory! ' + nemesis + ' is slain! Exhausted, you lose conciousness');
    Q('task|2|You awake in a friendly place, but the road awaits');
    break;
  case 2:
    var nemesis2 = ImpressiveGuy();
    Q("task|2|Oh sweet relief! You've reached the protection of the good " + nemesis2);
    Q('task|3|There is rejoicing, and an unnerving encouter with ' + nemesis2 + ' in private');
    Q('task|2|You forget your ' + BoringItem() + ' and go back to get it');
    Q("task|2|What's this!? You overhear something shocking!");
    Q('task|2|Could ' + nemesis2 + ' be a dirty double-dealer?');
    Q('task|3|Who can possibly be trusted with this news!? ... Oh yes, of course');
    break;
  }
  Q('plot|1|Loading');
}


function StrToInt(s) {
  return parseInt(s, 10);
}

function IntToStr(i) {
  return i + "";
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

function LowerCase(s) {
  return s.toLowerCase();
}

function ProperCase(s) {
  return Copy(s,1,1).toUpperCase() + Copy(s,2,10000);
}

function EquipPrice() {
  return  5 * GetI(Traits,'Level') * GetI(Traits,'Level') +
    10 * GetI(Traits,'Level') +
    20;
}

function Dequeue() {
  while (TaskDone()) {
    if (Split(game.task,0) == 'kill') {
      if (Split(game.task,3) == '*') {
        WinItem();
      } else if (Split(game.task,3)) {
        Add(Inventory,LowerCase(Split(game.task,1) + ' ' +
                                ProperCase(Split(game.task,3))),1);
      }
    } else if (game.task == 'buying') {
      // buy some equipment
      Add(Inventory,'Gold',-EquipPrice());
      WinEquip();
    } else if ((game.task == 'market') || (game.task == 'sell')) {
      if (game.task == 'sell') {
        var amt = GetI(Inventory, 1) * GetI(Traits,'Level');
        if (Pos(' of ', Inventory.label(1)) > 0)
          amt *= (1+RandomLow(10)) * (1+RandomLow(GetI(Traits,'Level')));
        Inventory.remove1();
        Add(Inventory, 'Gold', amt);
      }
      if (Inventory.length() > 1) {
        Inventory.scrollToTop();
        Task('Selling ' + Indefinite(Inventory.label(1), GetI(Inventory,1)),
             1 * 1000);
        game.task = 'sell';
        break;
      }
    }

    var old = game.task;
    game.task = '';
    if (game.queue.length > 0) {
      var a = Split(game.queue[0],0);
      var n = StrToInt(Split(game.queue[0],1));
      var s = Split(game.queue[0],2);
      if (a == 'task' || a == 'plot') {
        game.queue.shift();
        if (a == 'plot') {
          CompleteAct();
          s = 'Loading ' + game.bestplot;
        }
        Task(s, n * 1000);
      } else {
        throw 'bah!' + a;
      }
    } else if (EncumBar.done()) {
      Task('Heading to market to sell loot',4 * 1000);
      game.task = 'market';
    } else if ((Pos('kill|',old) <= 0) && (old != 'heading')) {
      if (GetI(Inventory, 'Gold') > EquipPrice()) {
        Task('Negotiating purchase of better equipment', 5 * 1000);
        game.task = 'buying';
      } else {
        Task('Heading to the killing fields', 4 * 1000);
        game.task = 'heading';
      }
    } else {
      var nn = GetI(Traits, 'Level');
      var t = MonsterTask(nn);
      var InventoryLabelAlsoGameStyleTag = 3;
      nn = Math.floor((2 * InventoryLabelAlsoGameStyleTag * t.level * 1000) / nn);
      Task('Executing ' + t.description, nn);
    }
  }
}


function Put(list, key, value) {
  if (typeof key === typeof 1)
    key = list.label(key);

  if (list.fixedkeys) {
    game[list.id][key] = value;
  } else {
    var i = 0;
    for (; i < game[list.id].length; ++i) {
      if (game[list.id][i][0] === key) {
        game[list.id][i][1] = value;
        break;
      }
    }
    if (i == game[list.id].length)
      game[list.id].push([key,value]);
  }

  list.PutUI(key, value);

  if (key === 'STR')
    EncumBar.reset(10 + value, EncumBar.Position());

  if (list === Inventory) {
    var cubits = 0;
    $.each(game.Inventory.slice(1), function (index, item) {
      cubits += StrToInt(item[1]);
    });
    EncumBar.reposition(cubits);
  }
}


function ProgressBar(id, tmpl) {
  this.id = id;
  this.bar = $("#"+ id + " > .bar");
  this.tmpl = tmpl;

  this.Max = function () { return game[this.id].max; };
  this.Position = function () { return game[this.id].position; };

  this.reset = function (newmax, newposition) {
    game[this.id].max = newmax;
    this.reposition(newposition || 0);
  };

  this.reposition = function (newpos) {
    game[this.id].position = Min(newpos, this.Max());

    // Recompute hint
    game[this.id].percent = (100 * this.Position()).div(this.Max());
    game[this.id].remaining = Math.floor(this.Max() - this.Position());
    game[this.id].time = RoughTime(this.Max() - this.Position());
    game[this.id].hint = template(this.tmpl, game[this.id]);

    // Update UI
    if (this.bar) {
      var p = this.Max() ? 100 * this.Position() / this.Max() : 0;
      this.bar.css("width", p + "%");
      this.bar.parent().find(".hint").text(game[this.id].hint);
    }
  };

  this.increment = function (inc) {
    this.reposition(this.Position() + inc);
  };

  this.done = function () {
    return this.Position() >= this.Max();
  };

  this.load = function (game) {
    this.reposition(this.Position());
  };
}



function Key(tr) {
  return $(tr).children().first().text();
}

function Value(tr) {
  return $(tr).children().last().text();
}



function ListBox(id, columns, fixedkeys) {
  this.id = id;
  this.box = $("tbody#_, #_ tbody".replace(/_/g, id));
  this.columns = columns;
  this.fixedkeys = fixedkeys;

  this.AddUI = function (caption) {
    if (!this.box) return;
    var tr = $("<tr><td><input type=checkbox disabled> " +
               caption + "</td></tr>");
    tr.appendTo(this.box);
    tr.each(function () {this.scrollIntoView();});
    return tr;
  };

  this.ClearSelection = function () {
    if (this.box)
      this.box.find("tr").removeClass("selected");
  };

  this.PutUI = function (key, value) {
    if (!this.box) return;
    var item = this.rows().filter(function (index) {
      return Key(this) === key;
    });
    if (!item.length) {
      item = $("<tr><td>" + key + "</td><td/></tr>");
      this.box.append(item);
    }

    item.children().last().text(value);
    item.addClass("selected");
    item.each(function () {this.scrollIntoView();});
  };

  this.scrollToTop = function () {
    if (this.box)
      this.box.parents(".scroll").scrollTop(0);
  };

  this.rows = function () {
    return this.box.find("tr").has("td");
  };

  this.CheckAll = function (butlast) {
    if (this.box) {
      if (butlast)
        this.rows().find("input:checkbox").not(':last').attr("checked","true");
      else
        this.rows().find("input:checkbox").attr("checked","true");
    }
   };

  this.length = function () {
    return (this.fixedkeys || game[this.id]).length;
  };

  this.remove0 = function (n) {
    if (game[this.id])
      game[this.id].shift();
    if (this.box)
      this.box.find("tr").first().remove();
  };

  this.remove1 = function (n) {
    var t = game[this.id].shift();
    game[this.id].shift();
    game[this.id].unshift(t);
    if (this.box)
      this.box.find("tr").eq(1).remove();
  };


  this.load = function (game) {
    var that = this;
    var dict = game[this.id];
    if (this.fixedkeys) {
      $.each(this.fixedkeys, function (index, key) {
        that.PutUI(key, dict[key]);
      });
    } else {
      $.each(dict, function (index, row) {
        if (that.columns == 2)
          that.PutUI(row[0], row[1]);
        else
          that.AddUI(row);
      });
    }
  };


  this.label = function (n) {
    return this.fixedkeys ? this.fixedkeys[n] : game[this.id][n][0];
  };
}


var ExpBar, PlotBar, TaskBar, QuestBar, EncumBar;
var Traits,Stats,Spells,Equips,Inventory,Plots,Quests;
var Kill;
var AllBars, AllLists;


function StrToIntDef(s, def) {
  var result = parseInt(s, 10);
  return isNaN(result) ? def : result;
}


if (document)
  $(document).ready(FormCreate);


function WinSpell() {
  AddR(Spells, K.Spells[RandomLow(Min(GetI(Stats,'WIS')+GetI(Traits,'Level'),
                                      K.Spells.length))], 1);
}

function LPick(list, goal) {
  var result = Pick(list);
  for (var i = 1; i <= 5; ++i) {
    var best = StrToInt(Split(result, 1));
    var s = Pick(list);
    var b1 = StrToInt(Split(s,1));
    if (Abs(goal-best) > Abs(goal-b1))
      result = s;
  }
  return result;
}

function Abs(x) {
  if (x < 0) return -x; else return x;
}

function WinEquip() {
  var posn = Random(Equips.length());

  if (!posn) {
    stuff = K.Weapons;
    better = K.OffenseAttrib;
    worse = K.OffenseBad;
  } else {
    better = K.DefenseAttrib;
    worse = K.DefenseBad;
    stuff = (posn == 1) ? K.Shields:  K.Armors;
  }
  var name = LPick(stuff, GetI(Traits,'Level'));
  var qual = StrToInt(Split(name,1));
  name = Split(name,0);
  var plus = GetI(Traits,'Level') - qual;
  if (plus < 0) better = worse;
  var count = 0;
  while (count < 2 && plus) {
    var modifier = Pick(better);
    qual = StrToInt(Split(modifier, 1));
    modifier = Split(modifier, 0);
    if (Pos(modifier, name) > 0) break; // no repeats
    if (Abs(plus) < Abs(qual)) break; // too much
    name = modifier + ' ' + name;
    plus -= qual;
    ++count;
  }
  if (plus) name = plus + ' ' + name;
  if (plus > 0) name = '+' + name;

  Put(Equips, posn, name);
  game.bestequip = name;
  if (posn > 1) game.bestequip += ' ' + Equips.label(posn);
}


function Square(x) { return x * x; }

function WinStat() {
  var i;
  if (Odds(1,2))  {
    i = Pick(K.Stats);
  } else {
    // Favor the best stat so it will tend to clump
    var t = 0;
    $.each(K.Stats, function (index, key) {
      t += Square(GetI(Stats, key));
    });
    t = Random(t);
    $.each(K.Stats, function (index, key) {
      i = key;
      t -= Square(GetI(Stats, key));
      if (t < 0) return false;
    });
  }
  Add(Stats, i, 1);
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

function WinItem() {
  Add(Inventory, SpecialItem(), 1);
}

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

function toRoman(n) {
  if (!n) return "N";
  var s = "";
  function _rome(dn,ds) {
    if (n >= dn) {
      n -= dn;
      s += ds;
      return true;
    } else return false;
  }
  if (n < 0) {
    s = "-";
    n = -n;
  }
  while (_rome(1000,"M")) {0;}
  _rome(900,"CM");
  _rome(500,"D");
  _rome(400,"CD");
  while (_rome(100,"C")) {0;}
  _rome(90,"XC");
  _rome(50,"L");
  _rome(40,"XL");
  while (_rome(10,"X")) {0;}
  _rome(9,"IX");
  _rome(5,"V");
  _rome(4,"IV");
  while (_rome(1,"I")) {0;}
  return s;
}

function toArabic(s) {
  n = 0;
  s = s.toUpperCase();
  function _arab(ds,dn) {
    if (!Starts(s, ds)) return false;
    s = s.substr(ds.length);
    n += dn;
    return true;
  }
  while (_arab("M",1000)) {0;}
  _arab("CM",900);
  _arab("D",500);
  _arab("CD",400);
  while (_arab("C",100)) {0;}
  _arab("XC",90);
  _arab("L",50);
  _arab("XL",40);
  while (_arab("X",10)) {0;}
  _arab("IX",9);
  _arab("V",5);
  _arab("IV",4);
  while (_arab("I",1)) {0;}
  return n;
}

function CompleteAct() {
  Plots.CheckAll();
  game.act += 1;
  PlotBar.reset(60 * 60 * (1 + 5 * game.act)); // 1 hr + 5/act
  Plots.AddUI((game.bestplot = 'Act ' + toRoman(game.act)));

  if (game.act > 1) {
    WinItem();
    WinEquip();
  }

  Brag('act');
}


function Log(line) {
  if (game.log)
    game.log[+new Date()] = line;
  // TODO: and now what?
}

function Task(caption, msec) {
  game.kill = caption + "...";
  if (Kill)
    Kill.text(game.kill);
  Log(game.kill);
  TaskBar.reset(msec);
}

/*function Add(list, key, value) {
  Put(list, key, value + GetI(list,key));

  /*$IFDEF LOGGING*/
 /*if (!value) return;
  var line = (value > 0) ? "Gained" : "Lost";
  if (key == 'Gold') {
    key = "gold piece";
    line = (value > 0) ? "Got paid" : "Spent";
  }
  if (value < 0) value = -value;
  line = line + ' ' + Indefinite(key, value);
  Log(line);
  /*$ENDIF*/
/*}*/

/*function AddR(list, key, value) {
  Put(list, key, toRoman(value + toArabic(Get(list,key))));
}*/

/*function Get(list, key) {
  if (list.fixedkeys) {
    if (typeof key === typeof 1)
      key = list.fixedkeys[key];
    return game[list.id][key];
  } else if (typeof key === typeof 1) {
    if (key < game[list.id].length)
      return game[list.id][key][1];
    else
      return "";
  } else {
    for (var i = 0; i < game[list.id].length; ++i) {
      if (game[list.id][i][0] === key)
        return game[list.id][i][1];
    }
    return "";
  }
}*/

/*function GetI(list, key) {
  return StrToIntDef(Get(list,key), 0);
}*/

/*function Min(a,b) {
  return a < b ? a : b;
}*/

/*function Max(a,b) {
  return a > b ? a : b;
}*/

/*function LevelUp() {
  Add(Traits,'Level',1);
  Add(Stats,'HP Max', GetI(Stats,'CON').div(3) + 1 + Random(4));
  Add(Stats,'MP Max', GetI(Stats,'INT').div(3) + 1 + Random(4));
  WinStat();
  WinStat();
  WinSpell();
  ExpBar.reset(LevelUpTime(GetI(Traits,'Level')));
  Brag('level');
}*/

/*function ClearAllSelections() {
  $.each(AllLists, function () {this.ClearSelection();});
}*/

/*function RoughTime(s) {
  if (s < 120) return s + ' seconds';
  else if (s < 60 * 120) return s.div(60) + ' minutes';
  else if (s < 60 * 60 * 48) return s.div(3600) + ' hours';
  else if (s < 60 * 60 * 24 * 60) return s.div(3600 * 24) + ' days';
  else if (s < 60 * 60 * 24 * 30 * 24) return s.div(3600 * 24 * 30) +" months";
  else return s.div(3600 * 24 * 30 * 12) + " years";

}*/

// var dealing = false;

/*function Timer1Timer() {
  timerid = null;  // Event has fired
  if (TaskBar.done()) {
    game.tasks += 1;
    game.elapsed += TaskBar.Max().div(1000);

    ClearAllSelections();

    if (game.kill == 'Loading....')
      TaskBar.reset(0);  // Not sure if this is still the ticket

    // gain XP / level up
    var gain = Pos('kill|', game.task) == 1;
    if (gain) {
      if (ExpBar.done())
        LevelUp();
      else
        ExpBar.increment(TaskBar.Max() / 1000);
    }

    // advance quest
    if (gain && game.act >= 1) {
      if (QuestBar.done() || !Quests.length()) {
        CompleteQuest();
      } else {
        QuestBar.increment(TaskBar.Max() / 1000);
      }
    }

    // advance plot
    if (gain || !game.act) {
      if (PlotBar.done())
        InterplotCinematic();
      else
        PlotBar.increment(TaskBar.Max() / 1000);
    }

    Dequeue();
  } else {
    var elapsed = timeGetTime() - lasttick;
    if (elapsed > 100) elapsed = 100;
    if (elapsed < 0) elapsed = 0;
    TaskBar.increment(elapsed);
  }

  StartTimer();
}*/

/*function FormCreate() {
  ExpBar =   new ProgressBar("ExpBar", "$remaining XP needed for next level");
  EncumBar = new ProgressBar("EncumBar", "$position/$max cubits");
  PlotBar =  new ProgressBar("PlotBar", "$time remaining");
  QuestBar = new ProgressBar("QuestBar", "$percent% complete");
  TaskBar =  new ProgressBar("TaskBar", "$percent%");

  AllBars = [ExpBar,PlotBar,TaskBar,QuestBar,EncumBar];

  Traits =    new ListBox("Traits",    2, K.Traits);
  Stats =     new ListBox("Stats",     2, K.Stats);
  Spells =    new ListBox("Spells",    2);
  Equips =    new ListBox("Equips",    2, K.Equips);
  Inventory = new ListBox("Inventory", 2);
  Plots =     new ListBox("Plots",  1);
  Quests =    new ListBox("Quests", 1);

  Plots.load = function (sheet) {
    for (var i = Max(0, game.act-99); i <= game.act; ++i)
      this.AddUI(i ? 'Act ' + toRoman(i) : "Prologue");

  };

  AllLists = [Traits,Stats,Spells,Equips,Inventory,Plots,Quests];

  if (document) {
    Kill = $("#Kill");

    $("#quit").click(quit);

    $(document).keypress(FormKeyDown);

    $(document).bind('beforeunload', function () {
      if (!storage)
        return "Are you sure you want to quit? All your progress will be lost!";
    });

    $(window).unload(function (event) {
      StopTimer();
      SaveGame();
      if (storage.async) {
        // Have to give SQL transaction a chance to complete
        if (window.showModalDialog)
          pause(100);

        // Just accept some data loss - alert is too ugly. Maybe increase save 
        // frequency.
        // else alert("Game saved"); 
      }
    });

    if (iOS) $("body").addClass("iOS");
  }

  var name = unescape(window.location.href.split('#')[1]);
  storage.loadSheet(name, LoadGame);
}*/



/*function pause(msec) {
  window.showModalDialog("javascript:document.writeln ('<script>window.setTimeout(" +
                         "function () { window.close(); }," + msec + ");</script>')",
                         null, 
                         "dialogWidth:0;dialogHeight:0;dialogHide:yes;unadorned:yes;"+
                  "status:no;scroll:no;center:no;dialogTop:-10000;dialogLeft:-10000");
}*/

/*function quit() {
  $(window).unbind('unload');
  SaveGame(function () { window.location.href = "roster.html"; });
}*/


/*function HotOrNot() {
  // Figure out which spell is best
  if (Spells.length()) {
    var flat = 1;  // Flattening constant
    var best = 0, i;
    for (i = 1; i < Spells.length(); ++i) {
      if ((i+flat) * toArabic(Get(Spells,i)) >
          (best+flat) * toArabic(Get(Spells,best)))
        best = i;
    }
    game.bestspell = Spells.label(best) + ' ' + Get(Spells, best);
  } else {
    game.bestspell = '';
  }

  /// And which stat is best?
  best = 0;
  for (i = 1; i <= 5; ++i) {
    if (GetI(Stats,i) > GetI(Stats,best))
      best = i;
  }
  game.beststat = Stats.label(best) + ' ' + GetI(Stats, best);
}*/


/*function SaveGame(callback) {
  Log('Saving game: ' + GameSaveName());
  HotOrNot();
  game.date = ''+new Date();
  game.stamp = +new Date();
  game.seed = randseed();
  storage.addToRoster(game, callback);
}*/

/*function LoadGame(sheet) {
  if (!sheet) {
    alert("Error loading game");
    window.location.href = "roster.html";
    return;
  }

  game = sheet;

  /*
  if (!window.localStorage) {
    // Cookies can't hold a whole game save
    storage.removeItem("roster");
    storage = null;
  }
*/

  /*if (document) {
    var title = "Progress Quest - " + GameSaveName();
    $("#title").text(title);
    if (iOS) title = GameSaveName();
    document.title = title;
  }
  

  randseed(game.seed);
  $.each(AllBars.concat(AllLists), function (i, e) { e.load(game); });
  if (Kill)
    Kill.text(game.kill);
  ClearAllSelections();
  $.each([Plots,Quests], function () {
    this.CheckAll(true);
  });
  Log('Loaded game: ' + game.Traits.Name);
  if (!game.elapsed)
    Brag('start');
  StartTimer();
}*/

/*function GameSaveName() {
  if (!game.saveName) {
    game.saveName = Get(Traits, 'Name');
    if (game.realm)
      game.saveName += ' [' + game.realm + ']';
  }
  return game.saveName;
}*/


/*function InputBox(message, def) {
  var i = prompt(message, def || '');
  return (i !== null) ? i : def;
}*/





/*

function tabulate(list) {
  var result = '';
  $.each(list, function (index) {
    if (this.length == 2) {
      if (this[1].length)
        result += "   " + this[0] + ": " + this[1] + "\n";
    } else {
      result += "   " + this + "\n";
    }
  });
  return result;
}


String.prototype.escapeHtml = function () {
  return this.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}


function template(tmpl, data) {
  var brag = tmpl.replace(/\$([_A-Za-z.]+)/g, function (str, p1) {
    var dict = data;
    $.each(p1.split("."), function (i,v) {
      if (!dict) return true;
      if (v == "___") {
        dict = tabulate(dict);
      } else {
        dict = dict[v.replace("_"," ")];
        if (typeof dict == typeof "")
          dict = dict.escapeHtml();
      }
      return null;
    });
    if (dict === undefined) dict = '';
    return dict;
  });
  return brag;
}

// From http://baagoe.com/en/RandomMusings/javascript/
  // Johannes BaagÃ¸e <baagoe@baagoe.com>, 2010
function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = data.toString();
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  mash.version = 'Mash 0.9';
  return mash;
}


// From http://baagoe.com/en/RandomMusings/javascript/
function Alea() {
  return (function(args) {
    // Johannes BaagÃ¸e <baagoe@baagoe.com>, 2010
    var s0 = 0;
    var s1 = 0;
    var s2 = 0;
    var c = 1;
    
    if (!args.length) {
      args = [+new Date];
    }
    var mash = Mash();
    s0 = mash(' ');
    s1 = mash(' ');
    s2 = mash(' ');
    
    for (var i = 0; i < args.length; i++) {
      s0 -= mash(args[i]);
      if (s0 < 0) {
        s0 += 1;
      }
      s1 -= mash(args[i]);
      if (s1 < 0) {
        s1 += 1;
      }
      s2 -= mash(args[i]);
      if (s2 < 0) {
        s2 += 1;
      }
    }
    mash = null;
    
    var random = function() {
      var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32
      s0 = s1;
      s1 = s2;
      return s2 = t - (c = t | 0);
    };
    random.uint32 = function() {
      return random() * 0x100000000; // 2^32
    };
    random.fract53 = function() {
      return random() + 
        (random() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
    };
    random.version = 'Alea 0.9';
    random.args = args;
    random.state = function (newstate) {
      if (newstate) {
        s0 = newstate[0];
        s1 = newstate[1];
        s2 = newstate[2];
        c = newstate[3];
      }
      return [s0,s1,s2,c];
    };
    return random;
    
  } (Array.prototype.slice.call(arguments)));
}


var seed = new Alea();

function Random(n) {
  return seed.uint32() % n;
}


function randseed(set) {
  return seed.state(set);
}


function Pick(a) {
  return a[Random(a.length)];
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

function LocalStorage() {
  this.getItem = function (key, callback) {
    var result = window.localStorage.getItem(key);
    if (callback)
      callback(result);
  };

  this.setItem = function (key, value, callback) {
    window.localStorage.setItem(key, value);
    if (callback)
      callback();
  };

  this.removeItem = function (key) {
    window.localStorage.removeItem(key);
  };
}


function CookieStorage() {
  this.getItem = function(key, callback) {
    var result;
    $.each(document.cookie.split(";"), function (i,cook) {
      if (cook.split("=")[0] === key)
        result = unescape(cook.split("=")[1]);
    });
    if (callback)
      setTimeout(function () { callback(result); }, 0);
    return result;
  };
  
  this.setItem = function (key, value, callback) {
    document.cookie = key + "=" + escape(value);
    if (callback)
      setTimeout(callback, 0);
  };

  this.removeItem = function (key) {
    document.cookie = key + "=; expires=Thu, 01-Jan-70 00:00:01 GMT;";
  };
}

function SqlStorage() {
  this.async = true;

  this.db = window.openDatabase("pq", "", "Progress Quest", 2500);

  this.db.transaction(function(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS Storage(key TEXT UNIQUE, value TEXT)");
  });

  this.getItem = function(key, callback) {
    this.db.transaction(function (tx) {
      tx.executeSql("SELECT value FROM Storage WHERE key=?", [key], function(tx, rs) {
        if (rs.rows.length) 
          callback(rs.rows.item(0).value);
        else
          callback();
      });
    });
  };
  
  this.setItem = function (key, value, callback) {
    this.db.transaction(function (tx) {
      tx.executeSql("INSERT OR REPLACE INTO Storage (key,value) VALUES (?,?)",
                    [key, value], 
                    callback);
    });
  };
  
  this.removeItem = function (key) {
    this.db.transaction(function (tx) {
      tx.executeSql("DELETE FROM Storage WHERE key=?", [key]);
    });
  };
}

var iPad = navigator.userAgent.match(/iPad/);
var iPod = navigator.userAgent.match(/iPod/);
var iPhone = navigator.userAgent.match(/iPhone/);
var iOS = iPad || iPod || iPhone;

var storage = ((window.localStorage && !iOS) ? new LocalStorage() :
               window.openDatabase ? new SqlStorage() :
               new CookieStorage());
  
storage.loadRoster = function (callback) {
  function gotItem(value) {
    if (value) {
      try {
        value = JSON.parse(value);
      } catch (err) {
        // aight
      }
    }
    storage.games = value || {};
    callback(storage.games);
  }
  this.getItem("roster", gotItem);
}

storage.loadSheet = function (name, callback) {
  return this.loadRoster(function (games) {
    if (callback)
      callback(games[name]);
  });
}


storage.storeRoster = function (roster, callback) {
  this.games = roster;
  try {
    this.setItem("roster", JSON.stringify(roster), callback);
  } catch (err) {
    if (err.toString().indexOf("QUOTA_EXCEEDED_ERR") != -1) {
      alert("This browser lacks storage capacity to save this game. This game can continue but cannot be saved. (Mobile Safari, I'll wager?)");
      this.storeRoster = function (roster, callback) {
        setTimeout(callback, 0);
      };
      setTimeout(callback, 0);
    } else {
      throw err;
    }
  }
}

storage.addToRoster = function (newguy, callback) {
  if (this.games) {
    this.games[newguy.Traits.Name] = newguy;
    this.storeRoster(this.games, callback);
  } else {
    this.loadRoster(function () {
      if (storage.games)  // should always be true
        storage.addToRoster(newguy, callback);
    });
  }
}

Number.prototype.div = function (divisor) {
  var dividend = this / divisor;
  return (dividend < 0 ? Math.ceil : Math.floor)(dividend);
};


function LevelUpTime(level) {  // seconds 
  // 20 minutes per level
  return 20 * level * 60;
}

*/