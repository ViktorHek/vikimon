import pokemons from '../pokemons'

export default function matchPokemons(id) {
    pokemons.forEach((el) => {
        if(el.ID === id) {
            return el
        } else {
            console.log('no pokemons with that ID')
        }
    })
}