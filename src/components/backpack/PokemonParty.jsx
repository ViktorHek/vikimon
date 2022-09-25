import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import api from '../../database/api'
import Pointer from '../svg/pointer';

const PokemonParty = () => {
	const dispatch = useDispatch()
	const { myPokemons, pointerPosition } = useSelector((state) => state);
	const [pokeParty, setPokeParty] = useState([]);
	const [pointerStyle, setPointerStyle] = useState({ top: 1, left: 1 })

	useEffect(() => {
		populatePokemonParty();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	useEffect(() => {
		setPointerStyle(pointerPosition)
		console.log('pointerStyle',pointerStyle)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pointerPosition])

	async function populatePokemonParty() {
		let populatedPartyList = myPokemons;
		if (!populatedPartyList.length) {
			let localStorageString = localStorage.getItem('bossPokemonParty')
			let responce = await api.callPokiParty(localStorageString)
			populatedPartyList = responce.data
			dispatch({
				type: 'POPULATE_POKEMON_PARTY',
				payload: populatedPartyList
			})
		}
		console.log({ populatedPartyList })
		setPokeParty(populatedPartyList)
	};

	function getPokemonDataFromId(id) {
		if (myPokemons.length) {
			myPokemons.forEach((el) => {
				if (el.id === parseInt(id)) {
					console.log({el})
				}
			})
		} else {
			console.log('no pokemons in myPokemons')
		}
	}

	let pokemonList = pokeParty.map((el, index) => {
		let className = `mon-in-bag-container-${index}`
		return (
			<div key={el.uid} onClick={() => getPokemonDataFromId(el.id)} className={className}>
				<div className='mon-in-bag-name-container'>
					<span>{el.name}</span>
				</div>
				<div className='mon-in-bag-level-container'>
					<span>{el.level}</span>
				</div>
				<div className='mon-in-bag-character-container'>
					<span></span>
				</div>
				<div className='mon-in-bag-hp-container'>
					<span>{el.hp}</span>
				</div>
			</div>
		)
	});

	return (
		<div className='main_pokemon_party_container'>
			<div className='pokemon-party-backgrond-container'>
				<img src='images/items/pokemonInBag_red.jpg' alt='Poki Party' style={{ position: 'absolute', top: '-1px', left: '-1px' }} />
			</div>
			<div 
				className='pokemon-party-poiner-container' 
				style={{ 
					top: `${pointerStyle.top}px`, 
					left: `${pointerStyle.left}px` 
				}}
			>
				<Pointer />
			</div>
			<div className='pokemon-party-list-container'>
				{pokemonList && pokemonList}
			</div>
		</div>
	);
};

export default PokemonParty;
