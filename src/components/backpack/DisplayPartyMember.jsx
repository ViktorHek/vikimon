import React, { useEffect, useState } from 'react';
import HealthBar from '../../animatios/HealthBar';
import Font from '../../animatios/font/Font';
import MenuBackgrond from '../../animatios/backgronds/MenuBackgrond';

const DisplayPartyMember = ({ pokemon, showMoves }) => {
    console.log({ pokemon })
    const [moves, setMoves] = useState(false)
    const maxHealth = pokemon.stats.hp
    let curretnHelath = maxHealth
    const menuBackgrondInitPos = { top: 0, left: 0, right: 72, bottom: 72 }

    useEffect(() => {
        setMoves(showMoves)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showMoves])

    return (
        <div className='absolute-full-size' style={{ zIndex: 100, backgroundColor: 'lime' }}>
            {!moves ? (
                <div className='selected-pokemon-stats-container'>
                    <div style={{ position: 'relative', top: 0, left: 0, height: '100%', width: '100%' }}>
                        <img src='images/items/pokemonInBag_red.jpg' alt='HEEEEEEEEEELO' style={{ height: '292px', width: '324px', position: 'absolute', left: '-1px', bottom: '-1px', opacity: 0.3, zIndex: 9999 }} />
                    </div>
                    <div style={{ position: 'absolute', top: '64px', left: 0, height: '80px', width: '80px' }}>
                        <MenuBackgrond position={menuBackgrondInitPos} />
                    </div>
                    <div className='selected-pokemon-img-container'>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/${pokemon.id}.png`} alt="img" />
                    </div>
                    <div style={{ position: 'absolute', top: 0, right: 0, height: '62px', width: '96px' }}>
                        <svg width={96} height={62} viewBox="0 0 96 62" fill="none" className='absoluteP'>
                            <rect x="6" y="57" width="2" height="1" fill="black" />
                            <rect x="4" y="58" width="4" height="1" fill="black" />
                            <rect x="2" y="59" width="90" height="2" fill="black" />
                            <rect x="0" y="60" width="2" height="1" fill="black" />
                            <rect x="91" y="8" width="2" height="52" fill="black" />
                        </svg>
                    </div>
                    <div style={{ position: 'absolute', bottom: 0, right: 0, height: '80px', width: '80px' }}>
                        <svg width={80} height={80} viewBox="0 0 80 80" fill="none" className='absoluteP'>
                            <rect x="22" y="73" width="2" height="1" fill="black" />
                            <rect x="20" y="74" width="4" height="1" fill="black" />
                            <rect x="18" y="75" width="58" height="2" fill="black" />
                            <rect x="16" y="76" width="2" height="1" fill="black" />
                            <rect x="75" y="8" width="2" height="68" fill="black" />
                        </svg>
                    </div>
                    <div style={{ position: 'absolute', top: '16px', right: '48px' }}>
                        <svg width={8} height={8} viewBox="0 0 8 8" fill="none" className='absoluteP'>
                            <rect x="1" y="3" width="1" height="1" fill="black" />
                            <rect x="1" y="5" width="1" height="1" fill="black" />
                            <rect x="3" y="2" width="2" height="5" fill="black" />
                            <rect x="5" y="6" width="2" height="1" fill="black" />
                        </svg>
                    </div>
                    <div className='selected-pokemon-level-container'>
                        <Font text={JSON.stringify(pokemon.level)} />
                    </div>
                    <div style={{ position: 'absolute', top: '24px', right: '80px' }}>
                        <HealthBar data={{ curretnHelath, maxHealth }} />
                    </div>
                    <div className='selected-pokemon-name-container'>
                        <Font text={pokemon.name} />
                    </div>
                    <div className='selected-pokemon-attack-container'>
                        <Font text={JSON.stringify(pokemon.stats.attack)} />
                    </div>
                    <div style={{ position: 'absolute', top: '72px', left: '8px' }}>
                        <Font text={'ATTACK'} />
                    </div>
                    <div style={{ position: 'absolute', top: '88px', left: '8px' }}>
                        <Font text={'DEFENSE'} />
                    </div>
                    <div style={{ position: 'absolute', top: '104px', left: '8px' }}>
                        <Font text={'SPEED'} />
                    </div>
                    <div style={{ position: 'absolute', top: '120px', left: '8px' }}>
                        <Font text={'SPECIAL'} />
                    </div>
                    <div className='selected-pokemon-defense-container'>
                        <Font text={JSON.stringify(pokemon.stats.defense)} />
                    </div>
                    <div className='selected-pokemon-speed-container'>
                        <Font text={JSON.stringify(pokemon.stats.speed)} />
                    </div>
                    <div className='selected-pokemon-special-container'>
                        <Font text={JSON.stringify(pokemon.stats.special)} />
                    </div>
                </div>
            ) : (<div><h1>Moves</h1></div>)}
        </div>
    );
};

export default DisplayPartyMember;
