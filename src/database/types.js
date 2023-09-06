const types = [
    {
        name: 'normal', 
        superEffective: [], 
        notEffective: ['rock'], 
        noEffect: ['ghost']},
    {
        name: 'fighting', 
        superEffective: ['normal', 'rock', 'ice'], 
        notEffective: ['flying', 'poison', 'bug', 'psychic'], 
        noEffect: ['ghost']
    },
    {
        name: 'flying', 
        superEffective: ['fight', 'bug', 'grass'], 
        notEffective: ['rock', 'electric'], 
        noEffect: []
    },
    {
        name: 'poison', 
        superEffective: ['bug', 'grass'], 
        notEffective: ['poison', 'ground', 'rock', 'ghost'], 
        noEffect: []
    },
    {
        name: 'ground', 
        superEffective: ['poison', 'rock', 'fire', 'electric'], 
        notEffective: ['bug', 'grass'], 
        noEffect: ['flying']
    },
    {
        name: 'rock', 
        superEffective: ['flying', 'bug', 'fire', 'ice'], 
        notEffective: ['fight', 'ground'], 
        noEffect: []
    },
    {
        name: 'bug', 
        superEffective: ['poison', 'grass', 'psychic'], 
        notEffective: ['fight', 'flying', 'ghost', 'fire'], 
        noEffect: []
    },
    {
        name: 'ghost', 
        superEffective: ['ghost', 'psychic'], 
        notEffective: [], 
        noEffect: ['normal']
    },
    {
        name: 'fire', 
        superEffective: ['bug', 'grass', 'ice'], 
        notEffective: ['rock', 'fire', 'water', 'dragon'], 
        noEffect: []
    },
    {
        name: 'water', 
        superEffective: ['ground', 'rock', 'fire'], 
        notEffective: ['water', 'grass', 'dragon'], 
        noEffect: []
    },
    {
        name: 'grass', 
        superEffective: ['ground', 'rock', 'water'], 
        notEffective: ['flying', 'poison', 'bug', 'fire', 'grass', 'dragon'], 
        noEffect: []
    },
    {
        name: 'electric', 
        superEffective: ['flying', 'water'], 
        notEffective: ['grass', 'electric', 'dragon'], 
        noEffect: ['ground']
    },
    {
        name: 'psychic', 
        superEffective: ['fight', 'poison'], 
        notEffective: ['psychic'], 
        noEffect: []
    },
    {
        name: 'ice', 
        superEffective: ['flying', 'ground', 'grass', 'dragon'], 
        notEffective: ['water', 'ice'], 
        noEffect: []
    },
    {
        name: 'dragon', 
        superEffective: ['dragon'], 
        notEffective: [], 
        noEffect: []
    },
];
export default types