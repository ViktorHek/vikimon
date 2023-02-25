const pointerPositions = {
    battleInit: [
        { top: 112, left: 72, pointing_to: 'selectMoves' },
        { top: 112, left: 120, pointing_to: 'selectPokemon' },
        { top: 128, left: 72, pointing_to: 'selectItem' },
        { top: 128, left: 120, pointing_to: 'runFromBattle' }
    ],
    selectMoves: [
        { top: 104, left: 40, pointing_to: 'move0' },
        { top: 112, left: 40, pointing_to: 'move1' },
        { top: 120, left: 40, pointing_to: 'move2' },
        { top: 128, left: 40, pointing_to: 'move3' }
    ],
    backpackInit: [
        { top: 16, left: 8, pointing_to: 'pokedex' },
        { top: 32, left: 8, pointing_to: 'pokeParty' },
        { top: 48, left: 8, pointing_to: 'items' },
        { top: 64, left: 8, pointing_to: 'user' },
        { top: 80, left: 8, pointing_to: 'save' },
        { top: 96, left: 8, pointing_to: 'options' },
        { top: 112, left: 8, pointing_to: 'exit' },
    ],
    pokemonParty: [
        { top: 8, left: 0, pointing_to: 'pokemonInParty1' },
        { top: 24, left: 0, pointing_to: 'pokemonInParty2' },
        { top: 40, left: 0, pointing_to: 'pokemonInParty3' },
        { top: 56, left: 0, pointing_to: 'pokemonInParty4' },
        { top: 72, left: 0, pointing_to: 'pokemonInParty5' },
        { top: 88, left: 0, pointing_to: 'pokemonInParty6' }
    ]
}

export default pointerPositions;