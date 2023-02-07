// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiList, onChangeEmoji} = props
  const {id, emojiName, emojiUrl} = emojiList
  const changeEmoji = () => {
    onChangeEmoji(id)
  }
  return (
    <li className="list-container">
      <button className="emoji-button" type="button" onClick={changeEmoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
