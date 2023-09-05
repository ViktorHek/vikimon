# Read Me

## Installation

Open the terminal and create a repositorie

- require node version 16.20.0

#### Front-end - Vikimon

run ```npm clone https://github.com/ViktorHek/vikimon.git```

run ```cd vikomon```

run ```npm install```

run ```npm start```

Open local storage and add a column 

named ```testParty```
value:

```
[["028d0101010101first",50,0,50,0,[0,0,0,0,0],[89,10,14,10,28,10,129,10]],["028d1515151515second",50,0,50,0,[65535,65535,65535,65535,65535],[89,10,14,10,28,10,129,10]],["094p0707070707*",50,0,50,0,[10000,10000,10000,10000,10000],[109,10,95,10,92,10,94,10]],["095j1515151515bob",50,1,50,0,[0,0,65535,0,0],[103,10,20,10,89,10,104,10]],["150p0707070707*",50,0,50,0,[65535,65535,65535,65535,65535],[94,10,112,10,59,10,54,10]],["141d0707070707*",50,0,50,0,[65535,65535,65535,65535,65535],[57,10,34,10,36,10,69,10]]]
```

#### Back-end - Pokedex
run ```npm clone https://github.com/ViktorHek/pokedex.git```

run ```cd pokedex```

run ```npm install```

run ```node app.js```


## Changes from original game
* Exeggutor learns the move egg-bomb at leval 50 insted of only throught machine
* MissingNo have a defence basestat of 1 insted of 0
* removing natures 'rash' and 'careful'. also adding nature 'ultimate' that increase all stats
* mew is under the buss
* new boss called 'the developer' with maxed out pokemons.

## Ides and plans 
* there are 324 trainers in total. 
    - alternative 1: have a 324 char long list of 0 or 1. 1 = deffeated, 0 = undeffeated
    - alternative 2: group all trainers by area. aka when you exit 'mr moon' all trainers in 'mr moon' will be checked at deffeated. But if you deffeat one trainer and escape rope out, you will have to deffeat that same triner again.
* use japanise sprites as default and the american version for shinys. 
    - maybe use the shiny sprites to indicate perfect IV to reduce storage and also give the shinynes an function. 

## localStorage

N = number
L = letter
C = char, [ a-z | A-Z | 0-9 ]
B = bite, ether 0 or 1
@ = blank

### User
* 3N 3N 3N -- position on map -- first 3 numbers = what map, second 3 numbers = x cordinates, last 3 numbers = y cordinates <9>
* 10C -- player name -- can involve letters, numbers and blank <10>
* 6N -- money -- can involve numbers or blank <6>
* 8B -- badges -- if collected = 1, if not collected = 0 <8>
* ??? -- events -- example: if user have traided a pokemon with an npc

Total = 9 + 10 + 6 + 8 = 33

### Pokemons

 - example: 
151 40 viktor@@@@ 0 s 01 01 02605 09405 00305 00405

* 3N -- pokemon -- an Id corresponding to a pokemon in the DB <3>
* 2N -- level -- represent the level of the pokemon where 00 = 100 <2>
* 10C -- nickname -- a nickname to the pokemon provided by the user. if name = 'viktor', it would say 'viktor@@@@' <10>
* 1B -- ability -- pokemons ability where 0 = first ability and 1 = second ability <1>
* 1L -- nature -- one letter corresponding with an nature. there are 25 natures and 26 letters so maybe letter X can be an indicator for uniqe pokemons <1>
* 2N -- IV -- the plan is to store IV between 1-15 The IV correspond with all stats <2>
* 2N -- EV -- the plan is to store EV as EV/100. Meaning a pokemon starts at EV 00 and can go up to 65. 65 = 65535 <2>
* 3N 2N * 4 -- moves -- first 3 numbers are an Id corresponding to a move. secod 2 numbers correspond to the amount of PP. this is repeted for each move (4) <20>
* & -- separator -- indicating new type of item <1>
* x(1-6) -- multiplied by numbers of pokemons in party -- one pokemon total chars = 3+2+10+1+1+2+2+20+1 = 42. max amout of pokemons = 6. <41-252>

Total max = 252

### Big - Pokemons
* 3N -- pokemon -- an Id corresponding to a pokemon in the DB <3>
* 2N -- level -- represent the level of the pokemon where 00 = 100 <2>
* 1B -- ability -- pokemons ability where 0 = first ability and 1 = second ability <1>
* 1L -- nature -- one letter corresponding with an nature. there are 25 natures and 26 letters so maybe letter X can be an indicator for uniqe pokemons <1>
* 3N -- HP -- number representing remaning hp <3>
* 0-10C -- nickname -- a nickname to the pokemon provided by the user. if name = 'viktor', it would say 'viktor@@@@' <0-10>
* . -- seperator
* 2 * 5 = 10N -- IV -- two numbers representing IV for each stat. Max IV = 15. Order: HP, attack, defense, speed, special <10>
* 5 * 5 = 25N -- EV -- 5 numbers representing EV for each stat. Max EV = 65535 Order: HP, attack, defense, speed, special <25>
* . -- seperator
* 3N 2N * 4 -- moves -- first 3 numbers are an Id corresponding to a move. secod 2 numbers correspond to the amount of PP. this is repeted for each move (4) <20>
* & -- separator -- indicating new type of item <1>
* x(1-6) -- multiplied by numbers of pokemons in party -- one pokemon total chars = 3+2+1+1+3+10+1+10+20+1+20+1 = 73, 72 without & seperator. max amout of pokemons = 6. <72-437>

