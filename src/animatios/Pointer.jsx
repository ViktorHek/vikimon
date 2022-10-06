import React from 'react'
import globals from '../utils/globalVariables'

const Pointer = () => {

    const { fontSize } = globals

    return (
        <div className='main-pointer-container'>
            <svg width={fontSize} height={fontSize} viewBox="0 0 8 8" fill="none">
                <rect x="1" y="1" width="2" height="7" fill="black" />
                <rect x="3" y="2" width="1" height="5" fill="black" />
                <rect x="4" y="3" width="1" height="3" fill="black" />
                <rect x="5" y="4" width="1" height="1" fill="black" />
            </svg>
        </div>
    )
}

export default Pointer
