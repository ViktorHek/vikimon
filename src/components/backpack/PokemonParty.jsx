import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import globals from '../../utils/globalVariables';
import axios from 'axios';
import lsm from '../../database/localStorrageManager'
import calculator from '../../funktionality/calculator';

const PokemonParty = () => {
	const dispatch = useDispatch()
	const { myPokemons, staticPokemons } = useSelector((state) => state);
	const [pokeParty, setPokeParty] = useState([]);

	useEffect(() => {
		let pokemonPartyArray = lsm.getLocalStorageObject('pokemon')

		dispatch({
		  type: "POPULATE_POKEMON_PARTY", 
		  payload: pokemonPartyArray
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	  },[])
	useEffect(() => {
		populatePokemonParty();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [myPokemons]);

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


	async function populatePokemonParty() {
		console.log('@populate party')
		let populatedPartyList = [];
		if(myPokemons.length === 0) { return };
		let myPokemonsIdsString = ''
		for (let index = 0; index < myPokemons.length; index++) {
			const element = myPokemons[index];
			if(index === 0) {
				myPokemonsIdsString = element.id
			} else {
				myPokemonsIdsString = myPokemonsIdsString + '&' + element.id
			}
		}
		let pokemonArrayFromDB = await axios.get(
			globals.ApiUrl + 'selectedPokemonList/' + myPokemonsIdsString
		)
		console.log('pokemonArrayFromDB',pokemonArrayFromDB.data)
		dispatch({
			type: 'STORE_POKEMON_OBJECTS_FROM_DB',
			payload: pokemonArrayFromDB.data
		})

		console.log('staticPokemons',staticPokemons)
		myPokemons.forEach((myMon) => {
			pokemonArrayFromDB.data.forEach((monInDB) => {
				if (myMon.id === monInDB.id) {
					myMon.dbData = monInDB
					myMon.inGameStats = calculator.statsCalculator(myMon)
					populatedPartyList.push(myMon);
				}
			})
		})
		console.log('populatedPartyList',populatedPartyList)
		setPokeParty(populatedPartyList);
	};

	let pokemonList = pokeParty.map((el) => {
		return (
			<div key={el.uid} onClick={getPokemonDataFromId}>
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
