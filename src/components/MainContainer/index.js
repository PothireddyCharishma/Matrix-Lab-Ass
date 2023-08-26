import {Component} from 'react'
import LeftContainer from '../LeftContainer'
import TokenAddress from '../TokenAddress'
import PairAddress from '../PairAddress'
import './index.css'

class MainContainer extends Component {
  state = {
    activeTabId: 'TOKEN',
  }

  changeToken = () => {
    this.setState({activeTabId: 'PAIR'})
  }

  changePair = () => {
    this.setState({activeTabId: 'TOKEN'})
  }

  render() {
    const {activeTabId} = this.state
    return (
      <div>
        <div className="main-container">
          <LeftContainer
            changeToken={this.changeToken}
            changePair={this.changePair}
            activeTabId={activeTabId}
          />
          {activeTabId === 'TOKEN' && <TokenAddress />}
          {activeTabId === 'PAIR' && <PairAddress />}
        </div>
        <div className="border-color-highlight">NFTIFY APP</div>
      </div>
    )
  }
}

export default MainContainer
