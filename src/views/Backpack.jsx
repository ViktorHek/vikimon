import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import pokemons from '../database/pokemons'
import PokemonParty from '../components/backpack/PokemonParty' 

const Backpack = () => {
	const { backpackOpen, myPokemons } = useSelector((state) => state)
	const [openBackpack, setOpenBackpack] = useState(backpackOpen)
	const [displaypokemons, setDisplaypokemons] = useState(false)
	// const [myParty, setMyParty] = useState(state => state)
	const populatedPartyList = []

	useEffect(() => {
		setOpenBackpack(!openBackpack)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [backpackOpen])

	useEffect(() => {
		populatePokemonParty()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [myPokemons])

	function populatePokemonParty() {
		for (let index = 0; index < 6; index++) {
			if (myPokemons[index]) {
				pokemons.forEach((el) => {
					if(el.id === myPokemons[index].id) {
						populatedPartyList.push(el)
					}
				})
			}
		}
	}

	function displayParty() {
		setDisplaypokemons(!displaypokemons)
	}

	return (
		<div style={{ display: (openBackpack ? 'none' : 'block') }} className="main_backpack_container">
			<div style={{ display: (displaypokemons ? 'flex' : 'none') }}>
				<PokemonParty />
			</div>
			<div className="backpack_container">
				<div className='backpack_option_container'>
					<p className='backpack_text'>Pokedex</p>
				</div>
				<div className='backpack_option_container' onClick={displayParty}>
					<p className='backpack_text'>Pokemons</p>
				</div>
				<div className='backpack_option_container'>
					<p className='backpack_text'>Items</p>
				</div>
				<div className='backpack_option_container'>
					<p className='backpack_text'>Bobby</p>
				</div>
				<div className='backpack_option_container'>
					<p className='backpack_text'>Save</p>
				</div>
				<div className='backpack_option_container'>
					<p className='backpack_text'>Options</p>
				</div>
				<div className='backpack_option_container'>
					<p className='backpack_text'>Exit</p>
				</div>
			</div>
		</div>
	)
}

export default Backpack
