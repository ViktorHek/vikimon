import React from 'react'
// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import pokemons from '../database/pokemons'

const PokemonParty = () => {
	// const { backpackOpen, myPokemons } = useSelector((state) => state)
	// const [openBackpack, setOpenBackpack] = useState(backpackOpen)
	// // const [myParty, setMyParty] = useState(state => state)
	// const populatedPartyList = []

	// useEffect(() => {
	// 	setOpenBackpack(!openBackpack)
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [backpackOpen])

	// useEffect(() => {
	// 	populatePokemonParty()
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [myPokemons])

	// function populatePokemonParty() {
	// 	for (let index = 0; index < 6; index++) {
	// 		if (myPokemons[index]) {
	// 			pokemons.forEach((el) => {
	// 				if(el.id === myPokemons[index].id) {
	// 					populatedPartyList.push(el)
	// 				}
	// 			})
	// 		}
	// 	}
	// }

	// function displayParty() {
	// 	console.log('är här')
	// }

	return (
		<div className='main_pokemon_party_container'>
			<p>Här är mina pokemons</p>
		</div>
	)
}

export default PokemonParty
