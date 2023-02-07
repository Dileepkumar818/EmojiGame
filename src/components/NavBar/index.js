// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isWin} = props
  const display = isWin ? (
    ''
  ) : (
    <div className="score">
      <p className="para">Score: {score} </p>
      <p className="para">Top Score: {topScore}</p>
    </div>
  )
  return (
    <div className="nav-container">
      <div className="logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-head">Emoji Game</h1>
      </div>
      {display}
    </div>
  )
}

export default NavBar
