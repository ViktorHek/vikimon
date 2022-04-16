import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import pokemons from '../../database/pokemons'

const PokemonParty = () => {
	const { myPokemons } = useSelector((state) => state)
	const [pokeParty, setPokeParty] = useState([])

	useEffect(() => {
		populatePokemonParty()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [myPokemons])


	function populatePokemonParty() {
		let populatedPartyList = []
		for (let index = 0; index < 6; index++) {
			if (myPokemons[index]) {
				pokemons.forEach((el) => {
					if (el.id === myPokemons[index].id) {
						populatedPartyList.push(el)
					}
				})
			}
		}
		setPokeParty(populatedPartyList)
	}

	let pokemonList = pokeParty.map((el, index) => {
		console.log({el})
		return <div key={index}>{el.name}</div>;
	})

	return (
		<div className='main_pokemon_party_container'>
			<div>
				{pokemonList && pokemonList}
			</div>
		</div>
	)
}

export default PokemonParty
