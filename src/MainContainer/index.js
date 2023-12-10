import {Component} from 'react'

import './index.css'
import Header from '../Header'
import TabItem from '../TabItem'
import Images from '../Images'
import ScoreCard from '../ScoreCard'

class MainContainer extends Component {
  state = {
    isTimerRunning: true,
  }

  gameView = () => {
    ;<div>
      <TabItem />
      <Images />
    </div>
  }

  render() {
    const {isTimerRunning} = this.state
    return (
      <div>
        <Header />
        <div className="bgContainer">
          {isTimerRunning ? this.gameView() : <ScoreCard />}
        </div>
      </div>
    )
  }
}
export default MainContainer
