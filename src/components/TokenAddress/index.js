import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './index.css'

const DisplayPairs = props => {
  const {details} = props
  const {dexId, quoteToken, priceNative, priceUsd, volume} = details
  return (
    <>
      <li className="list-token-main-container">
        <h1 className="basic-info-head">Basic Info</h1>
        <div className="token-description-rows">
          <ul className="token-description-heads">
            <li className="token-description-main-head">Pair created at</li>
            <li className="token-description-main-head">Symbol</li>
            <li className="token-description-main-head">Dex ID</li>
            <li className="token-description-main-head">Pair Address</li>
          </ul>
          <ul className="token-description-heads">
            <li className="token-description-value-head">Etherium</li>
            <li className="token-description-value-head">ETH</li>
            <li className="token-description-value-head">{dexId}</li>
            <li className="token-description-value-head">#{volume.h24}</li>
          </ul>
          <svg
            className="eclipse-token-container"
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
          >
            <circle cx="28" cy="28" r="28" fill="#960252" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                fill="white"
              />
            </svg>
          </svg>
        </div>
      </li>
      {/* 2 */}
      <li className="list-token-main-container">
        <h1 className="basic-info-head">Base Token</h1>
        <div className="token-description-rows">
          <ul className="token-description-heads">
            <li className="token-description-main-head">Name</li>
            <li className="token-description-main-head">Symbol</li>
            <li className="token-description-main-head">Address</li>
          </ul>
          <ul className="token-description-heads">
            <li className="token-description-value-head">Etherium</li>
            <li className="token-description-value-head">ETH</li>
            <li className="token-description-value-head">#{volume.h6}</li>
          </ul>
          <svg
            className="eclipse-token-container"
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
          >
            <circle cx="28" cy="28" r="28" fill="#960252" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                fill="white"
              />
            </svg>
          </svg>
        </div>
      </li>
      {/* 3 */}
      <li className="list-token-main-container">
        <h1 className="basic-info-head">Quote Token</h1>
        <div className="token-description-rows">
          <ul className="token-description-heads">
            <li className="token-description-main-head">Name</li>
            <li className="token-description-main-head">Symbol</li>
            <li className="token-description-main-head">Address</li>
          </ul>
          <ul className="token-description-heads">
            <li className="token-description-value-head">{quoteToken.name}</li>
            <li className="token-description-value-head">
              {quoteToken.symbol}
            </li>
            <li className="token-description-value-head">#{volume.h1}</li>
          </ul>
          <svg
            className="eclipse-token-container"
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
          >
            <circle cx="28" cy="28" r="28" fill="#960252" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                fill="white"
              />
            </svg>
          </svg>
        </div>
      </li>
      {/* 4 */}
      <li className="list-token-main-container">
        <h1 className="basic-info-head">Price</h1>
        <div className="token-description-rows">
          <ul className="token-description-heads">
            <li className="token-description-main-head">Price Native</li>
            <li className="token-description-main-head">Price USD</li>
          </ul>
          <ul className="token-description-heads">
            <li className="token-description-value-head">{priceNative}</li>
            <li className="token-description-value-head">{priceUsd}</li>
          </ul>
          <svg
            className="eclipse-token-container"
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
          >
            <circle cx="28" cy="28" r="28" fill="#960252" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                fill="white"
              />
            </svg>
          </svg>
        </div>
      </li>
    </>
  )
}

class TokenAddress extends Component {
  state = {
    searchInput: '',
    results: [],
  }

  getApiDetails = async () => {
    const {searchInput} = this.state
    const response = await fetch(
      `https://api.dexscreener.com/latest/dex/tokens/${searchInput}`,
    )
    const data = await response.json()
    const newData = data.pairs.sort((a, b) => b.priceUsd - a.priceUsd)
    const maxResults = 10
    const displayedResults = newData.slice(0, maxResults)
    this.setState({results: displayedResults})
  }

  changedInput = e => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    const {searchInput, results} = this.state
    return (
      <div className="token-main-container">
        <div className="search-connect-container">
          <div className="search-container">
            <input
              value={searchInput}
              onChange={this.changedInput}
              type="text"
              placeholder="Search"
              className="search-input-container"
            />
            <button
              onClick={this.getApiDetails}
              type="button"
              className="search-icon-container"
            >
              <AiOutlineSearch />
            </button>
          </div>
          <button type="button" className="connect-button">
            Connect
          </button>
        </div>
        <h1 className="token-search-results-head">Token Search Results </h1>
        <ul className="unorder-token-list">
          {results.map(each => (
            <DisplayPairs key={each.pairAddress} details={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TokenAddress
