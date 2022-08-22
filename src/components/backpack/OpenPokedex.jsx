import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import globals from '../../utils/globalVariables';
import axios from 'axios';

const OpenPokedex = () => {
    const dispatch = useDispatch()
    const { pokedexDB } = useSelector((state) => state);
    const [viewableDB, setViewableDB] = useState([
        {
            name: 'Namn',
            abilities: ['levi', 'seffi'],
            past_types: ['first', 'second'],
            types: ['fire', 'water'],
            base_experience: 1337,
            real_game_index: 1337,
            height: 1337,
            weight: 1337,
            stats: {
                hp: 2,
                attack: 2,
                defense: 2,
                specialAttack: 2,
                specialDefense: 2,
                speed: 2
            }
        }
    ]);

    useEffect(() => {
        getPokedexDatabase();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        populatePokedexList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokedexDB]);

    async function getPokedexDatabase() {
        console.log('@ getPokedexDatabase()')
        await axios.get(globals.ApiUrl + 'pokemonDB/all')
            .then(res => {
                console.log(res.data)
                dispatch({ type: 'STORE_DATA_FROM_DB', payload: res.data })
                return res;
            }).catch((err) => {
                console.log('Error @components/backpack/PokemonParty - getPokedexDatabase()', err);
            });
    };
    function populatePokedexList() {
        let populatedPokedexList = [];
        if (pokedexDB === []) { return };
        pokedexDB.forEach((el) => {
            populatedPokedexList.push(el);
        })
        setViewableDB(populatedPokedexList);
    };

    let pokedexList = viewableDB.map((el, index) => {
        // let existingAbilitys = ['levi', 'seffi']
        // let existingPastTypes = ['first', 'second']
        // let existingTypes = ['fire', 'water']
        // if(el.abilities[0]) { existingAbilitys = el.abilities }
        // if(el.past_types[0]) { existingPastTypes = el.past_types }
        // if(el.types[0]) { existingTypes = el.types }

        return (
            <div key={`key-${index}-${Math.random()}`}>
                <br/>
                <p>name: {el.name}</p>
                {/* {existingAbilitys.map(ability => <p key={`abilityKey-${index}-${Math.random()}`}>abilitie: {ability}</p>)}
                {existingPastTypes.map(pastType => <p key={`pastTypesKey-${index}-${Math.random()}`}>past type: {pastType}</p>)}
                {existingTypes.map(type => <p key={`pastTypesKey-${index}-${Math.random()}`}>past type: {type}</p>)} */}
                <p>base_experience: {el.base_experience}</p>
                <p>real_game_index: {el.real_game_index}</p>
                <p>height: {el.height}</p>
                <p>weight: {el.weight}</p>
                <p>hp: {el.stats.hp}</p>
                <p>attack: {el.stats.attack}</p>
                <p>defense: {el.stats.defense}</p>
                <p>specialAttack: {el.stats.specialAttack}</p>
                <p>specialDefense: {el.stats.specialDefense}</p>
                <p>speed: {el.stats.speed}</p>
                <br/>
            </div>
        )
    });

    return (
        <div className='open_pokedex_main_container' style={{
            height: '100%',
            width: '100%'
        }}>
            <div className='open_pokedex_list_container'>
                {pokedexList && pokedexList}
            </div>
        </div>
    );
};

export default OpenPokedex;
