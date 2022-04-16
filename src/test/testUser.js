const testUser = {
    name: 'viktor',
    pokemons: [
        {
            id: 1,
            name: 'wobba',
            moves: [
                { id: 1 }
            ]
        },
        {
            id: 1,
            name: '',
            moves: [
                { id: 1 },
                { id: 3 }
            ]
        },
        {
            id: 2,
            name: 'Sven',
            moves: [
                { id: 2 }
            ]
        },
    ],
    items: {
        keyItems: [
            { name: 'Town-map', preSelected: false }
        ],
        pokeballs: [
            { name: 'Pokeballs', quantity: 5 },
            { name: 'Masterball', quantity: 1 },
        ],
        mainBag: [
            { name: 'Potion', quantity: 2 },
            { name: 'Antidote', quantity: 1 }
        ]
    }
}

export default testUser