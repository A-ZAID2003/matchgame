import {Component} from 'react'

import './index.css'

class Header extends Component {
  state = {
    score: '0',
    date: new Date(),
  }

  componentDidMount() {
    this.timerId = setInterval(this.time, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  time = () => {
    this.setState({
      date: new date(),
    })
  }

  render() {
    const {score} = this.state

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
          <p>{date.toLocaleTimeString()} sec</p>
        </div>
      </div>
    )
  }
}

export default Header
