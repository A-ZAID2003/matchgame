import {Component} from 'react'

import './index.css'

class Header extends Component {
  state = {
    score: 0,
    gameTimer: 60,
  }

  componentDidMount() {
    this.timerId = setInterval(this.time, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  time = () => {
    const {gameTimer} = this.state
    if (gameTimer > 0) {
      this.setState(prevState => ({gameTimer: prevState.gameTimer - 1}))
    }
  }

  render() {
    const {gameTimer, score} = this.state

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
          alt="website logo"
        />
        <div>
          <p>score: {score}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p>{gameTimer} sec</p>
        </div>
      </div>
    )
  }
}

export default Header
