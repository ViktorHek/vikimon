# read me

## Changes from original game
* Exeggutor learns the move egg-bomb at leval 50 insted of only throught machine
* MissingNo have a defence base stat of 1 insted of 0
* the plan is to have an number between 1-5 that indicates a pokemons IV witch effects all the stats
* the plan is to have an number between 1-65 that indicates a pokemons EV witch effects all the stats. when a pokemon is defeated, whatever pokemon, the pokemon you use will gain 10 EV / 100 = 0.1 EV. after gaining defeating 10 pokemon, the pokemon used will receave 1 EV point witsh is equal to 100 EV point in the original game. The EV piont will be saved but not the progress, meaning 1.9 EV point = 1 EV point. 
* removing natures 'rash' and 'careful'. also adding nature 'ultimate' that increase all stats

## Ides and plans 

* there are 324 trainers in total. 
    - alternative 1: have a 324 char long list of 0 or 1. 1 = deffeated, 0 = undeffeated
    - alternative 2: group all trainers by area. aka when you exit 'mr moon' all trainers in 'mr moob' will be checked at deffeated. But if you deffeat one trainer and escape rope out, you will have to deffeat that same triner again.

## localStorage

N = number
L = letter
C = char
B = ether 0 or 1
@ = blank

Total chars if maxed out = 33 + 228 + 119 + 324 + 390 + 235 = 1329

### User
* 3N 3N 3N -- position on map -- first 3 numbers = what map, second 3 numbers = x cordinates, last 3 numbers = y cordinates <9>
* 10C -- player name -- can involve letters, numbers and blank <10>
* 6N -- money -- can involve numbers or blank <6>
* 8B -- badges -- if collected = 1, if not collected = 0 <8>
* ??? -- events -- example: if user have traided a pokemon with an npc

Total = 9 + 10 + 6 + 8 = 33

### Pokemons
* 3N -- pokemon -- an Id corresponding to a pokemon in the DB <3>
* 2N -- level -- represent the level of the pokemon where 00 = 100 <2>
* 10C -- nickname -- a nickname to the pokemon provided by the user. if name = 'viktor', it would say 'viktor@@@@' <10>
* 1B -- ability -- pokemons ability where 0 = first ability and 1 = second ability <1>
* 1L -- nature -- one letter corresponding with an nature. there are 25 natures and 26 letters so maybe letter X can be an indicator for uniqe pokemons <1>
* 2N -- IV -- the plan is to store IV between 1-15 The IV correspond with all stats <2>
* 2N -- EV -- the plan is to store EV as EV/100. Meaning a pokemon starts at EV 00 and can go up to 65. 65 = 65535 <2>
* 3N 2N * 4 -- moves -- first 3 numbers are an Id corresponding to a move. secod 2 numbers correspond to the amount of PP. this is repeted for each move (4) <20>
* . -- separator -- indicating new type of item <1>
* x(1-6) -- multiplied by numbers of pokemons in party -- one pokemon total chars = 3+10+1+1+1+2+20+1 = 39. total chars = 39 x numbers of pokemons. <39-228>

Total max = 228

### Items
* 2N 22B -- key items -- <19>
  - first number indicate if user have the bike where 0 = no bike and no 'bike voucher', 1 = 'bike voucher', 2 = bike
  - second number indicate what fossil the user have where 0 = no fossil, 1 = 'dome fossil', 2 = helix fossil
  - the rest represent the remaning key items, including HMs. 0 = do not have item, 1 = have item
  - if user put key item in the pc make item = 0 
* 2N 2N x 1-20 -- items -- first numbers correspond with item ID, second numbers correspond with amount. this can be multiplied max 20 times. <0-80>
* . -- separator -- indicating new type of item <1>
* 2N 2N x 1-5 -- balls -- first numbers correspond with ball ID, second numbers correspond with amount. can include saffary balls <0-20>

Total max = 19 + 80 + 20 = 119

### Trainers
* 324B -- trainers -- index = trainer ID where 1 = deffeated and 0 = not deffeated

Total max = 324

### PC-pokemons
* 3N -- pokemon -- an Id corresponding to a pokemon in the DB <3>
* 10C -- nickname -- a nickname to the pokemon provided by the user. if name = 'viktor', it would say 'viktor@@@@' <10>
* 1B -- ability -- pokemons ability where 0 = first ability and 1 = second ability <1>
* 1L -- nature -- one letter corresponding with an nature. there are 25 natures and 26 letters so maybe letter X can be an indicator for uniqe pokemons <1>
* 1N -- IV -- the plan is to store IV between 1-5 where 1 = worst IV and 5 = perfect IV. The IV correspond with all stats <1>
* 2N -- EV -- the plan is to store EV as EV/100. Meaning a pokemon starts at EV 00 and can go up to 65. 65 = 65535 <2>
* 3N 2N * 4 -- moves -- first 3 numbers are an Id corresponding to a move. secod 2 numbers correspond to the amount of PP. this is repeted for each move (4) <20>
* . -- seperator -- to indicate new pokemon <1>
* x(1-6) -- multiplied by numbers of pokemons in party -- one pokemon total chars = 3+10+1+1+1+2+20+1 = 39. total chars = 39 x numbers of pokemons <39-390>

Total max = 390

### PC-items
* 2N 22B -- key items -- <19>
  - first number indicate if user have the bike where 0 = no bike and no 'bike voucher', 1 = 'bike voucher', 2 = bike
  - second number indicate what fossil the user have where 0 = no fossil, 1 = 'dome fossil', 2 = helix fossil
  - the rest represent the remaning key items, including HMs. 0 = do not have item, 1 = have item
  - if user put key item in the backpack make item = 0 
* 2N 2N x 1-50 -- items -- first numbers correspond with item ID, second numbers correspond with amount. this can be multiplied max 50 times. (2 + 2) * x where x < 51. <0-200> 
* . -- separator -- indicating new type of item <1>
* 2N 2N x 1-4 -- balls -- first numbers correspond with ball ID, second numbers correspond with amount. can not include saffary balls. <0-16>

Total max = 19 + 200 + 16 = 235


## Data collection
* trainer list is from pokemon green witch is taken from https://gamefaqs.gamespot.com/gameboy/924467-pokemon-green/faqs/12776 
* pokemons are taken from https://pokeapi.co/ and then manualy modifyed when nessesary


## Syntax 

### Pokemon Object 

const object = {
    id: number,
    name: string,
    abilities: [
        string
    ], // lenght < 3
    base_experience: number,
    growth_rate: number, // lenght < 6
    catch_rate: number, // lenght < 256
    height: number,
    moves: [
        {
            name: string, 
            level_learned_at: number
        }
    ],
    sprites: {
        defaultSprite: {
            height: number,
            width: number,
            x: number,
            y: number
        }
    },
    stats: {
        hp: number,
        attack: number,
        defense: number,
        special: number,
        speed: number
    },
    types: [
        string
    ], // lenght < 3
    weight: number
}


### Pokemon Move

    const object = { 
        id: number, 
        name: string, 
        accuracy: number, 
        power: number, 
        type: number, 
        meta: { 
            damage_class: string, 
            effect_chance: number || null, 
            effect_entries: string, 
            priority: number || null, 
            crit_rate: number || null, 
            drain: number || null, 
            flinch_chance: number || null, 
            healing: number || null, 
            max_hits: number || null, 
            max_turns: number || null, 
            mix_hits: number || null, 
            mix_turns: number || null, 
            stat_changes: [
                { 
                    change: number || null, 
                    stat: string || null 
                }
            ],
            target: sting, 
            index: number
        } 
    },
