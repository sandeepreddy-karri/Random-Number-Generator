// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    console.log(randomNumber)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="main-background">
        <div className="number-box">
          <h1 className="title">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.generateNumber}
          >
            Generate
          </button>
          <p className="title">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
