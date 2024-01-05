import './index.css'

const Header = props => {
  const {gameTimer, score} = props

  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
        alt="website logo"
      />
      <div>
        <p>Score: {score}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
        />
        <p>{gameTimer} sec</p>
      </div>
    </div>
  )
}

export default Header
