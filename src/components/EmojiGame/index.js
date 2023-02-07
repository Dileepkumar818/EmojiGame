/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, listTrack: [], isWon: false, topScore: 0}

  onChangeEmoji = id => {
    const {listTrack} = this.state
    const track = listTrack.find(each => each === id)
    if (track === undefined) {
      this.setState(prev => ({
        listTrack: [...prev.listTrack, id],
        score: prev.score + 1,
      }))
    } else {
      this.setState(prev => ({isWon: !prev.isWon}))
    }
    console.log(track)
    console.log(id)
    console.log(listTrack)
  }

  gameWon = () => {
    this.setState(prev => ({
      isWon: !prev.isWon,
    }))
  }

  playAgain = () => {
    const {score, topScore} = this.state
    const highScore = score > topScore ? score : topScore

    this.setState({
      score: 0,
      isWon: false,
      listTrack: [],
      topScore: highScore,
    })
  }

  render() {
    const {score, isWon, topScore} = this.state
    const {emojisList} = this.props
    const updatedList = emojisList.sort(() => Math.random() - 0.5)
    let isWonorLose = null
    if (score === 12) {
      isWonorLose = !isWon
    } else {
      isWonorLose = isWon
    }

    let gameStatus = ''
    if (isWonorLose) {
      gameStatus = <WinOrLoseCard score={score} playAgain={this.playAgain} />
    } else {
      gameStatus = updatedList.map(each => (
        <EmojiCard
          emojiList={each}
          key={each.id}
          onChangeEmoji={this.onChangeEmoji}
        />
      ))
    }
    return (
      <div className="background">
        <NavBar isWin={isWonorLose} score={score} topScore={topScore} />
        <ul className="list-container">{gameStatus}</ul>
      </div>
    )
  }
}

export default EmojiGame
