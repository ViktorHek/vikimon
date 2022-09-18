import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import globals from '../../utils/globalVariables';
import axios from 'axios';
import lsm from '../../database/localStorrageManager'
import calculator from '../../funktionality/calculator';
import api from '../../database/api'

const PokemonParty = () => {
	const dispatch = useDispatch()
	const { myPokemons } = useSelector((state) => state);
	const [pokeParty, setPokeParty] = useState([]);

	useEffect(() => {
		populatePokemonParty();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	// useEffect(() => {
	// 	setPokeParty(myPokemons)
	// 	console.log('uppdating complet pokemon party', pokeParty)
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [myPokemons]);

	async function populatePokemonParty() {

		// setting or getting static pokemons
		let pokemonArrayFromDB = staticPokemons
		if (haveNewPokemon(smallPokiList)) {
			let pokiIdString = getPokiIdSting(smallPokiList)
			let responce = await api.callPokiParty(pokiIdString)
			pokemonArrayFromDB = responce.data
			dispatch({
				type: 'STORE_POKEMON_OBJECTS_FROM_DB',
				payload: pokemonArrayFromDB
			})
		}

		// setting or getting static moves
		let moveArrayFromDB = staticMoves
		if(haveNewMoves(smallPokiList)) {
			let moveIdString = getMoveIdString(smallPokiList)
			let responce = await api.callMoveList(moveIdString)
			moveArrayFromDB = responce.data
			dispatch({
				type: 'STORE_MOVES_OBJECTS_FROM_DB',
				payload: moveArrayFromDB
			})
		}
		smallPokiList.forEach((myMon) => {
			pokemonArrayFromDB.forEach((monInDB) => {
				let obj = myMon;
				if (obj.id === monInDB.id) {
					obj.dbData = monInDB;
					obj.inGameStats = calculator.statsCalculator(obj);
					obj.moves = getMoves(obj.moves, moveArrayFromDB);
					populatedPartyList.push(obj);
				};
			});
		});
		dispatch({
			type: "POPULATE_POKEMON_PARTY", 
			payload: populatedPartyList
		})  
	};

	function haveNewMoves(pokiList) {
		if (!pokiList.length) return true;
		let dbMovesIds = getNewMovesIds(pokiList)
		if(dbMovesIds.length) {
			return true
		} else {
			return false
		}
	}

	function getNewMovesIds(pokiList) {
		let returnValue = [];
		let dbMovesIds = [];
		let staticIds = staticMoves.map(el => el.id)
		pokiList.forEach((pokemon) => {
			pokemon.moves.forEach((move) => {
				dbMovesIds.push(move.id)
			})
		})
		dbMovesIds.forEach((el) => {
			if(staticIds.indexOf(el) === -1) {
				returnValue.push(el)
			}
		})
		return returnValue
	}

	function haveNewPokemon(smallPokiList) {
		if (!staticPokemons.length) return true
		let staticIds = staticPokemons.map(el => el.id)
		let dbPokemonIds = smallPokiList.map(el => el.id)
		dbPokemonIds.forEach((el) => {
			if(staticIds.indexOf(el) === -1) {
				return true
			}
		})
		return false
	}

	function getMoveIdString(smallPokiList) {
		let string = ''
		let moveIdsArr = getNewMovesIds(smallPokiList)
		for (let index = 0; index < moveIdsArr.length; index++) {
			const element = moveIdsArr[index];
			if(index === 0) {
				string = element;
			} else {
				string = string + '&' + element;
			};
		}
		return string
	}

	function getPokiIdSting(smallPokiList) {
		let string = ''
		for (let index = 0; index < smallPokiList.length; index++) {
			const pokemon = smallPokiList[index];
			if(index === 0) {
				string = pokemon.id;
			} else {
				string = string + '&' + pokemon.id;
			};
		};
		return string
	}

	function getMoves(partyMoves, moveData) {
		let movesWithData = []
		partyMoves.forEach((partyMove) => {
			moveData.forEach((el) => {
				if(partyMove.id === el.id) {
					movesWithData.push({
						name: el.name,
						id: el.id,
						power: el.power,
						accuracy: el.accuracy,
						pp: partyMove.pp,
						type: el.type,
						meta: el.meta
					})
				}
			})
		})
		return movesWithData
	}

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
