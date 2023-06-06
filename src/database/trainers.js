// first item in trainers array (alltrainers[n].trainers[n][0]) == trainer name
// special trainers like rival and gym battles have the name 'name&custom' - ignore for now - then create custom moveset and/or trainer ai
// pokemons are stored as ' pokemonname + & + pokemonlevel '
// use array index as identifyers

export default trainers = [
  {
    location: "viridian forest",
    trainers: [
      ["bug catcher", "weedle 7", "caterpie 6"],
      ["bug catcher", "weedle 7", "kakuna 7", "weedle 7"],
      ["bug catcher", "weedle 9"],
    ],
  },
  {
    location: "pewter city gym",
    trainers: [
      ["jr trainer male", "diglett 11", "sandshrew 11"],
      ["brock custom", "geodude 12", "onix 14"],
    ],
  },
  {
    location: "route 3",
    trainers: [
      ["lass", "pidgey 9", "pidgey 9"],
      ["bug catcher", "caterpie 9"],
      ["Youngster", "rattata 11", "ekans 11"],
      ["bug catcher", "weedle 9", "kakuna 9", "caterpie 9", "metapod 9"],
      ["Youngster", "spearow 14"],
      ["lass", "rattata 10", "nidoran-m 10"],
      ["bug catcher", "caterpie 11", "metapod 11"],
      ["lass", "jigglypuff 14"],
    ],
  },
  {
    location: "mt moon 1f",
    trainers: [
      ["lass", "clefairy 14"],
      ["bug catcher", "weedle 11", "kakuna 11"],
      ["supernerd", "magnemite 11", "voltorb 14"],
      ["bug catcher", "caterpie 10", "metapod 10", "caterpie 10"],
      ["lass", "oddish 11", "bellsprout 11"],
      ["Youngster", "rattata 10", "rattata 10", "zubat 10"],
      ["hiker", "geodude 10", "geodude 10", "onix 10"],
    ],
  },
  {
    location: "mt moon b2f",
    trainers: [
      ["rocket", "sandshrew 11", "rattata 11", "zubat 11"],
      ["rocket", "zubat 12", "ekans 12"],
      ["rocket", "raticate 16"],
      ["rocket", "rattata 13", "zubat 13"],
      ["supernerd", "grimer 12", "voltorb 12", "koffing 12"],
    ],
  },
  {
    location: "cerulean city gym",
    trainers: [
      ["swimmer", "horsea 16", "shellder 16"],
      ["jr trainer female", "goldeen 19"],
      ["misty", "staryu 18", "starmie 21"],
    ],
  },
  {
    location: "route 24",
    trainers: [
      ["gary", "pidgeotto 18", "abra 15", "rattata 15", "varies 15"],
      ["bug catcher", "caterpie 14", "weedle 14"],
      ["lass", "pidgey 14", "nidoran-f 14"],
      ["Youngster", "rattata 14", "ekans 14", "zubat 14"],
      ["lass", "pidgey 16", "nidoran-f 16"],
      ["junior trainer male", "mankey 18"],
      ["rocket", "ekans 15", "zubat 15"],
      ["junior trainer male", "rattata 14", "ekans 14"],
    ],
  },
  {
    location: "route 25",
    trainers: [
      ["hiker", "pidgeotto 18", "abra 15", "rattata 15", "varies 15"],
      ["hiker", "machop 15", "geodude 15"],
      ["Youngster", "rattata 15", "spearow 15"],
      ["hiker", "onix 17"],
      ["Youngster", "slowpoke 17"],
      ["lass", "nidoran-m 15", "nidoran-f 15"],
      ["hiker", "geodude 13", "geodude 13", "machop 13", "geodude 13"],
      ["junior trainer male", "rattata 14", "ekans 14"],
      ["Youngster", "ekans 14", "sandshrew 14"],
      ["lass", "oddish 13", "pidgey 13", "oddish 13"],
    ],
  },
  {
    location: "cerulean city",
    trainers: [["back of house - rocket", "machop 17", "drowzee 17"]],
  },
  {
    location: "route 6",
    trainers: [
      ["junior trainer male", "squirtle 20"],
      ["junior trainer female", "rattata 16", "pikachu 16"],
      ["bug catcher", "butterfree 16"],
      ["junior trainer female", "pidgey 16", "pidgey 16", "pidgey 16"],
      ["junior trainer male", "spearow 16", "raticate 16"],
    ],
  },
  {
    location: "s.s anne main floor",
    trainers: [
      ["gentleman", "growlithe 18", "growlithe 18"],
      ["gentleman", "nidoran-m 19", "nidoran-f 19"],
      ["lass", "pidgey 18", "nidoran-f 18"],
      ["Youngster", "nidoran-m 21"],
    ],
  },
  {
    location: "s.s anne basement",
    trainers: [
      ["sailor", "horsea 17", "shellder 17", "tentacool 17"],
      ["sailor", "shellder 21"],
      ["sailor", "horsea 17", "horsea 17"],
      ["sailor", "tentacool 18", "staryu 18"],
      ["fisherman", "tentacool 17", "staryu 17", "shellder 17"],
      ["sailor", "machop 20"],
    ],
  },
  {
    location: "s.s anne second floor",
    trainers: [["gary", "pidgeotto 19", "raticate 16", "kadabra 18", "varies 20"]],
  },
  {
    location: "s.s anne top deck",
    trainers: [["sailor", "machop 18", "shellder 18"]],
  },
  {
    location: "vermillion city gym",
    trainers: [
      ["sailor", "pikachu 21", "pikachu 21"],
      ["rocker", "voltorb 20", "magnemite 20", "voltorb 20"],
      ["gentleman", "pikachu 23"],
    ],
  },
  {
    location: "route 12",
    trainers: [
      ["Youngster", "ekans 21"],
      ["gambler", "poliwag 18", "horsea 18"],
      ["Youngster", "sandshrew 19", "zubat 19"],
      ["Youngster", "nidoran-m 18", "nidorino 18"],
      ["gambler", "bellsprout 18", "oddish 18"],
      ["gambler", "growlithe 18", "vulpix 18"],
      ["engineer", "magnemite 21"],
      ["engineer", "magnemite 18", "magnemite 18", "magneton 18"],
      ["gambler", "voltorb 18", "magnemite 18"],
      ["Youngster", "rattata 17", "rattata 17", "raticate 17"],
    ],
  },
  {
    location: "route 9",
    trainers: [
      ["junior trainer female", "oddish 18", "bellsprout 18", "oddish 18", "bellsprout 18"],
      ["hiker", "machop 20", "onix 20"],
      ["junior trainer male", "growlithe 21", "charmander 21"],
      ["bug catcher", "beedrill 19", "beedrill 19"],
      ["bug catcher", "caterpie 20", "Weedle 20", "venonat 20"],
      ["hiker", "geodude 21", "onix 21"],
      ["junior trainer male", "rattata 19", "diglett 19", "ekans 19", "sandshrew 19"],
      ["hiker", "geodude 20", "machop 20", "geodude 20"],
      ["junior trainer female", "meowth 23"],
    ],
  },
  {
    location: "rock tunnel",
    trainers: [
      ["outside - junior trainer female", "pikachu 20", "clefairy 20"],
      ["pokomaniac", "cubone 23", "slowpoke 23"],
      ["pokemaniac", "slowpoke 25"],
      ["junior trainer female", "oddish 22", "bulbasaur 22"],
      ["pokemaniac", "charmander 22", "cubone 22"],
      ["lower - hiker", "geodude 25"],
      ["upper - hiker", "machop 20", "onix 20"],
      ["hiker", "geodude 19", "machop 19", "geodude 19", "geodude 19"],
      ["left - hiker", "onix 20", "onix 20", "geodude 20"],
      ["hiker", "geodude 21", "graveler 21"],
      ["junior trainer female", "jigglypuff 21", "pidgey 21", "meowth 21"],
      ["hiker", "geodude 21", "geodude 21", "graveler 21"],
      ["pokemaniac", "slowpoke 20", "slowpoke 20", "slowpoke 20"],
      ["junior trainer female", "bellsprout 22", "clefairy 22"],
      ["junior trainer female", "pidgey 19", "rattata 19", "rattata 19", "bellsprout 19"],
      ["junior trainer female", "meowth 20", "oddish 20", "pidgey 20"],
      ["outside, 1st - junior trainer female", "pidgey 21", "pidgeotto 21"],
      ["outside, left - hiker", "geodude 21", "onix 21"],
      ["outside, left, 2nd - hiker", "onix 19", "graveler 19"],
      ["outside, lower - pokemaniac", "cubone 20", "slowpoke 20"],
    ],
  },
  {
    location: "pokemon tower - second floor",
    trainers: [["gary", "pidgeotto 25", "growlithe 23", "exeggecute 22", "kadabra 20", "varies 25"]],
  },
  {
    location: "pokemon tower - third floor",
    trainers: [
      ["top - channeler", "ghastly 23"],
      ["middle - channeler", "ghastly 24"],
      ["bottom - channeler", "ghastly 22"],
    ],
  },
  {
    location: "pokemon tower - fourth floor",
    trainers: [
      ["channeler", "ghastly 23", "ghastly 23"],
      ["left - channeler", "ghastly 24"],
      ["bottom - channeler", "ghastly 22"],
    ],
  },
  {
    location: "pokemon tower - fifth floor",
    trainers: [
      ["top - channeler", "ghastly 22"],
      ["by healing area - channeler", "ghastly 24"],
      ["bottom - channeler", "haunter 22"],
      ["right - channeler", "haunter 23"],
    ],
  },
  {
    location: "pokemon tower - sixth floor",
    trainers: [
      ["middle - channeler", "ghastly 22", "ghastly 22"],
      ["top - channeler", "ghastly 24"],
      ["left - channeler", "ghastly 24"],
      ["ghost", "marowak 30"],
    ],
  },
  {
    location: "pokemon tower - seventh floor",
    trainers: [
      ["rocket", "zubat 25", "zubat 25", "golbat 25"],
      ["rocket", "koffing 26", "drowzee 26"],
      ["rocket", "zubat 23", "rattata 23", "raticate 23", "zubat 23"],
    ],
  },
  {
    location: "route 8",
    trainers: [
      ["lass", "clefairy 22", "clefairy 22"],
      ["gambler", "growlithe 24", "vulpix 24"],
      ["super nerd", "grimer 22", "muk 22", "grimer 22"],
      ["top - lass", "nidoran-f 23", "nidorina 23"],
      ["2nd to top - super nerd", "koffing 26"],
      ["2nd to bottom - lass", "meowth 24", "meowth 24", "meowth 24"],
      ["bottom - lass", "pidgey 19", "rattata 19", "nidoran-m 19", "meowth 19", "pikachu 19"],
      ["gambler", "poliwag 22", "poliwag 22", "poliwhirl 22"],
      ["super nerd", "voltorb 22", "koffing 22", "voltorb 22", "magnemite 22"],
    ],
  },
  {
    location: "celadon gym",
    trainers: [
      ["lass", "bellsprout 23", "Weepinbell 23"],
      ["beauty", "oddish 21", "bellsprout 21", "oddish 21", "bellsprout 21"],
      ["right - junior trainer female", "bulbasaur 24", "ivysaur 24"],
      ["left - beauty", "bellsprout 21"],
      ["cool trainer female", "weepinbell 24", "gloom 24", "ivysaur 24"],
      ["inside, right - lass", "oddish 23", "gloom 23"],
      ["inside, left - beauty", "exeggcute 26"],
      ["inside, 2nd from left - erika", "victreebel 29", "tangela 24", "vileplume 29"],
    ],
  },
  {
    location: "game corner - main floor",
    trainers: [["rocket", "raticate 20", "zubat 20"]],
  },
  {
    location: "game corner - basement one",
    trainers: [
      ["left - rocket", "raticate 21", "raticate 21"],
      ["right - rocket", "drowzee 21", "machop 21"],
      ["elevator - rocket", "grimer 22", "koffing 22"],
    ],
  },
  {
    location: "game corner - basement two",
    trainers: [
      ["first - rocket", "zubat 17", "koffing 17", "grimer 17", "zubat 17", "raticate 17"],
      ["bottom - rocket", "rattata 19", "raticate 19", "rattata 19"],
      ["bottom, 2nd - rocket", "grimer 20", "koffing 20", "koffing 20"],
    ],
  },
  {
    location: "game corner - basement three",
    trainers: [
      ["rocket", "rattata 20", "raticate 20", "drowzee 20"],
      ["bottom - rocket", "machop 21", "machop 21"],
    ],
  },
  {
    location: "game corner - basement four",
    trainers: [
      ["top - rocket", "koffing 21", "zubat 21"],
      ["elevator, left - rocket", "ekans 23", "sandshrew 23", "arbok 23"],
      ["elevator, right - rocket", "sandshrew 23", "ekans 23", "sandslash 23"],
      ["inside - giovanni", "onix 25", "rhyhorn 24", "kangaskhan 29"],
    ],
  },
  {
    location: "saffron city - dojo",
    trainers: [
      ["blackbelt", "machop 31", "mankey 31", "primeape 31"],
      ["blackbelt", "machop 32", "machoke 32"],
      ["blackbelt", "primeape 36"],
      ["blackbelt", "mankey 31", "primeape 31"],
      ["blackbelt", "hitmonlee 37", "hitmonchan 37"],
    ],
  },
  {
    location: "sliph co second floor",
    trainers: [
      ["1st - rocket", "golbat 25", "zubat 25", "zubat 25", "raticate 25", "zubat 25"],
      ["center - rocket", "cubone 29", "zubat 29"][("bottom - scientist", "magnemite 28", "voltorb 28", "magneton 28")],
      ["bottom left - scientist", "grimer 26", "weezing 26", "koffing 26", "weezing 26"],
    ],
  },
  {
    location: "sliph co third floor",
    tariners: [
      ["1st - rocket", "raticate 28", "hypno 28", "raticate 28"],
      ["left - scientist", "electrode 29", "weezing 29"],
    ],
  },
  {
    location: "sliph co fourth floor",
    trainers: [
      ["lower left - rocket", "machop 29", "drowzee 29"],
      ["right - rocket", "ekans 28", "zubat 28", "cubone 28"],
      ["middle - scientist", "electrode 23"],
    ],
  },
  {
    location: "sliph co fifth floor",
    trainers: [
      ["right - rocket", "hypno 33"],
      ["middle - juggler", "kadabre 29", "mr-mine 29"],
      ["left - scientist", "magneton 26", "koffing 26", "weezing 26", "magnemite 26"],
      ["bottom - rocket", "arbok 33"],
    ],
  },
  {
    location: "sliph co sixth floor",
    trainers: [
      ["top - rocket", "machop 29", "machoke 29"],
      ["bottom - rocket", "zubat 28", "zubat 28", "golbat 28"],
      ["middle - scientist", "voltorb 25", "koffing 25", "magneton 25", "magnemite 25", "koffing 25"],
    ],
  },
  {
    location: "sliph co seventh floor",
    trainers: [
      ["1st - rocket", "cubone 29", "cubone 29"],
      ["left - rocket", "raticate 26", "arbok 26", "koffing 26", "golbat 26"],
      ["bottom left - scientist", "electrode 29", "muk 29"],
      ["bottom right - rocket", "sandshrew 29", "sandshrew 29"],
      ["gary&custom", "pidgeot 37", "growlithe 38", "exeggute 35", "alakazam 35", "varies 40"],
    ],
  },
  {
    location: "sliph co eighth floor",
    trainers: [
      ["top - scientist", "grimer 29", "electrode 29"],
      ["bottom - rocket", "weezing 28", "golbat 28", "koffing 28"],
      ["top - rocket", "raticate 26", "zubat 26", "golbat 26", "rattata 26"],
    ],
  },
  {
    location: "sliph co ninth floor",
    trainers: [
      ["bottom - rocket", "golbat 28", "drowzee 28", "hypno 28"],
      ["right - scientist", "voltorb 28", "koffing 28", "magneton 28"],
      ["upper left - rocket", "drowzee 28", "grimer 28", "machop 28"],
    ],
  },
  {
    location: "sliph co tenth floor",
    trainers: [
      ["1st - scientist", "magnemite 29", "koffing 29"],
      ["2st - rocket", "machoke 33"],
    ],
  },
  {
    location: "sliph co eleventh floor",
    trainers: [
      ["1st - rocket", "rattata 25", "rattata 25", "zubat 25", "rattata 25", "ekans 25"],
      ["giovanni&custom", "nidorino 37", "kangaskhan 35", "rhyhorn 37", "nidoqueen 41"],
    ],
  },
  {
    location: "saffron city gym",
    trainers: [
      ["1st - psychic", "slowpoke 33", "slowpoke 33", "slowbro 33"],
      ["right side, middle - psychic", "mr-mime 34", "kadabra 31"],
      ["right side, top - psychic", "kadabra 31", "slowpoke 31", "mr-mime 31", "kadabra 31"],
      ["left bottom - channeler", "ghastly 30", "ghastly 30", "haunter 30"],
      ["left middle - channeler", "haunter 38"],
      ["left top - psychic", "slowbro 38"],
      ["middle top - channeler", "ghastly 34", "haunter 34"],
      ["sabrina&custom", "kadabra 38", "mr-mime 37", "venomoth 38", "alakazam 43"],
    ],
  },
  {
    location: "route 16",
    trainers: [
      ["1st - biker", "grimer 29", "koffing 29"],
      ["2nd - cueball", "machop 28", "mankey 28", "machop 28"],
      ["3rd - cueball", "mankey 29", "machop 29"],
      ["4th top - cueball", "machop 33"],
      ["4th bottom - biker", "weezing 33"],
      ["5th - biker", "grimer 26", "grimer 26", "grimer 26", "grimer 26"],
    ],
  },
  {
    location: "route 17",
    trainers: [
      ["left side 1th - biker", "weezing 28", "koffing 28", "weezing 28"],
      ["left side 2nd - biker", "muk 33"],
      ["left side 3rd - cueball", "mankey 26", "mankey 26", "machoke 26", "machop 26"],
      ["left side 4th - biker", "weezing 29", "muk 29"],
      ["right side 1st - cueball", "machop 29", "machoke 29"],
      ["right side 2nd - cueball", "mankey 29", "primeape 29"],
      ["right side 3rd - biker", "voltorb 29", "voltorb 29"],
      ["right side 4th - cueball", "machoke 33"],
      ["right side 5th - cueball", "primeape 29", "machoke 29"],
      ["bottom - biker", "koffing 25", "weezing 25", "koffing 25", "koffing 25", "weezing 25"],
    ],
  },
  {
    location: "route 18",
    trainers: [
      ["left - birdkeeper", "spearow 29", "fearow 29"],
      ["middle - birdkeeper", "spearow 26", "spearow 26", "fearow 26", "spearow 26"],
      ["bottom - birdkeeper", "dodrio 34"],
    ],
  },
  {
    location: "fuchsia city gym",
    trainers: [
      ["right - juggler", "hypno 38"],
      ["left - juggler", "drowzee 34", "kadabra 34"],
      ["right - juggler", "drowzee 31", "drowzee 31", "kadabra 31", "drowzee 31"],
      ["right - tamer", "arbok 33", "sandslash 33", "arbok 33"],
      ["top left - tamer", "sandslash 34", "arbok 34"],
      ["middle left - juggler", "drowzee 34", "hypno 34"],
      ["koga&custom", "koffing 37", "muk 39", "koffing 37", "weezing 43"],
    ],
  },
  {
    location: "route 15",
    trainers: [
      ["junior trainer female", "bellsprout 29", "oddish 29", "tangela 29"],
      ["bird keeper", "pidgeotto 26", "farfetch-d 26", "doduo 26", "pidgey 26"],
      ["bird keeper", "dodrio 28", "doduo 28", "doduo 28"],
      ["bottom - junior trainer", "gloom 28", "oddish 28", "oddish 28"],
      ["top - beauty", "bulbasaur 29", "ivysaur 29"],
      ["biker", "koffing 28", "grimer 28", "weezing 28"],
      ["biker", "koffing 28", "koffing 28", "weezing 28", "koffing 28", "grimer 28"],
      ["junior trainer female", "pikachu 29", "raichu 29"],
      ["bottom - beauty", "pidgeotto 29", "wigglytuff 29"],
      ["bird keeper", "spearow 29", "fearow 29"],
      ["back top level - junior trainer female", "clefairy 33"],
    ],
  },
  {
    location: "route 14",
    trainers: [
      ["left side - biker", "grimer 28", "grimer 28", "koffing 28"],
      ["left side - biker", "koffing 29", "grimer 29"],
      ["left side - biker", "koffing 26", "koffing 26", "grimer 26", "koffing 26"],
      ["right side - bird keeper", "farfetch-d 33"],
      ["right side - biker", "koffing 29", "muk 29"],
      ["right side - bird keeper", "spearow 28", "doduo 28", "spearow 28"],
      ["right side - bird keeper", "pidgeotto 29", "fearow 29"],
    ],
  },
  {
    location: "route 13 left",
    trainers: [
      ["left bottom - bird keeper", "pidgey 26", "pidgeotto 26", "spearow 26", "fearow 26"],
      ["center right bottom - junior trainer female", "pidgey 27", "meowth 27", "pidgey 27", "pidgeotto 27"],
      ["right midlle - junior trainer female", "poliwag 30", "poliwag 30"],
      ["right top left - beauty", "cleafairy 29", "meowth 29"],
      ["right top right - beauty", "rattata 27", "pikatchu 27", "tattata 27"],
    ],
  },
  {
    location: "route 13 right",
    trainers: [
      ["junior trainer female", "pidgey 24", "meowth 24", "rattata 24", "pikachu 24", "meowth 24"],
      ["bird keeper", "pidgey 29", "pidgeotto 29"],
      ["junior trainer female", "goldeen 28", "poliwag 28", "horsea 28"],
      ["junior trainer male", "nidoran-m 29", "nidorino 29"],
      ["fisherman", "magikarp 24", "magikarp 24"],
      ["rocker", "voltorb 29", "electrode 29"],
    ],
  },
  {
    location: "route 12",
    trainers: [
      ["fisherman", "poliwag 21", "shellder 21", "goldeen 21", "horsea 21"],
      ["fisherman", "goldeen 27"],
      ["ficherman", "tentacool", "goldeen 27"],
      ["ficherman", "goldeen 22", "poliwag 22", "goldeen 22"],
    ],
  },
  {
    location: "route 19 down",
    trainers: [
      ["right land - swimmer", " goldeen 29", "horsea 29", "staryu 29"],
      ["left land - swimmmer", "tentacool 30", "shellder 30"],
      ["water - swimmer", "horsea 30", "horsea 30"],
      ["swimmer", "poliwag 30", "poliwag 30", "poliwhirl 30"],
      ["swimmer", "horsea 27", "tentacool 27", "tentacool 27", "goldeen 27"],
      ["swimmer", "goldeen 29", "shellder 29", "seaking 29"],
      ["top - swimmer", "tentacool 27", "tentacool 27", "staryu 27", "horsea 27", "teantacool 27"],
      ["left - beauty", "poliwag 27", "goldeen 27", "seaking 27", "goldeen 27", "poliwag 27"],
      ["right - beauty", "goldeen 30", "seaking 30"],
      ["bottom - beauty", "staryu 29", "staryu 29", "staryu 29"],
    ],
  },
  {
    location: "route 19 left",
    trainers: [
      ["bottom - swimmer", "horsea 28", "horsea 28", "seadre 28", "horsea 28"],
      ["top - swimmer", "shellder 31", "cloyster 31"],
      ["beauty", "seadra 30", "horsea 30", "seadra 30"],
      ["outside cave - beauty", "seaking 35"],
    ],
  },
  {
    location: "route 19 after seafoam island cave",
    trainers: [
      ["junior trainer female", "teantcool 30", "horsea 30", "seel 30"],
      ["swimmer", "staryu 35"],
      ["platform - birdkeeper", "fearow 30", "fearow 30", "pidgeotto 30"],
      ["junior trainer female", "goldeen 31", "seaking 31"],
      ["beauty", "poliwag 31", "seaking 31"],
    ],
  },
  {
    location: "cinnabar island - pokemon mansion",
    trainers: [
      ["2nd floor - burglar", "charmander 34", "charmeleon 34"],
      ["3rd floor right - scientist", "magnemite 33", "magneton 33", "valtorb 33"],
      ["1st floor scientist", "electrode 29", "weezing 29"],
      ["basement - burglar", "growlithe 34", "ponyta 34"],
      ["basement - scientist", "magnemite 34", "electrode 34"],
      ["2nd floor - burglar", "ninetales 38"],
    ],
  },
  {
    location: "cinnabar island - gym",
    trainers: [
      ["burglar", "growlithe 36", "vulpix 36", "ninetales 36"],
      ["supernerd", "vulpix 36", "vulpix 36", "ninetales 36"],
      ["supernerd", "ponyta 34", "charmander 24", "vulpix 34", "growlithe 34"],
      ["burglar", "ponyta 41"],
      ["supernerd", "rapidash 41"],
      ["burglar", "vulpix 37", "growlithe 37"],
      ["supernerd", "growlithe 37", "vulpix 37"],
      ["blane&custom", "growlithe 42", "ponyta 40", "rapidash 42", "arcanine 47"],
    ],
  },
  {
    location: "route 21",
    trainers: [
      ["left- swimmer", "staryu 33", "wartortle 33"],
      ["right - swimmer", "poliwhirl 32", "tentacool 32", "seadra 32"],
      ["right - swimmer", "starmie 37"],
      ["right - fisherman", "seaking 33", "goldeen 33"],
      ["left - fisherman", "shellder 31", "cloyster 31"],
      ["bottom - swimmer", "seadra 33", "tentacruel 33"],
      ["top - cueball", "tentacool 31", "tentacool 31", "tentacruel 31"],
      ["bottom - fisherman", "magikarp 27", "magikarp 27", "magikarp 27", "magikarp 27", "magikarp 27", "magikarp 27"],
      ["top - fisherman", "seaking 28", "goldeen 28", "seaking 28", "seaking 28"],
    ],
  },
  {
    location: "viridian city gym",
    trainers: [
      ["blackbelt", "machoke 38", "machop 38", "machoke 38"],
      ["bottom left - tamer", "arbok 39", "tauros"],
      ["left middle - blackbelt", "machoke 43"],
      ["center - cooltrainer male", "sandslash 39", "dugtrio 39"],
      ["center - blackbelt", "machop 40", "machoke 40"],
      ["center - tamer", "rhyhorn 43"],
      ["above center - cooltrainer male", "rhyhorn 43"],
      ["above center - cooltrainer male", "nidorino 39", "nidoking 39"],
      ["giovanni&custom", "rhyhorn 45", "dugtrio 42", "nidoqueen 44", "nidoking 45", "rhydon 50"],
    ],
  },
  {
    location: "route 22",
    trainers: [
      ["gary&custom", "pidgeotto 47", "rhyhorn 45", "growlithe 45", "exeggcute 47", "alakazam 50", "varies 53"],
    ],
  },
  {
    location: "victory road - first floor",
    trainers: [
      ["middle - cooltrainer female", "persian 44", "ninetales 44"],
      ["top corner - cooltrainer male", "ivysaur 42", "wartortle 42", "charmeleon 42", "charizard 42"],
    ],
  },
  {
    location: "victory road - second floor",
    trainers: [
      ["blackbelt", "machoke 43", "machop 43", "machoke 43"],
      ["juggler", "drowzee 41", "hypno 41", "kadabra 41", "kadabra 41"],
      ["tamer", "persian 44", "golduck 44"],
      ["juggler", "mr-mime 48"],
      ["top right corner - pokemaniac", "charmeleon 40", "lapras 40", "lickitung 40"],
    ],
  },
  {
    location: "victory road - third floor",
    trainers: [
      ["right by item - cooltrainer male", "executor 43", "cloyster 43", "arcanine 43"],
      ["platform center - cooltrainer female", "parasect 43", "dewgong 43", "chansey 43"],
      ["bottom lower - cooltrainer male", "kingler 43", "tentacruel 43", "blastoise 43"],
      ["bottom upper - cooltrainer female", "bellsprout 43", "weepinbell 43", "victreebel 43"],
    ],
  },
  {
    location: "elit four",
    trainers: [
      ["lorelei&custom", "dewgong 54", "cloyster 53", "slowbro 54", "jynx 56", "lapras 56"],
      ["bruno&custom", "onix 53", "hitmonchan 55", "hitmonlee 55", "onix 56", "machamp 58"],
      ["agatha&custom", "gengar 56", "golbat 56", "haunter 55", "arbok 58", "gengar 60"],
      ["lance&custom", "gyarados 58", "dragonair 56", "dragonair 56", "aerodactyl 60", "dragonite 62"],
      ["bulbasaur gary&custom", "pidgeot 61", "alakazam 59", "rhydon 61", "gyarados 61", "arcanine 63", "venusaur 65"],
      ["squirtle gary&custom", "pidgeot 61", "alakazam 59", "rhydon 61", "gyarados 61", "exeggutor 61", "charizard 65"],
      ["charmander gary&custom", "pidgeot 61", "alakazam 59", "rhydon 61", "gyarados 61", "arcanine 63", "blastoise 65"],
    ],
  },
];