Total max = 437

### Items
* 2N 22B -- key items -- <19>
  - first number indicate if user have the bike where 0 = no bike and no 'bike voucher', 1 = 'bike voucher', 2 = bike
  - second number indicate what fossil the user have where 0 = no fossil, 1 = 'dome fossil', 2 = helix fossil
  - the rest represent the remaning key items, including HMs. 0 = do not have item, 1 = have item
  - if user put key item in the pc make item = 0 
* 2N 2N x 1-20 -- items -- first numbers correspond with item ID, second numbers correspond with amount. this can be multiplied max 20 times. <0-80>
* & -- separator -- indicating new type of item <1>
* 2N 2N x 1-5 -- balls -- first numbers correspond with ball ID, second numbers correspond with amount. can include saffary balls <0-20>

Total max = 19 + 80 + 20 = 119

### Trainers
* 324B -- trainers -- index = trainer ID where 1 = deffeated and 0 = not deffeated

Total max = 324

### PC-pokemons
* 3N -- pokemon -- an Id corresponding to a pokemon in the DB <3>
* 2N -- level -- represent the level of the pokemon where 00 = 100 <2>
* 10C -- nickname -- a nickname to the pokemon provided by the user. if name = 'viktor', it would say 'viktor@@@@' <10>
* 1B -- ability -- pokemons ability where 0 = first ability and 1 = second ability <1>
* 1L -- nature -- one letter corresponding with an nature. there are 25 natures and 26 letters so maybe letter X can be an indicator for uniqe pokemons <1>
* 2N -- IV -- the plan is to store IV between 1-15 The IV correspond with all stats <2>
* 2N -- EV -- the plan is to store EV as EV/100. Meaning a pokemon starts at EV 00 and can go up to 65. 65 = 65535 <2>
* 3N 2N * 4 -- moves -- first 3 numbers are an Id corresponding to a move. secod 2 numbers correspond to the amount of PP. this is repeted for each move (4) <20>
* & -- separator -- indicating new type of item <1>
* x(1-6) -- multiplied by numbers of pokemons in party -- one pokemon total chars = 3+2+10+1+1+2+2+20+1 = 42. max amout of pokemons = 106. <41-4452>

Total max = 4452

### PC-items
* 2N 22B -- key items -- <19>
  - first number indicate if user have the bike where 0 = no bike and no 'bike voucher', 1 = 'bike voucher', 2 = bike
  - second number indicate what fossil the user have where 0 = no fossil, 1 = 'dome fossil', 2 = helix fossil
  - the rest represent the remaning key items, including HMs. 0 = do not have item, 1 = have item
  - if user put key item in the backpack make item = 0 
* 2N 2N x 1-50 -- items -- first numbers correspond with item ID, second numbers correspond with amount. this can be multiplied max 50 times. (2 + 2) * x where x < 51. <0-200> 
* & -- separator -- indicating new type of item <1>
* 2N 2N x 1-4 -- balls -- first numbers correspond with ball ID, second numbers correspond with amount. can not include saffary balls. <0-16>

Total max = 19 + 200 + 16 = 235


## Data collection
* pokemons are taken from https://pokeapi.com/ and then manualy modifyed when nessesary
    - https://pokeapi.co/api/v2/pokemon/ditto
    - https://pokeapi.co/api/v2/move/1
* trainer list is from pokemon green witch is taken from https://gamefaqs.gamespot.com/gameboy/924467-pokemon-green/faqs/12776 
* sprites https://www.spriters-resource.com/game_boy_gbc/pokemonredblue/
* pokemon sprites https://www.pokencyclopedia.info/en/index.php?id=sprites/gen1
* inspiration https://github.com/pret/pokered 


## Map

### functionality

Start from top-left corner. y axis will be the main array holding one x axis per y-level.
```
exapmle: y: [
    x: [ 0,2,3,4,5 ],
    x: [ 1,2,3,4,2 ],
    x: [ 3,2,4,2,3 ]
]
```

### Type of tiles

- 0 = normal - walkable land with no aditional features
- 1 = block - inmovable object or wall that blocks the player from progression
- 2 = grass - place where you can find wild pokemons on land
- 3 = water - place where you can find wild pokemons on water
- letter = door - will change the map. should not be nesesary to indicate where you can enter the door

- missig:  signs - nobody reads them anyway

## Trainer AI

### Standard AI

rules: 
- will always use the attack they calculate to be the most benifisial
- doens not know th HP of themself or you
- never switch, unless they can't to anything

### Smart AI

rules:
- will always use the attack they calculate to be the most benifisial
- knows everybodys hp
- can switch. will do so if it's a bad matchup and the trainer have a pokemon in the back that can take a hit from the players most powerfull attack and hit back for substansial damage