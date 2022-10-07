import React, { useEffect, useState } from 'react';
// import HealthBar from '../../animatios/HealthBar';
// import Font from '../../animatios/font/Font';
// import MenuBackgrond from '../../animatios/backgronds/MenuBackgrond';

const DisplayPartyMember = ({ pokemon, showMoves }) => {
    console.log({pokemon})
    const [moves, setMoves] = useState(false)
    // const menuBackgrondInitPos = { top: 0, left: 0, right: 152, bottom: 40 }

    useEffect(() => {
        setMoves(showMoves)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showMoves])

    return (
        <div className='absolute-full-size' style={{zIndex: 100, backgroundColor: 'blue'}}>
            {!moves ? (
                <div className='selected-pokemon-stats-container'>
                    <div style={{position: 'relative', top: 0, left: 0, height: '100%', width: '100%'}}>
                        <img src='images/items/pokemonInBag_red.jpg' alt='HEEEEEEEEEELO' style={{height: '292px', width: '324px', position: 'absolute', left: '-1px', bottom: '-1px', opacity: 0.5, zIndex: 9999 }} />
                    </div>
                    <div className='selected-pokemon-img-container'>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/${pokemon.id}.png`} alt="img" />
                    </div>
                    <div className='selected-pokemon-level-container'>
                        <span>{pokemon.level}</span>
                    </div>
                    <div className='selected-pokemon-name-container'>
                        <span>{pokemon.name}</span>
                    </div>
                    <div className='selected-pokemon-attack-container'>
                        <span>{pokemon.stats.attack}</span>
                    </div>
                    <div className='selected-pokemon-defense-container'>
                        <span>{pokemon.stats.defense}</span>
                    </div>
                    <div className='selected-pokemon-speed-container'>
                        <span>{pokemon.stats.speed}</span>
                    </div>
                    <div className='selected-pokemon-special-container'>
                        <span>{pokemon.stats.special}</span>
                    </div>
                </div>
            ) : (<div><h1>Moves</h1></div>)}
        </div>
    );
};

export default DisplayPartyMember;
