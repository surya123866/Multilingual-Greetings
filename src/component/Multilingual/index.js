import {Component} from 'react'

import './index.css'

import ButtonItem from '../ButtonItem'
import ImageItem from '../ImageItem'

class Multilingual extends Component {
  state = {buttonText: 'English', isFound: true}

  setActiveButtonId = buttonText => {
    this.setState({buttonText})
  }

  render() {
    const {languageGreetingsList} = this.props
    const {buttonText, isFound} = this.state

    const filtered = languageGreetingsList.filter(
      employee => employee.buttonText === buttonText,
    )
    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="buttons-container">
          {languageGreetingsList.map(eachItem => (
            <ButtonItem
              eachItemDetails={eachItem}
              setActiveButtonId={this.setActiveButtonId}
              isActive={eachItem.buttonText === buttonText}
              key={eachItem.id}
            />
          ))}
        </ul>
        <div className="image-container">
          {isFound ? (
            <ImageItem activeImagedetails={filtered[0]} />
          ) : (
            <p className="not-found">Not Found</p>
          )}
        </div>
      </div>
    )
  }
}

export default Multilingual
