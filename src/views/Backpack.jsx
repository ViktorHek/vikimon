import React, { useEffect, useState } from 'react'
// import StarterMap from '../components/maps/Startermap'
// import Player from '../components/player/Player'
import { useSelector } from 'react-redux'

const Backpack = () => {
	const { backpackOpen } = useSelector((state) => state)
	const [openBackpack, setOpenBackpack] = useState(state => state)

	useEffect(() => {
		console.log({openBackpack})
		setOpenBackpack(backpackOpen)
	}, [backpackOpen])

	let mapData = StarterMap.map((el) => {
		return <div className={`map_chunk-${el}`}>{el}</div>
	})

	return (
		<div style={{ position: 'relative', top: '0px', left: '0px', display: (openBackpack ? 'block' : 'none') }}>
			<div className="main_backpack_container">
				<div
					className="backpack_container"
					style={{
						position: 'relative',
						top: '-450px',
						left: '0px',
						// opacity: '50%',
						height: '450px',
						width: '500px',
						overflow: 'hidden',
					}}
				>
					<div>
						<p>here is the backpack</p>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Backpack
