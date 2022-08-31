import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import PokemonParty from '../components/backpack/PokemonParty' 
import OpenPokedex from '../components/backpack/OpenPokedex'

const Backpack = () => {
	const { backpackOpen, backKey } = useSelector((state) => state)
	const [openBackpack, setOpenBackpack] = useState(backpackOpen)
	const [displaypokemons, setDisplaypokemons] = useState(false)
	const [displayPokedex, setDisplayPokedex] = useState(false)

	useEffect(() => {
		setOpenBackpack(!openBackpack)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [backpackOpen])
	useEffect(() => {
		setDisplaypokemons(false)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [backKey])

	function handleDisplayParty() {
		setDisplaypokemons(!displaypokemons)
	}
	function handleOpenPokedex() {
		setDisplayPokedex(!displayPokedex)
	}

	return (
		<div style={{ display: (openBackpack ? 'none' : 'block') }} className="main_backpack_container">

			{ displaypokemons ? <PokemonParty /> : null}
			{ displayPokedex ?  <OpenPokedex /> : null }

			<div className="backpack_container">
				<div className='backpack_option_container' onClick={handleOpenPokedex}>
					<p className='backpack_text'>Pokedex</p>
				</div>
				<div className='backpack_option_container' onClick={handleDisplayParty}>
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
