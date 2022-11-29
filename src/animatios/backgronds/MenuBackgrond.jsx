import React from 'react';

const MenuBackgrond = ({ position }) => {
 
    const size = 8
    const {top, left, right, bottom} = position

    // corner style
    const topLeft = { top: `${top}px`, left: `${left}px` }
    const topRight = { top: `${top}px`, left: `${right}px` }
    const bottomLeft = { top: `${bottom}px`, left: `${left}px` }
    const bottomRight = { top: `${bottom}px`, left: `${right}px` }
    
    // border style
    const topBorder = { 
        top: `${top}px`, 
        left: `${left + 8}px`, 
        width: `${right - 8}px`
    }
    const rightBorder = { 
        top: `${top + 8}px`, 
        left: `${right}px`, 
        height: `${bottom - 8}px` 
    }
    const leftBorder = { 
        top: `${top + 8}px`, 
        left: `${left - 1}px`, 
        height: `${bottom - 8}px` 
    }
    const bottomBorder = { 
        top: `${bottom}px`, 
        left: `${left + 8}px`, 
        width: `${right - 8}px` 
    }

    return (
        <div className='menu-backgrond-container'>

            <div className='top-left-corner' style={topLeft}>
                <svg width={size} height={size} viewBox="0 0 8 8" fill="none" className='absoluteP'>
                    <rect x="4" y="2" width="2" height="1" fill="black" />
                    <rect x="7" y="2" width="1" height="1" fill="black" />
                    <rect x="2" y="2" width="1" height="1" fill="black" />
                    <rect x="1" y="4" width="1" height="1" fill="black" />
                    <rect x="1" y="3" width="6" height="1" fill="black" />
                    <rect x="6" y="4" width="1" height="1" fill="black" />
                    <rect x="2" y="5" width="1" height="1" fill="black" />
                    <rect x="5" y="5" width="1" height="1" fill="black" />
                    <rect x="7" y="5" width="1" height="1" fill="black" />
                    <rect x="6" y="6" width="1" height="1" fill="black" />
                    <rect x="3" y="6" width="1" height="2" fill="black" />
                    <rect x="4" y="6" width="1" height="1" fill="black" />
                    <rect x="5" y="7" width="1" height="1" fill="black" />
                    <rect x="3" y="1" width="2" height="1" fill="black" />
                </svg>
            </div>

            <div className='top-right-corner' style={topRight}>
                <svg width={size} height={size} viewBox="0 0 8 8" fill="none" className='absoluteP'>
                    <rect x="3" y="1" width="2" height="1" fill="black" />
                    <rect x="4" y="2" width="2" height="2" fill="black" />
                    <rect x="6" y="3" width="1" height="2" fill="black" />
                    <rect y="2" width="1" height="1" fill="black" />
                    <rect x="2" y="2" width="1" height="1" fill="black" />
                    <rect x="1" y="3" width="3" height="1" fill="black" />
                    <rect x="1" y="4" width="1" height="1" fill="black" />
                    <rect y="5" width="1" height="1" fill="black" />
                    <rect x="2" y="5" width="1" height="1" fill="black" />
                    <rect x="1" y="6" width="1" height="1" fill="black" />
                    <rect x="2" y="7" width="1" height="1" fill="black" />
                    <rect x="3" y="6" width="1" height="1" fill="black" />
                    <rect x="4" y="6" width="1" height="2" fill="black" />
                    <rect x="5" y="5" width="1" height="1" fill="black" />
                </svg>
            </div>

            <div className='bottom-left-corner' style={bottomLeft}>
                <svg width={size} height={size} viewBox="0 0 8 8" fill="none" className='absoluteP'>
                    <rect x="3" y="1" width="2" height="1" fill="black" />
                    <rect x="5" width="1" height="1" fill="black" />
                    <rect x="6" y="1" width="1" height="1" fill="black" />
                    <rect x="7" y="2" width="1" height="1" fill="black" />
                    <rect x="4" y="2" width="2" height="1" fill="black" />
                    <rect x="1" y="3" width="6" height="1" fill="black" />
                    <rect x="2" y="2" width="1" height="1" fill="black" />
                    <rect x="1" y="4" width="1" height="1" fill="black" />
                    <rect x="6" y="4" width="1" height="1" fill="black" />
                    <rect x="2" y="5" width="1" height="1" fill="black" />
                    <rect x="3" y="6" width="2" height="1" fill="black" />
                    <rect x="5" y="5" width="1" height="1" fill="black" />
                    <rect x="7" y="5" width="1" height="1" fill="black" />
                    <rect x="3" width="1" height="1" fill="black" />
                </svg>
            </div>

            <div className='bottom-right-corner' style={bottomRight}>
                <svg width={size} height={size} viewBox="0 0 8 8" fill="none" className='absoluteP'>
                    <rect x="2" width="1" height="1" fill="black" />
                    <rect x="1" y="1" width="1" height="1" fill="black" />
                    <rect y="2" width="1" height="1" fill="black" />
                    <rect x="3" y="1" width="1" height="1" fill="black" />
                    <rect x="2" y="2" width="1" height="1" fill="black" />
                    <rect x="4" width="1" height="3" fill="black" />
                    <rect x="5" y="2" width="1" height="1" fill="black" />
                    <rect x="1" y="3" width="6" height="1" fill="black" />
                    <rect x="1" y="4" width="1" height="1" fill="black" />
                    <rect y="5" width="1" height="1" fill="black" />
                    <rect x="2" y="5" width="1" height="1" fill="black" />
                    <rect x="6" y="4" width="1" height="1" fill="black" />
                    <rect x="5" y="5" width="1" height="1" fill="black" />
                    <rect x="3" y="6" width="2" height="1" fill="black" />
                </svg>

            </div>

            <div className='top-border' style={topBorder}>
                <svg width="100%" height={size} viewBox="0 0 100% 100%" fill="none" className='absoluteP'>
                    <rect y="2" width="100%" height="1" fill="black" />
                    <rect y="4" width="100%" height="2" fill="black" />
                </svg>
            </div>

            <div className='left-border' style={leftBorder}>
                <svg width={size} height="100%" viewBox="0 0 100% 100%" fill="none" className='absoluteP'>
                    <rect x="3" width="1" height="100%" fill="black" />
                    <rect x="5" width="1" height="100%" fill="black" />
                </svg>
            </div>
            <div className='right-border' style={rightBorder}>
                <svg width={size} height="100%" viewBox="0 0 100% 100%" fill="none" className='absoluteP'>
                    <rect x="2" width="1" height="100%" fill="black" />
                    <rect x="4" width="1" height="100%" fill="black" />
                </svg>
            </div>
            <div className='bottom-border' style={bottomBorder}>
                <svg width="100%" height={size} viewBox="0 0 100% 100%" fill="none" className='absoluteP'>
                    <rect y="2" width="100%" height="1" fill="black" />
                    <rect y="4" width="100%" height="2" fill="black" />
                </svg>
            </div>

        </div>

    )
}

export default MenuBackgrond