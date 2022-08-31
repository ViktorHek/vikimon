import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import globals from '../../utils/globalVariables';
import axios from 'axios';

const PokemonParty = () => {
	const dispatch = useDispatch()
	const { myPokemons } = useSelector((state) => state);
	const [pokeParty, setPokeParty] = useState([]);

	useEffect(() => {
		console.log("pokemonParty.jsx is rederaed")
		getPokemonsToPopulateParty();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		populatePokemonParty();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [myPokemons]);

	async function getPokemonsToPopulateParty() {
		await axios.get(globals.ApiUrl + 'myPokemons')
			.then(res => {
				dispatch({ type: 'POPULATE_POKEMON_PARTY', payload: res.data })
				return res;
			}).catch((err) => {
				console.log('Error @components/backpack/PokemonParty - getPokemonsToPopulateParty()', err);
			});
	};

    async function getPokemonDataFromId() {
        console.log('@ getPokemonDataFromId(), ')
        await axios.get(globals.ApiUrl + 'pokemonDB/pokemon/1')
            .then(res => {
                console.log('pokeomon with id 1', res.data)
                return res;
            }).catch((err) => {
                console.log('Error @components/backpack/PokemonParty - getPokedexDatabase()', err);
            });
    };


	function populatePokemonParty() {
		let populatedPartyList = [];
		if(myPokemons === []) {return};
		myPokemons.forEach((el) => {
			populatedPartyList.push(el);
		})
		setPokeParty(populatedPartyList);
	};

	let pokemonList = pokeParty.map((el) => {
		return (
			<div key={el.UID} onClick={getPokemonDataFromId}>
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
