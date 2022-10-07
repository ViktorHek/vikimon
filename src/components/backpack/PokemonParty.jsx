import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../database/api';
import Pointer from '../../animatios/Pointer';
import HealthBar from '../../animatios/HealthBar';
import Font from '../../animatios/font/Font';
import MenuBackgrond from '../../animatios/backgronds/MenuBackgrond';
import pointerPositions from '../../utils/pointerPositions';
import DisplayPartyMember from './DisplayPartyMember';

const PokemonParty = () => {
	const dispatch = useDispatch()
	const { myPokemons, pointerPosition, backPackView, backKey, selectInWorld } = useSelector((state) => state);
	const [pokeParty, setPokeParty] = useState([]);
	const [pointerStyle, setPointerStyle] = useState({ top: 8, left: 0 })
	const [backgrondImgStyle, setBackgrondImgStyle] = useState({ position: 'absolute', top: '-1px', left: '-1px' })
	const [selectedPokemon, setSelectedPokemon] = useState(null)
	const [showMoves, setShowMoves] = useState(false)
	const [spriteUrl, setSpriteUrl] = useState("")
	const pointerPositionArr = pointerPositions.pokemonParty

	const menuBackgrondInitPos = { top: 0, left: 0, right: 152, bottom: 40 }

	useEffect(() => {
		populatePokemonParty();
		setTick()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		handleBackPackView(backPackView)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [backPackView])

	useEffect(() => {
		console.log('selectedPokemon', selectedPokemon)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedPokemon])

	useEffect(() => {
		console.log('getting here', selectInWorld, backPackView)
		if (selectInWorld && backPackView === 'pokeParty') {
			handleSelect()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectInWorld])

	function handleSelect() {
		console.log('selecting: ', pokeParty[pointerPosition.index])
		if(selectedPokemon) {
			if(showMoves) {
				setShowMoves(false)
			} else {
				setShowMoves(true)
			}
		}
		setSelectedPokemon(pointerPosition.index)
		dispatch({ type: "SET_SELECT_IN_WORLD", payload: false })
	}

	useEffect(() => {
		handleBackKey()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [backKey])

	function handleBackKey() {
		if (selectedPokemon) {
			dispatch({ type: "SET_BACKPACK_VIEW", payload: 'backpackInit' })
			setSelectedPokemon(null)
		}
	}

	useEffect(() => {
		setPointerStyle({
			top: pointerPositionArr[pointerPosition.index].top,
			left: pointerPositionArr[pointerPosition.index].left
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pointerPosition])

	async function populatePokemonParty() {
		console.log('getting here')
		let populatedPartyList = myPokemons;
		if (!populatedPartyList.length) {
			let localStorageString = localStorage.getItem('bossPokemonParty')
			let responce = await api.callPokiParty(localStorageString)
			console.log({ responce })
			populatedPartyList = responce.data

			dispatch({
				type: 'POPULATE_POKEMON_PARTY',
				payload: populatedPartyList
			})
		}
		console.log({ populatedPartyList })
		setPokeParty(populatedPartyList)
	};

	function handleBackPackView(backPackView) {
		if (backPackView === 'displaySelectedPokemonStats') {
			let index = 1
			// let index = pointerPositionArr.indexOf(pointerPosition.top)
			callSetSpriteUrl(index)
			setSelectedPokemon(index)
			setBackgrondImgStyle({ position: 'absolute', bottom: '-1px', left: '-1px' })
		} else {
			setBackgrondImgStyle({ position: 'absolute', top: '-1px', left: '-1px' })
		}
	}

	function callSetSpriteUrl(index) {
		let id = pokeParty[index].id
		let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/${id}.png`
		if (!id) {
			img = '/images/pokemons/b_green-supgb_151_back.png'
		}
		setSpriteUrl(img)
	}

	function setTick() {
		// do stuff
	}

	let pokemonList = pokeParty.map((el, index) => {
		let className = `mon-in-bag-container-${index}`
		return (
			<div key={el.uid} className={className}>
				<div className='mon-in-bag-name-container'>
					<Font text={el.name.toUpperCase()} />
				</div>
				<div className='mon-in-bag-level-container'>
					<svg width={8} height={8} viewBox="0 0 8 8" fill="none" className='absoluteP'>
						<rect x="1" y="3" width="1" height="1" fill="black" />
						<rect x="1" y="5" width="1" height="1" fill="black" />
						<rect x="3" y="2" width="2" height="5" fill="black" />
						<rect x="5" y="6" width="2" height="1" fill="black" />
					</svg>
					<Font text={JSON.stringify(el.level)} style={{ marginLeft: '8px' }} />
				</div>
				<div className='mon-in-bag-character-container'>
					<img src='images/players/pokemon-icons-for-party.png' alt='' />
					<span></span>
				</div>
				<div className='mon-in-bag-hp-bar-container'>
					<HealthBar data={{ maxHealth: 100, curretnHelath: 100 }} />
				</div>
				<div className='mon-in-bag-hp-container'>
					<Font text={`${el.stats.hp}/${el.stats.hp}`} />
				</div>
			</div>
		)
	});

	return (
		<div className='absolute-full-size main-pokemon-party-container'>
			{/* <div className='pokemon-party-backgrond-container'>
				<img src='images/items/pokemonInBag_red.jpg' alt='Poki Party' style={backgrondImgStyle} />
			</div> */}
			<div
				className='pokemon-party-poiner-container'
				style={{
					top: `${pointerStyle.top}px`,
					left: `${pointerStyle.left}px`
				}}
			>
				<Pointer />
			</div>
			<div className='absoluteP' style={{ paddingLeft: '6px' }}>
				{pokemonList && pokemonList}
				<div style={{ position: 'absolute', left: 0, top: 96, height: '48px', width: '100%' }}>
					<MenuBackgrond position={menuBackgrondInitPos} />
					<span style={{ position: 'absolute', left: 8, top: 16, height: '32px', width: '144px' }}>
						<Font text="Choose a POKEMON" />
					</span>
				</div>
			</div>
			{selectedPokemon && <DisplayPartyMember pokemon={pokeParty[selectedPokemon]} showMoves={showMoves} />}
		</div>
	);
};

export default PokemonParty;
