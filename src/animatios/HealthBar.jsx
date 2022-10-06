
import React, { useState, useEffect } from 'react'

const HealthBar = ({ data }) => {
    const [healthBarWidth, setHealthBarWidth] = useState(48)
    let maxHealthWidth = 48

    useEffect(() => {
        setHealth()
    }, [])
    useEffect(() => {
        setHealth()
    }, [data])

    function setHealth() {
        if (data) {
            let healthPercent = data.curretnHelath / data.maxHealth
            let healthPercentToPixel = healthPercent * maxHealthWidth
            if (healthPercentToPixel < 1) {
                setHealthBarWidth(0)
            } else {
                setHealthBarWidth(healthPercentToPixel)
            }
        } else {
            setHealthBarWidth(maxHealthWidth)
        }
    }

    return (
        <svg width="80" height="8" viewBox="0 0 80 8" fill="none" className='absoluteP'>
            <rect x="72" y="3" width="1" height="2" fill="black" />
            <rect x="24" y="2" width="48" height="1" fill="black" />
            <rect x="24" y="5" width="48" height="1" fill="black" />
            <rect x="23" y="3" width="1" height="2" fill="black" />
            <rect x="14" y="2" width="2" height="4" fill="black" />
            <rect x="9" y="2" width="2" height="4" fill="black" />
            <rect x="11" y="4" width="1" height="1" fill="black" />
            <rect x="12" y="2" width="1" height="4" fill="black" />
            <rect x="16" y="2" width="1" height="1" fill="black" />
            <rect x="16" y="4" width="1" height="1" fill="black" />
            <rect x="17" y="2" width="1" height="3" fill="black" />
            <rect x="19" y="3" width="1" height="1" fill="black" />
            <rect x="19" y="5" width="1" height="1" fill="black" />
            <rect x="24" y="3" width={healthBarWidth} height="2" fill="#6a8a71" />
        </svg>
    )
}

export default HealthBar
