import './index.css'

const ScoreCard = props => {
  const {score} = this.props
  return (
    <div>
      <img className={scoreCardImage} />
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p>YOUR SCORE</p>
      <p>{score}</p>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <p>PLAY AGAIN</p>
      </div>
    </div>
  )
}
export default ScoreCard
