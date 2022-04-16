import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import pokemons from '../../database/pokemons'

const PokemonParty = () => {
	const { myPokemons } = useSelector((state) => state)
	const [pokeParty, setPokeParty] = useState([])
	const [pokemonPartyRender, setPokemonPartyRender] = useState(false)

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
		console.log({pokeParty})
		setPokemonPartyRender(true)
		console.log({pokemonPartyRender})
	}

	// let pokemonList = populatedPartyList.map((el) => {
	// 	console.log('in map!!',{el})
	//   count = count + 1
	//   return (
	// 		<div key={`pokemonParty-${count}`}>
	// 			<p>
	// 				{el.name}
	// 			</p>
	// 		</div>
	// 	)
	// })

	let pokemonList = pokeParty.map((el, index) => {
		console.log({el})
		return <div key={index}>{el.name}</div>;
	})




	// console.log('pokemonList',pokemonList)

	return (
		<div className='main_pokemon_party_container'>
			{/* <p>Här är mina pokemons</p> */}
			<div >
				{pokemonPartyRender && pokemonList}
			</div>
		</div>
	)
}

export default PokemonParty
