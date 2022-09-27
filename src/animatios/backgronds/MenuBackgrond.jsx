import React from 'react';

const MenuBackgrond = ({ data }) => {
    return (
        <div className='menu-backgrond-container'>

            <div className='top-left-corner'>
                <svg width="8" height="8" viewBox="0 0 100% 100%" fill="none">
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

            <div className='top-right-corner'>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
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

            <div className='bottom-left-corner'>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
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

            <div className='bottom-right-corner'>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
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

            <div className='top-border'>
                <svg width="100%" height="8" viewBox="0 0 100% 100%" fill="none">
                    <rect y="2" width="100%" height="1" fill="black" />
                    <rect y="4" width="100%" height="2" fill="black" />
                </svg>
            </div>

            <div className='left-border'>
                <svg width="8" height="100%" viewBox="0 0 100% 100%" fill="none">
                    <rect x="2" width="1" height="100%" fill="black" />
                    <rect x="4" width="1" height="100%" fill="black" />
                </svg>
            </div>
            <div className='right-border'>
                <svg width="8" height="100%" viewBox="0 0 100% 100%" fill="none">
                    <rect x="2" width="1" height="100%" fill="black" />
                    <rect x="4" width="1" height="100%" fill="black" />
                </svg>
            </div>
            <div className='bottom-border'>
                <svg width="100%" height="8" viewBox="0 0 100% 100%" fill="none">
                    <rect y="2" width="100%" height="1" fill="black" />
                    <rect y="4" width="100%" height="2" fill="black" />
                </svg>
            </div>

        </div>

    )
}

export default MenuBackgrond