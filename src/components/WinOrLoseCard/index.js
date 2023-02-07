// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props
  const status = score < 12 ? 'You Lose' : 'You Won'
  const text = score < 12 ? 'Score' : 'Best Score'
  const image =
    score < 12
      ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

  const playGame = () => {
    playAgain()
  }
  return (
    <div className="game-status">
      <div className="win-lose">
        <h1 className="head">{status}</h1>
        <p className="text">{text}</p>
        <p className="score">{score}/12</p>
        <button className="play" type="button" onClick={playGame}>
          Play Again
        </button>
      </div>
      <div>
        <img src={image} className="image" alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
