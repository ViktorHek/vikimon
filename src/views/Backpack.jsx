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
		<div className="main-backpack-container">
			{
				openBackpack ? (
					<div className='backpack-container-open'>
						<div className='backpack-img-container'>
							<img
								src='images/items/backpack.png'
								alt='Back Pack'
							/>
						</div>

						{displaypokemons ? <PokemonParty /> : null}
						{displayPokedex ? <OpenPokedex /> : null}

						<div className="backpack-container">
							<div className='open-pokedex-box' onClick={handleOpenPokedex}></div>
							<div className='open-party-box' onClick={handleDisplayParty}></div>
							
						</div>
					</div>
				) : null
			}
		</div>
	)
}

export default Backpack
