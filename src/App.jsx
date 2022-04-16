import OpenWorld from './views/OpenWorld'
import './styles/css/styles.css'
import './styles/scss/styles.css'

function App() {
  return (
    <div className="main_game_container">
      <div style={{height: '450px', width: '500px'}} >
        <OpenWorld />
      </div>
    </div>
  )
}

export default App
