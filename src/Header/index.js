import './index.css'

const Header = props => {
  const {gameTimer, score} = this.props

  componentDidMount() {
    this.timerId = setInterval(this.time, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  time = () => {
    const {gameTimer} = this.props
    if (gameTimer > 0) {
      this.setState(prevState => ({gameTimer: prevState.gameTimer - 1}))
    }
  }

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
