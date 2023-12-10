import './index.css'
import Header from '../Header'
import TabItem from '../TabItem'

const MainContainer = () => {
    state = {
        isTimerRunning: true
    }

    gameView = () => {
        return(
            <div>
                <img />
                <TabItem />
                <Images />
            </div>
        )
    }

    render(){
     return(
        <div>
            <Header />
            <div className="bgContainer">
                {isTimerRunning ? 
                this.gameView() :
                 <ScoreCard />}
            </div>
        </div>
        )
}
}
export default MainContainer
