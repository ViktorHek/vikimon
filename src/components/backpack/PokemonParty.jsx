import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import api from '../../database/api'

const PokemonParty = () => {
	const dispatch = useDispatch()
	const { myPokemons } = useSelector((state) => state);
	const [pokeParty, setPokeParty] = useState([]);

	useEffect(() => {
		populatePokemonParty();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	useEffect(() => {
		console.log('myPokemons is uppdated in pokemonParty.jsx', myPokemons)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[myPokemons])

	async function populatePokemonParty() {
		let populatedPartyList = myPokemons;
		if (!populatedPartyList.length) {
			let localStorageString = localStorage.getItem('myPokemonParty')
			let responce = await api.callPokiParty(localStorageString)
			populatedPartyList = responce.data
			dispatch({
				type: 'POPULATE_POKEMON_PARTY',
				payload: populatedPartyList
			})
		}
		console.log({populatedPartyList})
		setPokeParty(populatedPartyList)
	};

	function getPokemonDataFromId(id) {
		if(myPokemons.length) {
			myPokemons.forEach((el) => {
				if (el.id === parseInt(id)) {
					console.log(el)
				}
			})
		} else {
			console.log('no pokemons in myPokemons')
		}
	}

	let pokemonList = pokeParty.map((el) => {
		return (
			<div key={el.uid} onClick={() => getPokemonDataFromId(el.id)}>
				{el.name}
			</div>
		)
	});

	return (
		<div className='main_pokemon_party_container'>
			<div>
				{pokemonList && pokemonList}
			</div>
		</div>
	);
};

export default PokemonParty;
