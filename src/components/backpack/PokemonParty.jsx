import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import api from '../../database/api'
import Pointer from '../svg/pointer';
import globals from '../../utils/globalVariables'

const PokemonParty = () => {
	const dispatch = useDispatch()
	const { myPokemons, pointerPosition, backPackView, backKey } = useSelector((state) => state);
	const [pokeParty, setPokeParty] = useState([]);
	const [pointerStyle, setPointerStyle] = useState({ top: 1, left: 1 })
	const [backgrondImgStyle, setBackgrondImgStyle] = useState({ position: 'absolute', top: '-1px', left: '-1px' })
	const [selectedPokemon, setSelectedPokemon] = useState({})
	const [spriteUrl, setSpriteUrl] = useState("")
	const pointerPositionArray = globals.posiblePointerPositionInPokemonParty

	useEffect(() => {
		populatePokemonParty();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		handleBackPackView(backPackView)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [backPackView])

	useEffect(() => {
		hansleBackKey()
	}, [backKey])

	function hansleBackKey() {
		if (backPackView === 'displaySelectedPokemonStats') {
			dispatch({type: "SET_BACKPACK_VIEW", payload: 'init'})
		}
	}

	useEffect(() => {
		setPointerStyle(pointerPosition)
		callSetSelectedPokemon(pointerPosition)
		console.log('pointerStyle', pointerStyle)
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
					console.log({ el })
				}
			})
		} else {
			console.log('no pokemons in myPokemons')
		}
	}

	function callSetSelectedPokemon(pointerPosition) {
		let index = pointerPositionArray.indexOf(pointerPosition.top)
		setSelectedPokemon(index)
	}

	function handleBackPackView(backPackView) {
		if (backPackView === 'displaySelectedPokemonStats') {
			let index = pointerPositionArray.indexOf(pointerPosition.top)
			callSetSpriteUrl(index)
			setSelectedPokemon(index)
			setBackgrondImgStyle({ position: 'absolute', bottom: '-1px', left: '-1px' })
		} else {
			setBackgrondImgStyle({ position: 'absolute', top: '-1px', left: '-1px' })			
		}
		console.log({selectedPokemon})
	}

	function callSetSpriteUrl(index) {
		let id = pokeParty[index].id
		let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/${id}.png`
		if (!id) {
			img = '/images/pokemons/b_green-supgb_151_back.png'
		}
		setSpriteUrl(img)
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
				<img src='images/items/pokemonInBag_red.jpg' alt='Poki Party' style={backgrondImgStyle} />
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
			{backPackView === 'init' ? (
				<div className='pokemon-party-list-container'>
					{pokemonList && pokemonList}
				</div>
			) : null}
			{backPackView === 'displaySelectedPokemonStats' ? (
				<div className='selected-pokemon-stats-container'>
					<div className='selected-pokemon-img-container'>
						<img src={spriteUrl} alt="img" />
					</div>
					<div className='selected-pokemon-level-container'>
						<span>{pokeParty[selectedPokemon].level}</span>
					</div>
					<div className='selected-pokemon-name-container'>
						<span>{pokeParty[selectedPokemon].name}</span>
					</div>
					<div className='selected-pokemon-attack-container'>
						<span>{pokeParty[selectedPokemon].stats.attack}</span>
					</div>
					<div className='selected-pokemon-defense-container'>
						<span>{pokeParty[selectedPokemon].stats.defense}</span>
					</div>
					<div className='selected-pokemon-speed-container'>
						<span>{pokeParty[selectedPokemon].stats.speed}</span>
					</div>
					<div className='selected-pokemon-special-container'>
						<span>{pokeParty[selectedPokemon].stats.special}</span>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default PokemonParty;
