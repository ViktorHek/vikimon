import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import pokemons from '../../database/pokemons'

const PokemonParty = () => {
	const { myPokemons } = useSelector((state) => state)
	const populatedPartyList = []
	let count = 0

	useEffect(() => {
		populatePokemonParty()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [myPokemons])

	function populatePokemonParty() {
		console.log('@populatePokemonParty!!')
		for (let index = 0; index < 6; index++) {
			if (myPokemons[index]) {
				pokemons.forEach((el) => {
					if(el.id === myPokemons[index].id) {
						populatedPartyList.push(el)
					}
				})
			}
		}
		console.log({populatedPartyList})
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

	// console.log('pokemonList',pokemonList)

	return (
		<div className='main_pokemon_party_container'>
			{/* <p>Här är mina pokemons</p> */}
			<div >
				{/* {pokemonList && pokemonList} */}
				{populatedPartyList.length > 0 ? (
            populatedPartyList.map((el, index) => {
              return <div key={index}>{el.name}</div>;
            })
          ) : (
            <div>
              You have no Pokemons {populatedPartyList.length}
            </div>
          )}
			</div>
		</div>
	)
}

export default PokemonParty
